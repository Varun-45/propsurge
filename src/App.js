import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Demo from './Components/demo';
import { Route, Switch, Routes } from 'react-router-dom';
import Propdetails from './Components/propdetails';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import Demo2 from './Components/demo2';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import About from './Components/About';

// function BlogPost() {
//   let { id } = useParams();
//   return <div style={{ fontSize: "50px", marginTop: "4.5rem" }}>
//     Now showing post {id}
//   </div>;
// }
function App() {
  return (
    <>
      <Router>  <Navbar />

        <Routes>


          <Route path='/page/:id' element={< Propdetails />} />

          <Route path='/' element={< Demo2 />} />

          <Route path='/about' element={< About />} />


        </Routes>
      </Router>
    </>
  );
}

export default App;
