const heading = React.createElement("h1", {id: "heading", className: "heading"}, "Hello from React code!");
console.log("Heading => ",heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "children"}, 
       [
        React.createElement("h1", {}, "I am H1 Tag"),
        React.createElement("h2", {}, "I am H2 Tag")
        ] 
    )
);
console.log("Parent Div => ",parent);
root.render(parent);
// root.render(heading);
