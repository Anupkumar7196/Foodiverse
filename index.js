{/* <div id="parent">
    <div id="child">
        <h1></h1>
        <h2></h2>
    </div>
    <div id="child2">
        <h1></h1>
        <h2></h2>
    </div>
</div> 

ReactElement(Object)=>  Html(Browser Understands)

*/}

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div", 
    {id:"parent"},
    [
        React.createElement("div", {id: "child"}, [
            React.createElement("h1",  {}, "I am a React js developer"),
            React.createElement("h2", {}, "By Anup Kumar "), 
            ])
    ],
    [
        React.createElement("div", {id: "child"}, [
            React.createElement("h1",  {}, "I'm an H1 Tag"),
            React.createElement("h2", {}, "I am an H2 Tags"), 
            ])
    ],
);
console.log(parent);//Object


const heading = React.createElement("h1", {id:"heading"}, "Hello Namaste React With Anup!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);  