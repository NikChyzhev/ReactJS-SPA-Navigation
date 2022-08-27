import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Posts from './components/Posts';
import PhotosInsta from './components/PhotosInsta';
import Contacts from './components/Contacts';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router basename=''>        
        <Route path='/ReactJS-SPA-Navigation/' exact component={HomePage}/>
        <Route path='/posts' component={Posts}/>
        <Route path='/photos' component={PhotosInsta}/>
        <Route path='/contacts' exact component={Contacts}/>
        <Route path='/contacts/:id' component={Contact}/>
      </Router>
    </div>
  );
}

export default App;
