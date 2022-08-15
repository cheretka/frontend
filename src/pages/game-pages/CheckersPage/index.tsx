import React, { useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { ungzip, gzip } from 'pako';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

import decodeUtf8 from 'global/util/decodeUtf8';

import { Container, Board, Field, Piece, GameStatus } from './styled';
import { CheckersPageProps, GameState } from './types';
import { INITIAL_STATE } from './helpers';

const HEADER = 'Checkers by CheretKa';

function CheckersPage(props: CheckersPageProps) {
    const { sessionId, playerName } = props.location.state;

    const websocketUrl = `${
        process.env.REACT_APP_API_WEBSOCKET_SERVER_URL
    }/join_to_game?session_id=${encodeURIComponent(sessionId)}&player_name=${encodeURIComponent(
        playerName
    )}`;

    const [selectedPiece, setSelectedPiece] = useState<[number, number]>();
    const [selectedField, setSelectedField] = useState<[number, number]>();
    const [game, setGame] = useState<GameState>(INITIAL_STATE);

    const isFieldPlayable = (x: number, y: number) => (x % 2 === 0 ? y % 2 !== 0 : y % 2 === 0);
    const handlePieceOnCLick = (x: number, y: number) => () => setSelectedPiece([x, y]);
    const handleFieldOnClick = (x: number, y: number) => () => setSelectedField([x, y]);
    async function handleGameMessage(event: WebSocketEventMap['message']) {
        if (event?.data.error) {
            console.log('server error', event.data.error);
        } else {
            const message = await event.data.arrayBuffer();
            const obj = JSON.parse(decodeUtf8(ungzip(message)));
            console.log(obj);
            setGame(obj);
        }
    }
    const getGameStatus = () => {
        if (game.game_status === 'wait') return 'Waiting for the other player...';

        return game.your_move ? 'Your turn!' : "Opponent's turn!";
    };

    const websocketOptions = {
        onMessage: handleGameMessage,
    };

    //@ts-ignore
    const { sendMessage, readyState } = useWebSocket(websocketUrl, websocketOptions);

    return (
        <Container>
            <h1>{HEADER}</h1>
            <Board>
                {game &&
                    game.board.flatMap((row, rowIndex) =>
                        row.map((item, itemIndex) => {
                            const playableField = isFieldPlayable(rowIndex, itemIndex);
                            const clickableField =
                                selectedPiece && playableField && item === ' ' && game.your_move;
                            const clickablePiece = game.your_move;
                            const isRed = item === 'r' || item === 'R';
                            const isQueen = item === 'A' || item === 'R';
                            const isPieceSelected =
                                selectedPiece &&
                                selectedPiece[0] === rowIndex &&
                                selectedPiece[1] === itemIndex;

                            return (
                                <Field
                                    key={`filed-${rowIndex}-${itemIndex}`}
                                    isGreen={playableField}
                                    onClick={
                                        clickableField
                                            ? handleFieldOnClick(rowIndex, itemIndex)
                                            : null
                                    }
                                    clickable={clickableField}
                                >
                                    {item !== ' ' && (
                                        <Piece
                                            isRed={isRed}
                                            isSelected={isPieceSelected}
                                            onClick={
                                                clickablePiece
                                                    ? handlePieceOnCLick(rowIndex, itemIndex)
                                                    : null
                                            }
                                            clickable={clickablePiece}
                                        >
                                            {isQueen && <FontAwesomeIcon icon={faCrown} />}
                                        </Piece>
                                    )}
                                </Field>
                            );
                        })
                    )}
            </Board>
            <GameStatus>{getGameStatus()}</GameStatus>
        </Container>
    );
}

export default CheckersPage;