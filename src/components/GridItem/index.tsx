import { Container, Icon } from './styles';

import { GridItemType } from '../../types/GridItemType';
import { items } from '../../data/items';

import b7svg from '../../svgs/b7.svg';

type GridItemProps = {
  item: GridItemType;
  onClick: () => void;
};

export function GridItem({ item, onClick }: GridItemProps) {
  return (
    <Container
      showBackground={item.permanentShown || item.shown}
      onClick={onClick}
    >
      {!item.permanentShown && !item.shown && (
        <Icon src={b7svg} alt="" opacity={0.1} />
      )}
      {(item.permanentShown || item.shown) && item.itemPosition !== null && (
        <Icon src={items[item.itemPosition].icon} alt="" />
      )}
    </Container>
  );
}
