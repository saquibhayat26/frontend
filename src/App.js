import "./App.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />

          <Route
            path="cart"
            element={
              <>
                <Navbar />
                <Cart />
              </>
            }
          />

          <Route path="not-found" element={<NotFound />} />

          <Route path="*" element={<Navigate to="/not-found" />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
