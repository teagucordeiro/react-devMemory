import { Container, Icon, IconContainer, Label } from "./styles";

type ButtonProps = {
  label: string;
  icon: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

export function Button({ label, icon, onClick }: ButtonProps) {
  return (
    <Container onClick={onClick}>
      {icon && (
        <IconContainer>
          <Icon src={icon}></Icon>
        </IconContainer>
      )}
      <Label>{label}</Label>
    </Container>
  );
}
