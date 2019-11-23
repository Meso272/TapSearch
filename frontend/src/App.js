import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { Route, BrowserRouter } from "react-router-dom";
import Search from "./Components/Search";
import Index from "./Components/Index";
import AllDocuments from "./Components/AllDocuments";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/search" component={Search} />
        <Route exact path="/index" component={Index} />
        <Route exact path="/" component={AllDocuments} />
        <Route exact path="/document/:id" component={Document} />
      </BrowserRouter>
    </div>
  );
}

export default App;
