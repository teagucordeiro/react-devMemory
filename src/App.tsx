import { Container, Info, LogoLink, InfoArea, Grid } from './styles';
import logoImage from './assets/devmemory_logo.png';

function App() {
  return (
    <Container>
      <Info>
        <LogoLink>
          <img src={logoImage} alt="Logo do devMemory" />
        </LogoLink>
        <InfoArea>...</InfoArea>
        <button>Reiniciar</button>
      </Info>
      <Grid>...</Grid>
    </Container>
  );
}

export default App;
