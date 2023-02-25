interface GameState {
    board: String[][];
    game_status: String;
    last_move: [[number, number]];
    your_move: boolean;
    player: String;
    possible_moves: number[][][];
}

interface CheckersPageState {
    isSpectator: boolean;
    playerName: string;
    sessionId: string;
}

interface CheckersLocation {
    state: CheckersPageState;
}

interface CheckersPageProps {
    location: CheckersLocation;
}

export type { CheckersPageProps, GameState };
