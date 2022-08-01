import './App.css';
import Router from './Config/Router'
import Nav from './Components/Navbar'
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
