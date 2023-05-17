import React, {useState} from 'react';
import './App.css';
import Game from "./Game/Game";

const App = () => {
    let [number, setNumber] = useState([0, 0, 0, 0, 0]);


    const getRandomBall = () => {
        let randomBall: number[] = [];

        let i = 0;

        do {
            let count = Math.floor(Math.random() * (36 - 5 + 1)) + 5;

            if (!randomBall.includes(count)) {
                randomBall.push(count);
                i = i + 1;
            }
        } while (i < 5);
        randomBall.sort((a, b) => a - b);
        return randomBall
    };
    const changeNumbers = () => {
        getRandomBall();
        setNumber(getRandomBall);
    };



    return (
        <div className="App">
            <button className="change-btn" onClick={changeNumbers}>New Numbers</button>
            <div>
                <Game num={number[0]}/>
                <Game num={number[1]}/>
                <Game num={number[2]}/>
                <Game num={number[3]}/>
                <Game num={number[4]}/>
            </div>
        </div>
    );
};

export default App;
