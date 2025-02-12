import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";
import Four from "./pages/Four";
import Nav from "./components/Nav";
import styled from "styled-components";
import { colorTheme } from "./styles/colorTheme";
import Five from "./pages/Five";

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

const BtnBox = styled.div`
  width: 100%;
  bottom: 2rem;
  display: flex;
  justify-content: space-between;
`;

const NextBtn = styled.button`
  padding: 0.6rem 0.9rem;
  background-color: ${colorTheme.navy};
  border-radius: 0.3rem;
  color: white;
  font-weight: 500;
`;

const PrevBtn = styled.button`
  color: ${colorTheme.gray};
  font-weight: 600;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Card>
          <Nav />
          <MainForm>
            <Routes>
              <Route path="/" element={<One />} />
              <Route path="/step2" element={<Two />} />
              <Route path="/step3" element={<Three />} />
              <Route path="/step4" element={<Four />} />
              <Route path="/step5" element={<Five />} />
            </Routes>
            <BtnBox>
              <PrevBtn>Go Back</PrevBtn>
              <NextBtn>Next Step</NextBtn>
            </BtnBox>
          </MainForm>
        </Card>
      </Router>
    </Wrapper>
  );
}

export default App;
