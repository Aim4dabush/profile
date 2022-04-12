import React from "react";

//routes
import { Link } from "react-router-dom";

//styles
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <h1>E Komo Mai</h1>
        <p>(Welcome)</p>
        <img src={process.env.PUBLIC_URL + "/images/kanaka.jpg"} alt="kanaka" />
        <h2>
          My name is{" "}
          <span>Edward Lawrence Naho'a Ali'i Iku'u Ikaika Arasato</span>. <br />{" "}
          You can <Link to={"/contact"}>click here</Link> to contact me or go to
          my contact page after you're done looking around.
        </h2>
      </div>
    </div>
  );
}

export default Home;
