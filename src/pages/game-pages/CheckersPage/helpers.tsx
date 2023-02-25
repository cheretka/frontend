import { GameState } from './types';

const INITIAL_STATE: GameState = {
    board: [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ],
    game_status: 'wait',
    last_move: [[-1, -1]],
    your_move: false,
    player: 'a',
    possible_moves: [
        [
            [0, 0],
            [0, 0],
        ],
    ],
};

export { INITIAL_STATE };
