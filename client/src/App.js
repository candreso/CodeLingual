import Header from "./Components/Header/Header";
import ChloeHeader from "./components/Header/ChloeHeader";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import Auth from "./Components/Auth/Auth";
import AboutUs from "./Components/AboutUs/AboutUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <ChloeHeader />
      <Switch>
        <Route exact path="/auth" render={() => <Auth />} />
        <Route exact path="/about-us" render={() => <AboutUs />} />
        <Route exact path="/" render={() => <Landing />} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
