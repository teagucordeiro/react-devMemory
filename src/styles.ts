import styled from 'styled-components';
const BREAKPOINT = '750px';

export const Container = styled.div`
  width: 100%;
  max-width: ${BREAKPOINT};
  margin: auto;
  display: flex;
  padding: 50px 0;

  @media (max-width: ${BREAKPOINT}) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  @media (max-width: ${BREAKPOINT}) {
    margin-bottom: 50px;
    align-items: center;
  }
`;

export const LogoLink = styled.a`
  img {
    width: 200px;
  }
`;

export const InfoArea = styled.div`
  width: 100%;
  margin: 10px 0;

  @media (max-width: ${BREAKPOINT}) {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;

export const GridContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${BREAKPOINT}) {
    justify-content: center;
    margin: 0 20px;
  } ;
`;

export const Grid = styled.div`
  width: 430px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
