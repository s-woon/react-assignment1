import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = (props) => {
  let history = useHistory();
  const date = useParams();
  const [clicked, setClicked] = useState(0);

  return (
    <>
      <Container style={{ "marginTop": "30px"}}>
        <h3>
            <span style={{"backgroundColor": "orange", "color": "white", "borderRadius": "5px", "padding": "3px"}}>
                {date.date}요일
            </span> 
            평점 남기기
        </h3>
      </Container>
      <Container style={{"marginBottom": "15px"}}>
        {[...Array(5)].map((x, i) => {
          if (i < clicked) return <Circle key={i} onClick={() => setClicked(i + 1)} rated></Circle>;
          else return <Circle key={i} onClick={() => setClicked(i + 1)}></Circle>;
        })}
      </Container>
      <ScoreBtn
        onClick={() => {
          history.push("/");
        }}
      >
        평점 남기기
      </ScoreBtn>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  width: 100%;
  justify-content: center;
`;

const ScoreBtn = styled.div`
  text-align: center;
  line-height: 50px;
  color: white;
  width: 200px;
  height: 50px;
  background-color: purple;
  border-radius: 5px;
  margin: 0px auto;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: ${(props) => (props.rated ? "yellow" : "lightgray")};
`;

export default Detail;
