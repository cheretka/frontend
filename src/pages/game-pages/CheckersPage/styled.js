import styled from 'styled-components';

import { GAME_STATUS } from './constants';

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
    border: 2px solid #548a1b;
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
    background-color: ${({ isRed, isLastPosition, isSelected }) => {
        if (isLastPosition && !isSelected) return 'none';
        return isRed ? '#c60001' : '#fef9f3';
    }};
    width: 70%;
    height: 70%;
    border-radius: 50%;
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${({ isSelected, isLastPosition, isPossibleToMove }) => {
        if (isLastPosition) return '4px dotted #AEAEAE';
        if (isSelected) return '4px solid black';
        if (isPossibleToMove) return '2px solid blue';
        return 'none';
    }};
`;

const getStatusColor = (status, yourMove) => {
    switch (status) {
        case GAME_STATUS.lost:
            return 'red';
        case GAME_STATUS.draw:
            return 'yellow';
        case GAME_STATUS.won:
            return 'green';
        case yourMove:
            return 'green';
        default:
            return 'black';
    }
};

const GameStatus = styled.h2`
    margin-top: 20px;
    color: ${({ status, yourMove }) => getStatusColor(status, yourMove)};
`;

const IconWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
`;

export { Container, Board, Field, Piece, GameStatus, IconWrapper };
