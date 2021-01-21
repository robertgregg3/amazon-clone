import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-robg.cloudfunctions.net/api", // api cloud function url
});

// old local host api if we need tomake changes http://localhost:5001/clone-robg/us-central1/api

export default instance;
