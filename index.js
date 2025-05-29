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

// React.createElement => Object => render  => HTML
 const heading = React.createElement("h1", {id: "heading"}, "Hello Anup!");
 
 //JSX is not html in JS, JSX is html like syntax
 //JSX (transiled before it reaches the JS)- PARCEL - Babel
 // JSX => Babbel transpiles it to React.createElement => ReactElement-JS  =>HTMLElement(render)

// React Element  
 const jsxHeading = <h1 id="heading" className="Head">Namaste React using JSX </h1>

    console.log(jsxHeading);
    // React Component: Two types of component:
    // Class based component: OLD
    // Functional Component: NEW
    const Title = () => (
        <h1 >Namaste React using JSX</h1>
    )

    // Component Composion
    const Heading = () =>(
        <div id="component">
            {"Anup Kumar"}
            {Title()}
            <Title></Title>
            <Title/>
        <h1 className="heading">Namaste React is going on </h1>
        </div>
    )

    // const Greet = () => (
    //     <h1 id="greet" > Good Morning!</h1>
    // )

    // const Intro = () =>(
    //     <div id="composition">
    //         <Greet/>
    //         <h1 id="intro">Hii, I am Anup Kumar</h1>
    //     </div>
    // )


 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Heading/>);
 
