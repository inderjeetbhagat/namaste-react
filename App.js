const heading = React.createElement("h1", {id:"heading"}, "Hello world from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);//return an object


//Nested Structure
const parent = React.createElement("div",{id: "parent"},
React.createElement("div",{id: "child"},
[React.createElement("h1",{}, "Nothing" ),
React.createElement("h2",{}, "H2 Tag" )]));

const root1 = document.getElementById("root");
root1.render(parent);



const parent = React.createEle

//JSX

//If you have to give two elements as a siblings, then you have to pass them in array 

//ReactElement(Object) => HTML(Browser Understands)

// const heading = React.createElement("h1", {id:"heading"}, "Hello world from React");
// const root = document.getElementById("root");
// // root.render(heading);
// console.log(heading);//return an object

// ReactDOM.render(heading,root)