import logo from "./logo.svg";
import "./App.css";
import  Lab, { NavBar }  from "./components/NavBar.mjs";
import  FormBox  from './components/TextForm.mjs'


function App() {
  return (
    <>
    <NavBar TitleName="Words" HomeAtt="Home" />
    <FormBox Names="Enter your words" />
    </>
  );
}

export default App;
