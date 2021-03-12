import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Auth from "./components/Auth/Auth";
import AboutUs from "./components/AboutUs/AboutUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
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
