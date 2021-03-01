import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Translate from "./components/Translate/Translate";
function App() {
  return (
    <div className="wrap">
      <Header />
      <Translate />
      <Footer />
    </div>
  );
}

export default App;
