import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Auth from "./components/Auth/Auth";
import AboutUs from "./components/AboutUs/AboutUs";
import CodeSubmissions from "./components/CodeSubmissions/CodeSubmissions";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={["/", "/translate"]} render={() => <Landing />} />
        <Route exact path="/about-us" render={() => <AboutUs />} />
        <Route path="/auth" render={() => <Auth />} />

        <ProtectedRoute
          path="/submit-translations"
          render={() => <CodeSubmissions />}
        />
        <Route path="/*" render={() => <Landing />} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
