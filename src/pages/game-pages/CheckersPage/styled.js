import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
`;

const Board = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    background-color: #fff;
    width: fit-content;
`;

const Field = styled.div`
    background-color: ${({ isGreen }) => (isGreen ? '#548a1b' : '#ffedbb')};
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
`;

const Piece = styled.div`
    background-color: ${({ isRed }) => (isRed ? '#c60001' : '#fef9f3')};
    width: 70%;
    height: 70%;
    border-radius: 50%;
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${({ isSelected }) => (isSelected ? '4px solid black' : 'none')};
`;

const GameStatus = styled.h2`
    margin-top: 20px;
`;

export { Container, Board, Field, Piece, GameStatus };
