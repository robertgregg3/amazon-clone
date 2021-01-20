import React from "react";
import "../css/Home.css";
import Product from "../Components/Product";
import LeanStartup from "../images/lean-startup.png";
import Kenwood from "../images/kenwood.jpg";
import Samsung from "../images/samsung.jpg";
import Echo from "../images/echo.jpg";
import Ipad from "../images/ipad.jpg";
import Apple from "../images/apple.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/SBP/2018/gateway/1110572_smb_gw_tallhero_1500x600_curiscope_1x_uk._CB485200300_.jpg"
          alt="Amazon home top"
        />
        <div className="home__row">
          <Product
            id="1223233"
            title="The Lean Startup"
            price={9.99}
            image={LeanStartup}
            rating={5}
          />
          <Product
            id="1223633"
            title="Apple Watch"
            price={169.99}
            image={Apple}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1223299"
            title="Kenwood Mixer"
            price={239.99}
            image={Kenwood}
            rating={4}
          />
          <Product
            id="1223433"
            title="Amazon Echo Dot"
            price={79.99}
            image={Echo}
            rating={4}
          />
          <Product
            id="1223533"
            title="Apple Ipad"
            price={399.99}
            image={Ipad}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="1223333"
            title="Samsung curved monitor"
            price={199.99}
            image={Samsung}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
