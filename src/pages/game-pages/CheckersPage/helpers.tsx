import { GameState } from './types';

const INITIAL_STATE: GameState = {
    board: [
        [' ', 'r', ' ', 'r', ' ', 'r', ' ', 'r'],
        ['r', ' ', 'r', ' ', 'r', ' ', 'r', ' '],
        [' ', 'r', ' ', 'r', ' ', 'r', ' ', 'r'],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['a', ' ', 'a', ' ', 'a', ' ', 'a', ' '],
        [' ', 'a', ' ', 'a', ' ', 'a', ' ', 'a'],
        ['a', ' ', 'a', ' ', 'a', ' ', 'a', ' '],
    ],
    game_status: 'wait',
    last_move: [0, 0],
    your_move: false,
};

export { INITIAL_STATE };
