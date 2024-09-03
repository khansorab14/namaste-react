{
  /* 
<div id="parent">
    <div id="child">
        <h1> iam from h1 tag</h1>
        <h2>iam from h2 </h2>
    </div>
     <div id="child2">
        <h1> iam from h1 tag</h1>
        <h2>iam from h2 </h2>
    </div>
</div> 
*/
}
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "iam h1 tag"),
    React.createElement("h2", {}, "iam h2 tag"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "iam h1 tag"),
    React.createElement("h2", {}, "iam h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);

root.render(parent);
