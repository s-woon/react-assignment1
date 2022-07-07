import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Week = (props) => {
  let date = props.date;
  let history = useHistory();
  let now = new Date().getDay();
  
  const [rate, setRate] = React.useState([Math.floor(Math.random()*5+1),
                                          Math.floor(Math.random()*5+1),
                                           Math.floor(Math.random()*5+1),
                                            Math.floor(Math.random()*5+1),
                                             Math.floor(Math.random()*5+1),
                                             Math.floor(Math.random()*5+1),
                                             Math.floor(Math.random()*5+1),]);

  const [avr, setAvr] = React.useState(((rate.reduce((sum, currValue) => {return sum + currValue;}, 0)) / 7).toFixed(1));

  // console.log(avr)
  // console.log(rate)
  
  return (
    <>
      {date.map((item, index) => {
        return (
          <>
            <Container>
              <p style={{ fontWeight: "bold", marginRight: "10px" }}>{date[(now + index + 7) % 7]}</p>
              {[...Array(5)].map((x, i) => {
                if (i < rate[index]) return <Circle key={i} rated></Circle>;
                else return <Circle key={i}></Circle>;
              })}
              <Triangle onClick={() => { history.push(`/detail/${date[(now + index + 7) % 7]}`); }}></Triangle>
            </Container>
          </>
        );
      })}

      <div style={{ color: "blue" }}>
        <h2>평균 평점</h2>
        <h2>{avr}</h2>
      </div>
      <ResetBtn>
            <h3 onClick={() => {setAvr("0.0")}}>Reset</h3>
      </ResetBtn>
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

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: ${(props) => (props.rated ? "yellow" : "lightgray")};
`;

const Triangle = styled.div`
  appearance: none;
  background-color: transparent;
  border-color: transparent purple;
  width: 0px;
  height: 0px;
  border-top-width: 1rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

const ResetBtn = styled.div`
  text-align: center;
  line-height: 60px;
  color: white;
  width: 130px;
  height: 60px;
  background-color: dodgerblue;
  border-radius: 5px;
  margin: 0px auto;
`;

export default Week;
