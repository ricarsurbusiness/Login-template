import { Title } from "../index";
import styled from "styled-components";
export function LoginTemplate() {
  return (
    <Container>
      <div className="flex flex-col justify-center w-full h-full m-[15px] md:w-[400px]">
        <Title $padding="50px">LoginTemplate</Title>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 20px;
`;
