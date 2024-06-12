import logo from "./logo.svg";
import "./App.css";
import  Lab, { NavBar }  from "./components/NavBar.mjs";
import  FormBox  from './components/TextForm.mjs';
import  About  from './components/About.mjs';


function App() {
  return (
    <>
    <NavBar TitleName="Words" HomeAtt="Home" />
    <FormBox Names="Enter your words" />
    {/* <About/> */}
    </>
  );
}

export default App;
