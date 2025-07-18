import styled from "styled-components";
import type { ReactNode } from "react";

interface InputTextProps {
  children: ReactNode;
  text: string;
  color2: string;
  label: string; // Nueva prop para el label
}

export function InputText({ children, text, color2, label }: InputTextProps) {
  return (
    <Container $text={text} $color2={color2}>
      <div className="form__group field">
        {children}
        <label htmlFor="" className="form__label">
          {label}
        </label>
      </div>
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

    &.disabled {
      color: 58A0C8;
      background: 78B9B5;
      border-radius: 8px;
      margin-top: 8px;
      border-bottom: 1px dashed #656565;
    }
  }

  .form__label {
    position: absolute;
    top: 12px;
    left: 12px;
    font-size: 17px;
    color: #78b9b5;
    font-weight: normal;
    pointer-events: none;
    transition: all 0.3s ease;
    background: transparent;
    padding: 0 4px;
  }

  /* Cuando el input tiene foco */
  .form__field:focus {
    font-weight: 700;
    border: 2px solid #1cb0f6;
  }

  /* Cuando el input tiene foco o contenido, el label se mueve arriba */
  .form__field:focus ~ .form__label,
  .form__field:not(:placeholder-shown) ~ .form__label {
    top: -10px;
    left: 8px;
    font-size: 14px;
    color: #1cb0f6;
    font-weight: 600;
    background: #205781;
    padding: 0 6px;
    border-radius: 4px;
  }

  /* Cuando el input está en placeholder-shown (vacío) */
  .form__field:placeholder-shown ~ .form__label {
    top: 12px;
    left: 12px;
    font-size: 17px;
    color: #78b9b5;
    font-weight: normal;
    background: transparent;
  }

  .form__field:required,
  .form__field:invalid {
    box-shadow: none;
  }
`;
