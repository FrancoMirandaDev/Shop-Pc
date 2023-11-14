import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navbar.js";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <h1 className="products">
                Those are products of software that we are selling:
              </h1>
            }
          ></Route>
          <Route
            path="/shop"
            element={<h2 className="shop">These are products in the cart:</h2>}
          ></Route>
          <Route
            path="/user"
            element={<h2 className="user">El usuario x es </h2>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
