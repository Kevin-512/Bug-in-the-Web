import React from "react";
import Endpage from "./pages/Endpage";
import TestPageOne from "./pages/TestPageOne";
import TestPageTwo from "./pages/TestPageTwo";
import TestPageThree from "./pages/TestPageThree";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Endpage />} />
          <Route path="/testpageone" element={<TestPageOne />} />
          <Route path="/testpagetwo" element={<TestPageTwo />} />
          <Route path="/testpagethree" element={<TestPageThree />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
