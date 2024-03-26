const parent = React.createElement("div",{id:"parent"},
           [ React.createElement("div",{id:"child"},
            [React.createElement("h1",{},"Hello World!")
            ,React.createElement("h2",{},"Hello World!")]
            ), React.createElement("div",{id:"child"},
            [React.createElement("h1",{},"Hello World!")
            ,React.createElement("h2",{},"Hello World!")]
            ),])

/* Using React.CreateElement we simply create a object and pass into react-DOM
which convert into browser understandable html code .
*/
const heading = React.createElement("h1",{className:"Hello",id:'test'},"Namste Javascript using React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
// Here root do not append the child but it replace the content in it
root.render([heading,parent]);
// Note: React is the just a Library
