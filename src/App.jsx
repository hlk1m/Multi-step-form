import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";
import Four from "./pages/Four";
import Nav from "./components/Nav";
import styled from "styled-components";
import { colorTheme } from "./styles/colorTheme";

const Wrapper = styled.div`
  background-color: ${colorTheme.veryLightGray};
  width: 100vw;
  height: 100vh;
`;

const Card = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  gap: 8rem;
  width: 75vw;
  height: 80vh;
  background-color: ${colorTheme.white};
  border-radius: 1rem;
  padding: 1rem;

  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.15);
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Card>
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
        </Card>
      </Router>
    </Wrapper>
  );
}

export default App;
