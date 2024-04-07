import React from 'react';
import ReactDOM from 'react-dom/client'

// React.createElement => Object => HTMLElement(render)

// JSX - is not HTML in js
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// This is a React Element
const element1 = <span>React Element.</span>
 
const Title =() => (<h1 id='heading' className='heading'>This is Basic JSX Syntax!</h1>);

const number = 1000;

// React Funtional Component 
const HeadingComponent = () => (
    <div id='container'>
         <Title/>
         {element1}
    <h1>Namste React's Funtional Component {number}.</h1>
        
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);