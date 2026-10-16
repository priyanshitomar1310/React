// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import propTypes from 'prop-types';

function App() {
  return (
    <>
    <Navbar title="MyApp"/>
    <div className="container my-8 mb-8">
      {/* <TextForm heading="Enter text to analyze"/> */}
      <About />
    </div>
    </>
  );
}

export default App;

Navbar.propTypes = {
  title: propTypes.string
}
