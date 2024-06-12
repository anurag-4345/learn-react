import { useState } from "react";
export default FormBox;

function FormBox(props) {
  var ResetFun = (e) => {
    setText("");
    setTimeout(() => {
      setPlace("please enter your detail here");
    }, 100);
    setWord("No Words");
    setLetter("No Letter");

  };
  var upperCaseHandler = () => {
    var CValue = textValue.toUpperCase();
    setText(CValue);
  };
  var lowerCaseHandler = () => {
    var CValue = textValue.toLowerCase();
    setText(CValue);
  };
  var TaValue = (e) => {
    setText(e.target.value);
    setWord(textValue.split(" ").length >= 1 ? textValue.split(" ").length + " Words " : "no Words")
    setLetter(textValue.length <= 0 ? "No Letter" : textValue.length + " Letters")
  };
  const [textValue, setText] = useState();
  const [placeValue, setPlace] = useState();
  const [word,setWord] = useState();
  const [letter,setLetter] = useState();
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="FormControlId" className="form-label"> {props.Names} </label>
          <textarea className="form-control" id="FormControlId" rows="3" value={textValue} placeholder={placeValue} onChange={TaValue} ></textarea>
          <button className="btn btn-primary mx-2 my-4" onClick={upperCaseHandler} >Upper case </button>
          <button className="btn btn-primary mx-2 my-4" onClick={lowerCaseHandler}> lower case </button>
          <button className="btn btn-danger mx-2 my-4" onClick={ResetFun}> Reset </button>
        </div>
      </div>
      <div className="container">
         <h3> { letter}, { word } </h3>
      </div>
    </>
  );
}

FormBox.defaultProps = {
  value: "Upper",
  name: "Enter words",
  placehoder: "Type here..",
};
