import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import propTypes from 'prop-types';

function App() {
  return (
    <>
    
    <Navbar title="MyApp"/>
    </>
  );
}

export default App;

Navbar.propTypes = {
  title: propTypes.string
}
