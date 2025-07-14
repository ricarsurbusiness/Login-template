import styled from "styled-components";

interface TitleProps {
  $padding?: string; // Define que $padding es opcional y de tipo string
}

export const Title = styled.span<TitleProps>`
  font-size: 30px;
  font-weight: 700;
  padding: ${(props) => props.$padding};
`;
