import { Container, Info, LogoLink, InfoArea, Grid } from './styles';
import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';

import logoImage from './assets/devmemory_logo.png';
import RestartIcon from './svgs/restart.svg';


function App() {
  function resetAndCreateGrid() {}

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
        <Button label="Reiniciar" icon={RestartIcon} onClick={resetAndCreateGrid}/>
      </Info>
      <Grid>Grid Container</Grid>
    </Container>
  );
}

export default App;
