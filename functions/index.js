const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_LIkk2LPegN1dI86Zu8clnVGY");

// api

// app config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json()); // send data in a JSON format

// api routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received BOOM for this now >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "gbp",
  });

  // OK created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app); // setup needed to get the app running on the cloud function
