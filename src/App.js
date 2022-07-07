import logo from "./logo.svg";
import styled from "styled-components";
import React from "react";
import { Route } from "react-router-dom";

import Detail from "./detail";
import Week from "./Week";

function App() {
  const [date, setDate] = React.useState(["일", "월", "화", "수", "목", "금", "토"]);
  

  return (
    <div className="App">
      <Container>

        <Route path="/" exact>
          <Title>내 일주일은?</Title>
          <Week date={date}></Week>
          
          
        </Route>

        <Route path="/detail/:date">
          <Detail></Detail>
        </Route>

      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 350px;
  min-height: 85vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  text-align: center;
`;

const Title = styled.h3`
  padding-top: 40px;
`;

export default App;
