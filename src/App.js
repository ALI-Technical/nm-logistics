import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Router from './Config/Router'
import Nav from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer Section/Footer';

function App() {
  return (
    <div className="App">
      <Nav className="Navbar"/>
      <Router />
      <Footer />
    </div>
  );
}

export default App;
