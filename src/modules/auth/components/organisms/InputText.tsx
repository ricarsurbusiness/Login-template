import styled from "styled-components";
import type { ReactNode } from "react";

interface InputTextProps {
  children: ReactNode;
  text: string;
  color2: string;
}

export function InputText({ children, text, color2 }: InputTextProps) {
  return (
    <Container $text={text} $color2={color2}>
      <div className="form__group field">{children}</div>
    </Container>
  );
}

interface ContainerProps {
  $text: string;
  $color2: string;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;

  .form__group {
    position: relative;
    width: 100%;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${(props) => props.$text};
    transition: background-color 5000s ease-in-out 0s;
  }

  .form__field {
    border: 2px solid ${(props) => props.$color2};
    border-radius: 15px;
    font-family: inherit;
    outline: 0;
    font-size: 17px;
    color: ${(props) => props.$text};
    padding: 12px;
    background: inherit;
    transition: border-color 0.2s;
    width: 94%;
    &::placeholder {
      color: #78b9b5;
      opacity: 0.8; /* asegura visibilidad */
    }
    &.disabled {
      color: 58A0C8;
      background: 78B9B5;
      border-radius: 8px;
      margin-top: 8px;
      border-bottom: 1px dashed #656565;
    }
  }

  .form__field:placeholder-shown ~ .form__label {
    font-size: 17px;
    cursor: text;
  }

  .form__field:focus {
    font-weight: 700;
    border: 2px solid #1cb0f6;
  }

  .form__field:required,
  .form__field:invalid {
    box-shadow: none;
  }
`;
