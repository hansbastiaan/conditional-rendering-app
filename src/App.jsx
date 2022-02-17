import React from "react";
import "./styles.css";
import Form from "./components/Form";

let userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
