import React, {useState} from 'react';
import './App.css';
import Game from "./Game/Game";

const App = () => {
    let [number, setNumber] = useState([0, 0, 0, 0, 0]);




    return (
        <div className="App">
            <button className="change-btn" >New Numbers</button>
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
