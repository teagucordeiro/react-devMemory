import { Container, Info, LogoLink, InfoArea, Grid } from './styles';
import { InfoItem } from './components/InfoItem';

import logoImage from './assets/devmemory_logo.png';

function App() {
  return (
    <Container>
      <Info>
        <LogoLink>
          <img src={logoImage} alt="Logo do devMemory" />
        </LogoLink>
        <InfoArea>
          <InfoItem label="Tempo" value="00:00" />
          <InfoItem label="Movimentos" value="0" />
        </InfoArea>
        <button>Reiniciar</button>
      </Info>
      <Grid>Grid Container</Grid>
    </Container>
  );
}

export default App;
