import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import background_image from "./images/f1.jpg"

function App() {
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
              Räikkönen
            </i>
            have won a record 15 Drivers' Championships for the team. Since
            Räikkönen's title in 2007 the team narrowly lost out on the 2008
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
      </div>

      <Footer />
    </div>
  );
}

export default App;
