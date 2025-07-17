import { Title } from "../index";
import { Button } from "../index";
import styled from "styled-components";
import { InputText } from "../organisms/InputText";
export function LoginTemplate() {
  return (
    <Container>
      <div
        className="flex flex-col justify-center w-full max-w-[400px] mx-auto h-[480px] p-6"
        style={{
          backgroundColor: "#205781",
          borderRadius: "10px",
          borderColor: "black",
          boxShadow: "0px 1px 50px rgba(0, 0, 0, 1)",
        }}
      >
        <Title $padding="25px">LoginTemplate</Title>
        <form>
          <div className="w-full max-w-[350px] mx-auto ">
            <InputText text="white" color2="#1cb0f6">
              <input className="form__field" placeholder="Correo" />
            </InputText>
            <InputText text="white" color2="#1cb0f6">
              <input className="form__field" placeholder="Contraseña" />
            </InputText>
            <Button
              title="Iniciar sesión"
              bgcolor="1e81b0"
              color="0, 0, 0, 1"
            />
          </div>
        </form>
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
  padding: 40px;
  background: #020024;
  background: linear-gradient(
    1deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
`;
