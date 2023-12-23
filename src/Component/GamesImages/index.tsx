import Quiz from "../GamesImages/Quiz";
import Draw from "../GamesImages/Draw";
import BlindTest from "../GamesImages/BlindTest";
import React from 'react';


export enum Games {
    Quiz=1,
    Draw=2,
    BlindTest=3
}

type props = {
    game_type_id: number
}

export default function GamesImages(props: props) {
    return <>
        {props.game_type_id == Games.Quiz &&
            <Quiz/>
        }
        {props.game_type_id == Games.Draw &&
            <Draw/>
        }
        {props.game_type_id == Games.BlindTest &&
            <BlindTest/>
        }
    </>
}