import { useEffect, useState } from 'react';
import {
  Container,
  Info,
  LogoLink,
  InfoArea,
  GridContainer,
  Grid,
} from './styles';
import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';

import logoImage from './assets/devmemory_logo.png';
import RestartIcon from './svgs/restart.svg';
import { GridItemType } from './types/GridItemType';

function App() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  function resetAndCreateGrid() {}

  useEffect(() => {
    resetAndCreateGrid();
  }, []);

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
        <Button
          label="Reiniciar"
          icon={RestartIcon}
          onClick={resetAndCreateGrid}
        />
      </Info>
      <GridContainer>
        <Grid></Grid>
      </GridContainer>
    </Container>
  );
}

export default App;
