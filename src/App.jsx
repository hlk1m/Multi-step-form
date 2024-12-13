import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";
import Four from "./pages/Four";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        card
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<One />} />
            <Route path="/step2" element={<Two />} />
            <Route path="/step3" element={<Three />} />
            <Route path="/step4" element={<Four />} />
          </Routes>
          <div>
            <button>이전</button>
            <button>다음</button>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
