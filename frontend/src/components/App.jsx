import React, { useState, useEffect } from "react";
import axios from "axios";
import PlayerForm from "./Player/PlayerForm";
import PlayerList from "./Player/PlayerList";
import PlayerSingle from "./Player/PlayerSingle";
import "./App.css";

const App = () => {
    const [players, setPlayers] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState({});

    useEffect(() => {
        const url = 'http://localhost:4000/players';

        axios.get(url)
            .then((response) => {
                setPlayers(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const updateCurrentPlayer = (player) => {
        setCurrentPlayer(player);
    };


    return (
        <div className="container-fluid">
            <div className="row">
                <nav>
                    <div className="nav-wrapper blue darken-1">
                        <a href="/" className="brand-logo">
                            Soccer Management
                        </a>
                    </div>
                </nav>
            </div>
            <div className="row">
                <div className="col s3">
                    <PlayerList players={players} updateCurrentPlayer={updateCurrentPlayer} />
                </div>
                <div className="col s9">
                    <PlayerSingle player={currentPlayer} />
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <PlayerForm />
                </div>
            </div>
        </div>
    );
};

export default App;
