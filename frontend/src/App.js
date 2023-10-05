import "./App.css";
import Shop from "./Pages/Shop/index.js";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import AddBook from "./Pages/AddBook";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route index element={<Shop />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addbook" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
