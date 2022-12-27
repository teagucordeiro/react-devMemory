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
import { GridItem } from './components/GridItem';

import { GridItemType } from './types/GridItemType';
import { items } from './data/items';

import logoImage from './assets/devmemory_logo.png';
import RestartIcon from './svgs/restart.svg';

function App() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => {
    resetAndCreateGrid();
  }, []);

  function resetAndCreateGrid() {
    // reset
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    // Create the empty grid
    let temporaryGrid: GridItemType[] = [];
    for (let i = 0; i < items.length * 2; i++) {
      temporaryGrid.push({
        item: null,
        shown: false,
        permanentShown: false,
      });
    }

    // Fills the grid
    for (let j = 0; j < 2; j++) {
      for (let i = 0; i < items.length; i++) {
        let position = -1;
        while (position < 0 || temporaryGrid[position].item !== null) {
          position = Math.floor(Math.random() * (items.length * 2));
        }
        temporaryGrid[position].item = i;
      }
    }

    // Put in the state
    setGridItems(temporaryGrid);

    // Start the game
    setPlaying(true);
  }

  function handleItemClick(index: number) {}

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
        <Grid>
          {gridItems.map((item, index) => (
            <GridItem
              key={index}
              item={item}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </Grid>
      </GridContainer>
    </Container>
  );
}

export default App;
