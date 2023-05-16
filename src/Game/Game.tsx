import React from 'react';

interface IGameProps extends React.PropsWithChildren {
    num: number;
}

const Game: React.FC<IGameProps> = props => {
    return (
        <div className="person">
            <div>{props.num}</div>
        </div>
    );
};

export default Game;