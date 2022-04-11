import React from "react";

//router
import { Link } from "react-router-dom";

//Styles
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <h1>
          My name is{" "}
          <span>Edward Lawrence Naho'a Ali'i Iku'u Ikaika Arasato</span>.
        </h1>
        <img src={process.env.PUBLIC_URL + "/images/kanaka.jpg"} alt="kanaka" />
        <h2>
          I hope you enjoy my profile. You can{" "}
          <Link to={"/contact"}>click here</Link> to contact me or go to my
          contact page after you're done looking around.
        </h2>
      </div>
    </div>
  );
}

export default Home;
