import React, { useState } from "react";

export default function About() {
 const mystyle ={
    border:"1px solid black",
    height:"500px",
  }
  var changeMode = ()=> {
    btnName.value=="Dark" ? btnNameSet("White") : btnNameSet("Dark")
    setStyle({ 
        border:"20px black red",
        backgroundColor:"blue"
     } )
  }
  const [toggleStyle, setStyle] = useState();
  const [btnName, btnNameSet] = useState();
    return (
    <>
    <div className="container">
      <div className="row">
        <button className="btn btn-info my-3" onClick={changeMode}>{btnName}</button>
        <div className="col-4">
          <div id="list-example" className="list-group sticky">
            <a style={toggleStyle} className="list-group-item list-group-item-action" href="#list-item-1">Item 1 </a>
            <a style={toggleStyle} className="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
            <a style={toggleStyle} className="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
            <a style={toggleStyle} className="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
          </div>
        </div>
        <div className="col-8" style={mystyle}>
          <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
            <h4 id="list-item-1">Item 1</h4>
            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlightingThis is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlightingThis is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting
            </p>
            <h4 id="list-item-2">Item 2</h4>
            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlightingThis is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlightingThis is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting</p>
            <h4 id="list-item-3">Item 3</h4>
            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlightingThis is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlightingThis is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting</p>
            <h4 id="list-item-4">Item 4</h4>
            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlightingThis is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlightingThis is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
