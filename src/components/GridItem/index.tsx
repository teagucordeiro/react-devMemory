import { GridItemType } from '../../types/GridItemType';
import { Container } from './styles';

type GridItemProps = {
  item: GridItemType;
  onClick: () => void;
};

export function GridItem({ item, onClick }: GridItemProps) {
  return <Container onClick={onClick}>...</Container>;
}
