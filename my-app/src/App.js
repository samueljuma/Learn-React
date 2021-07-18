import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>

      <Footer/>
    </div>
  );
}

export default App;
