import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navar/Navbar';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import {BrowserRouter as Router,Route,Routes,link} from 'react-router-dom' 
import About from './components/About/About'; 
import Contact from './components/contact/Contact'
import Alert from './components/Alert/Alert';
import Home from './components/Home/Home';
import Education from './components/education/Education'
import Project from './components/projects/Project';

function App() {
  const [displaySize, setDisplaySize] = useState({
    width: window.innerWidth, 
    height: window.innerHeight 
   });

  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState({msg: '',type: ''});

  const showAlert=(msg,type)=>{
    setAlert({
      msg: msg,
      type: type
    });
    setTimeout(() => {
      setAlert({msg: '',type: ''});
    }, 2000);
  }
  

  const modeChange=()=>{
    if(mode=='light'){
      setMode('dark');
      showAlert("Dark Mode Enabled","success");
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
    }else{
      setMode('light');
      showAlert("Light Mode Enabled","success");
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
  }


  return (
    <>
      <Router>
        <Navbar displaySize={displaySize} title="Pritam.com" mode={mode} modeChange={modeChange} />  
        <Alert alert={alert}/>

        <Routes>
          <Route exact path='/' element={<Home displaySize={displaySize}/>} />
          <Route exact path='/about' element={<About mode={mode}/>}/>
          <Route exact path='/contact' element={<Contact mode={mode}/>} />
          <Route exact path='/education' element={<Education displaySize={displaySize} mode={mode}/>} />
          <Route exact path='/projects' element={<Project displaySize={displaySize}/>} />
        </Routes>

        <Footer mode={mode}/>
      </Router>    
    </>
  );
}

export default App;
