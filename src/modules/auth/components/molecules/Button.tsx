import styled from "styled-components";

interface BtnLoginProps {
  onClick?: () => void;
  title?: string;
  bgcolor: string;
  icon?: React.ReactNode;
  url?: string;
  color: string;
  disabled?: boolean;
  width?: string;
}

export function Button({
  onClick,
  title,
  bgcolor,
  icon,
  url,
  color,
  disabled,
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
        <Icon $color={color}>{icon}</Icon>
        {title && (
          <span className="btn">
            {url ? (
              <a href={url} target="_blank">
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
  font-weight: 700;
  display: flex;
  font-size: 18px;
  padding: 10px 25px;
  border-radius: 16px;
  background-color: ${(props) => props.$bgcolor};
  border: 2px solid rgba(50, 50, 50, 0.2);
  border-bottom: 5px solid rgba(50, 50, 50, 0.2);
  transform: translate(0, -3px);
  cursor: pointer;
  transition: 0.2s;
  transition-timing-function: linear;
  color: rgb(${(props) => props.$color});
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${(props) => props.$width || "300px"};
  .content {
    display: flex;
    gap: 12px;
  }
  &:active {
    transform: translate(0, 0);
    border-bottom: 2px solid rgba(50, 50, 50, 0.5);
  }
  &[disabled] {
    background-color: #646464;
    cursor: no-drop;
    box-shadow: none;
  }
`;

interface IconProps {
  $color: string;
}

const Icon = styled.span<IconProps>`
  color: ${(props) => props.$color};
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
