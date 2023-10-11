import React, {useState,createContext, useContext} from "react";

const UserContext=createContext();

export default function ParentComponent() {
  const [code] = useState("React");
  return (
    <UserContext.Provider value={code}>
   <div>
      <p>Parent Component</p>
      <ChildComponent1/>
    </div>
    </UserContext.Provider>
  );
}
function ChildComponent1() {
  return (
    <div>
      <p>Child Component 1</p>
      <ChildComponent2/>
    </div>
  );
}
function ChildComponent2() {
  return (
  <div>
    <p>Child Component 2</p>
    <ChildComponent3/>
  </div>);
}
function ChildComponent3() {
  const code=useContext(UserContext);
  return (
    <div>
        <p>Component 3</p>
        <p>This is {code}</p>
    </div>
  )
}
