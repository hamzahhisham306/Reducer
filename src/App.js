import './App.css';
import DeveloperForm from './components/DeveloperForm';
import DeveloperInfo from './components/DeveloperInfo';
import { useReducer } from 'react';
import { Developer } from './components/Developer';
import NavbarDev from './components/Nav';
import Footer from './components/Footer';
function App() {
  const [developer, dispatch] = useReducer(Developer, []);
  console.log(developer);

  return (
    <div className="App">
      <NavbarDev/>
      <DeveloperForm dispatch={dispatch} />
      <DeveloperInfo developer={developer} dispatch={dispatch}/>
      <Footer/>
    </div>
  );
}

export default App;
