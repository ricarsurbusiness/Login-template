import React from "react";
import styled from "styled-components";
import { darken } from "polished";

interface BtnLoginProps {
  onClick?: () => void;
  title?: string;
  bgcolor?: string;
  icon?: React.ReactNode;
  url?: string;
  color?: string;
  disabled?: boolean;
  width?: string;
}

export function BtnLogin({
  onClick,
  title,
  bgcolor = "#007bff",
  icon,
  url,
  color = "#fff",
  disabled = false,
  width = "auto",
}: BtnLoginProps) {
  return (
    <Container
      $width={width}
      disabled={disabled}
      $color={color}
      type="submit"
      $bgcolor={bgcolor}
      onClick={onClick}
    >
      <section className="content">
        {icon && <Icon $color={color}>{icon}</Icon>}
        {title && (
          <span className="btn">
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            ) : (
              title
            )}
          </span>
        )}
      </section>
    </Container>
  );
}

interface ContainerProps {
  $width: string;
  $bgcolor: string;
  $color: string;
}

const Container = styled.button<ContainerProps>`
  width: ${({ $width }) => $width};
  background-color: ${({ $bgcolor }) => $bgcolor};
  color: ${({ $color }) => $color};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .btn a {
    color: inherit;
    text-decoration: none;
  }

  &:hover:not(:disabled) {
    background-color: ${({ $bgcolor }) => darken(0.1, $bgcolor)};
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`;

const Icon = styled.span<{ $color: string }>`
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
`;
