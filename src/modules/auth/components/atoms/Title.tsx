import styled from "styled-components";

interface TitleProps {
  $padding?: string;
  $marginTop?: string;
}

export const Title = styled.span<TitleProps>`
  font-size: 30px;
  font-weight: 700;
  padding: ${(props) => props.$padding};
  margin-top: ${(props) => props.$marginTop || "0"};
`;
