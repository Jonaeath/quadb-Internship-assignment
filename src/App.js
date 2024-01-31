import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Summary from "./Component/Summary/Summary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary/:id" element={<Summary />} />
      </Routes>
    </Router>
  );
}

export default App;
