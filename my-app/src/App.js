import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import HelloWorld from './Components/HelloWorld';

function App() {
  return (
    <div>
       <Router>
          <Header/>

       <HelloWorld/>
      
        <Switch>
          <Route exact path="/">
            <h1 className="font-bold text2xl">This is the Home Page</h1>
          </Route>
          <Route path="/about">
          <h1 className="font-bold text2xl">About Us</h1>
          </Route>
        </Switch>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
