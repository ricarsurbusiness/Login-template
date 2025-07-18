import { Title } from "../index";
import { Button } from "../index";
import styled from "styled-components";
import { InputText } from "../organisms/InputText";
import { Line } from "../atoms/Line";
import logoRS from "../../../../../src/assets/logoRS.png";
import googleIcon from "../../../../../src/assets/googleIcon.png";
export function LoginTemplate() {
  return (
    <Container>
      <ContentLogo>
        <img src={logoRS} />
        <span>Nombre de la empresa</span>
      </ContentLogo>
      <div
        className="flex flex-col justify-center w-full max-w-[400px] mx-auto h-[480px] p-6"
        style={{
          backgroundColor: "#205781",
          borderRadius: "10px",
          borderColor: "black",
          boxShadow: "0px 1px 50px rgba(0, 0, 0, 1)",
        }}
      >
        <Title $padding="25px" $marginTop="-30px">
          Login
        </Title>
        <form>
          <div className="w-full max-w-[350px] mx-auto ">
            <InputText text="white" color2="#1cb0f6" label="Correo">
              <input className="form__field" placeholder=" " />
            </InputText>
            <InputText text="white" color2="#1cb0f6" label="Contraseña">
              <input className="form__field" placeholder=" " />
            </InputText>

            <Button
              title="Iniciar sesión"
              bgcolor="1e81b0"
              color="0, 0, 0, 1"
            />
            <Line>
              <span>O</span>
            </Line>
            <Button
              title="Google"
              bgcolor="1e81b0"
              color="0, 0, 0, 1"
              icon={<img src={googleIcon} style={{ width: "20px" }} />}
            />
          </div>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #020024;
  background: linear-gradient(
    1deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
`;
const ContentLogo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px;

  span {
    font-weight: 700;
  }

  img {
    width: 70px;
    height: auto;
  }
`;
