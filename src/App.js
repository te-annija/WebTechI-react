import "./app.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Driver from "./Components/Driver/Driver";
import Form from "./Components/Form/Form";
import background_image from "./images/f1.jpg";
import { drivers } from "./Services/DriverInfoService";
import { races } from "./Services/RaceInfoService";
import leclerc_image from "./images/drivers/leclerc.jpg"
import sainz_image from "./images/drivers/sainz.jpg";

function App() {
  const [currentRaceMap, setCurrentRaceMap] = React.useState(0);
  const [hoverRaceMap, setHoverRaceMap] = React.useState(0); 
  const displayRaces = races.map((race, index) => {
    return (
      <li
        id={index}
        key={index}
        onClick={() => setCurrentRaceMap(index)}
        onMouseEnter={() => setHoverRaceMap(index)}
        onMouseLeave={() => setHoverRaceMap(currentRaceMap)}
        style={{ color: hoverRaceMap === index ? "yellow" : "white" }}
      >
        {race.place} Grand Prix
      </li>
    );
  })


  return (
    <div className="app">
      <header
        className="header"
        style={{
          backgroundImage: `url(${background_image})`,
        }}
      >
        <Navbar />
        <div className="header__info">
          <h1>Scuderia Ferrari</h1>
          <h2>Formula One</h2>
        </div>
      </header>

      <div className="content">
        <section className="section-info" id="section-info">
          <h2>Information</h2>
          <p>
            <b>Scuderia Ferrari</b> is the racing division of luxury Italian
            auto manufacturer Ferrari and the racing team that competes in
            Formula One racing. The team is also nicknamed{" "}
            <b>"The Prancing Horse"</b>, in reference to their logo. It is the
            oldest surviving and most successful Formula One team, having
            competed in every world championship since the 1950 Formula One
            season.
            <br />
            As a constructor, Ferrari has a record 16 Constructors'
            Championships, the last of which was won in 2008.
            <i>
              Alberto Ascari, Juan Manuel Fangio, Mike Hawthorn, Phil Hill, John
              Surtees, Niki Lauda, Jody Scheckter, Michael Schumacher and Kimi
              R??ikk??nen
            </i>
            have won a record 15 Drivers' Championships for the team. Since
            R??ikk??nen's title in 2007 the team narrowly lost out on the 2008
            drivers' title with Felipe Massa and the 2010 and 2012 drivers'
            titles with Fernando Alonso. The 2020 Tuscan Grand Prix marked
            Ferrari's 1000th Grand Prix in Formula One. <br />
            Michael Schumacher is the team's most successful driver. Joining the
            team in 1996 and departing in 2006, he won five consecutive drivers'
            titles and 72 Grands Prix for the team. His titles came
            consecutively between 2000 and 2004, and the team won consecutive
            constructors' titles between 1999 and 2004; this was the team's most
            successful period.
            <br />
            The team's 2022 drivers are <b>Charles Leclerc </b> and{" "}
            <b>Carlos Sainz Jr.</b>
          </p>
        </section>
        <section className="section-drivers" id="section-drivers">
          <h2>Drivers</h2>
          <div className="drivers">
            <Driver image={leclerc_image} driver={drivers[0]} />
            <Driver image={sainz_image} driver={drivers[1]} />
          </div>
        </section>
        <section className="section-races" id="section-races">
          <h2> Races 2022</h2>
          <div className="races">
            <ol className="races__titles">{displayRaces}</ol>
            <div className="races__maps">
              <h3>{races[hoverRaceMap].place} Grand Prix </h3>
              <h3>Date of the race: {races[hoverRaceMap].date}</h3>
              <img src={races[hoverRaceMap].map} />
            </div>
          </div>
        </section>
        <section className="section-form" id="section-form">
          <h2>Leave your prediction!</h2>
          <Form />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
