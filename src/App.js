import Navbar from './components/Navbar'
import './App.css';
import "/home/ga1ileo/Desktop/Portfolio/node_modules/bootstrap/dist/css/bootstrap.min.css"
import Particles from 'react-particles-js';
import Projects from './components/Projects';
import Header from './components/Header'
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Particles
      params={{
        particles:{
          number:{
            value:40,
            density:{
              enable:true,
              value_area:900
            }
          }
        }
      }}

    />
    <Navbar/>
    <Header/>
    
    <Projects/>
    <Footer/>
    </>
  );
}

export default App;
