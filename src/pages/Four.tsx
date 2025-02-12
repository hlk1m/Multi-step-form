import React from "react";
import Heading from "../components/Heading";
import styled from "styled-components";
import { colorTheme } from "../styles/colorTheme";

const Box = styled.ul`
  background-color: ${colorTheme.veryLightGray};
  border-radius: 8px;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const List = styled.li`
  color: ${colorTheme.gray};
  font-size: 0.85rem;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  span {
    color: ${colorTheme.navy};
    font-size: 0.75rem;
  }
`;
const MainList = styled(List)`
  align-items: center;
  color: ${colorTheme.navy};
  font-weight: 600;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid ${colorTheme.lightGray};

  button {
    font-size: 0.8rem;
    font-weight: 500;
    margin-top: 0.4rem;
    color: ${colorTheme.gray};
    text-decoration: underline;
  }
  span {
    font-size: 0.8rem;
  }
`;

const Total = styled(List)`
  padding: 1rem;
  margin-top: 0.5rem;
  span {
    color: ${colorTheme.blue};
    font-size: 0.9rem;
  }
`;

function Four() {
  return (
    <div>
      <Heading
        title="Finishing up"
        content="Double-check everything looks OK before confirming."
      />
      <Box>
        <MainList>
          <div>
            <h6>Aracde (Monthly)</h6>
            <button>Change</button>
          </div>
          <span>$9/mo</span>
        </MainList>
        <List>
          <p>Online service</p>
          <span>+$1/mo</span>
        </List>
        <List>
          <p>Larger storage</p>
          <span>+$2/mo</span>
        </List>
      </Box>
      <Total>
        <p>Total (per month)</p>
        <span>+$12/mo</span>
      </Total>
    </div>
  );
}

export default Four;
