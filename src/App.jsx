import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";
import Four from "./pages/Four";
import Nav from "./components/Nav";
import Five from "./pages/Five";
import Buttons from "./components/Buttons";

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
  width: 65vw;
  height: 75vh;
  background-color: ${colorTheme.white};
  border-radius: 1rem;
  padding: 1rem;

  gap: 5rem;

  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.15);
`;

const MainForm = styled.main`
  position: relative;
  padding: 2.5rem;
  padding-bottom: 1rem;
  width: 100%;
  padding-right: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Card>
          <Nav />
          <MainForm>
            <Routes>
              <Route path="/step1" element={<One />} />
              <Route path="/step2" element={<Two />} />
              <Route path="/step3" element={<Three />} />
              <Route path="/step4" element={<Four />} />
              <Route path="/step5" element={<Five />} />
            </Routes>
            <Buttons />
          </MainForm>
        </Card>
      </Wrapper>
    </Router>
  );
}

export default App;
