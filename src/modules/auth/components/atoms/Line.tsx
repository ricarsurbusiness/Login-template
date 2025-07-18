import styled from "styled-components";

export const Line = styled.div`
  height: 2px;
  background-color: #1cb0f6;
  border-radius: 15px;
  margin: 20px 0;
  position: relative;
  text-align: center;
  span {
    top: -10px;
    position: absolute;
    text-align: center;
    transform: translate(-50%, -10%);
    background-color: #205781;
    padding: 0 5px;
    color: #1cb0f6;
    font-weight: 700;
  }
`;
