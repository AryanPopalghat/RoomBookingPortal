import Header from "./Mycomponents/Header";
import NewCustomerForm from "./Mycomponents/NewCustomerForm";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roomselect from "./Mycomponents/Roomselect";
import React, { Component, Fragment } from "react";

import Home from "./Mycomponents/Home";

class App extends Component {
  render() {
    return (
      <>
      <Router>
      
        <Header />
        <Home />
      
      
        
        <Routes>
          <Route exact path="/roombook" element={<NewCustomerForm> Room</NewCustomerForm>} />
          <Route exact path="/roomselect" element={<Roomselect></Roomselect>}/>
        </Routes>
      </Router>
    </>
  );
}
}
export default App;
