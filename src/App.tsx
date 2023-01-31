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
import { formatTimeElapsed } from './helpers/formatTimeElapsed';

function App() {
  const [number, setNumber] = useState(1);
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => {
    resetAndCreateGrid();
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (playing) {
        setTimeElapsed(timeElapsed + 1);
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [timeElapsed, playing]);

  // verify if opened are equal
  useEffect(() => {
    if (shownCount === 2) {
      const opened = gridItems.filter((item) => item.shown === true);
      if (opened.length === 2) {
        // if both are equal, make every "shown" permanent
        if (opened[0].itemPosition === opened[1].itemPosition) {
          const temporaryGrid = [...gridItems];
          for (let i in temporaryGrid) {
            if (temporaryGrid[i].shown) {
              temporaryGrid[i].permanentShown = true;
              temporaryGrid[i].shown = false;
            }
          }
          setGridItems(temporaryGrid);
          setShownCount(0);
        } else {
          // if they are NOT equal, close all "shown"
          setTimeout(() => {
            const temporaryGrid = [...gridItems];
            for (let i in temporaryGrid) {
              temporaryGrid[i].shown = false;
            }
            setGridItems(temporaryGrid);
            setShownCount(0);
          }, 1000);
        }
        setMoveCount(moveCount + 1);
      }
    }
  }, [shownCount, gridItems]);

  // verify if game is over
  useEffect(() => {
    if (
      moveCount > 0 &&
      gridItems.every((item) => item.permanentShown === true)
    ) {
      setPlaying(false);
    }
  }, [moveCount, gridItems]);

  function resetAndCreateGrid() {
    // reset
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    // Create the empty grid
    let temporaryGrid: GridItemType[] = [];
    for (let i = 0; i < items.length * 2; i++) {
      temporaryGrid.push({
        itemPosition: null,
        shown: false,
        permanentShown: false,
      });
    }

    // Fills the grid
    for (let j = 0; j < 2; j++) {
      for (let i = 0; i < items.length; i++) {
        let position = -1;
        while (position < 0 || temporaryGrid[position].itemPosition !== null) {
          position = Math.floor(Math.random() * (items.length * 2));
        }
        temporaryGrid[position].itemPosition = i;
      }
    }

    // Put in the state
    setGridItems(temporaryGrid);

    // Start the game
    setPlaying(true);
  }

  function handleItemClick(index: number) {
    if (playing && index !== null && shownCount < 2) {
      let temporaryGrid = [...gridItems];

      if (
        temporaryGrid[index].permanentShown === false &&
        temporaryGrid[index].shown === false
      ) {
        temporaryGrid[index].shown = true;
        setShownCount(shownCount + 1);
      }

      setGridItems(temporaryGrid);
    }
  }

  return (
    <Container>
      <Info>
        <LogoLink>
          <img src={logoImage} alt="Logo do devMemory" />
        </LogoLink>
        <InfoArea>
          <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
          <InfoItem label="Movimentos" value={String(moveCount)} />
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
