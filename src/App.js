import './App.css';
import Home from "./component/Home";
import Navigation from "./component/Navigation";
import Benefits from "./component/Benefits";
import HappyUser from './component/HappyUser';
import NewsLetter from './component/NewsLetter';
import Footer from './component/Footer';

import "./style/LandingPage.css"

function App() {
  return (
    <div>
      <div className="Navigation">
        <Navigation />
      </div>

      <div className="Home">
        <Home />
      </div>

      <div className="Benefits">
        <Benefits />
      </div>

      <div className="HappyUser">
        <HappyUser />
      </div>

      <div className="NewsLetter">
        <NewsLetter />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
