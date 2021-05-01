import React, { useContext, useState } from 'react'
import { Button } from "react-bootstrap";
import BotContext from '../context/context';

export default function PrimeiraPergunta(props) {
    const { selecionaPontuacao } = useContext(BotContext)
    const [disable, setDisable] = useState(false);
    
    function answerQuestion(isCorrect) {
        selecionaPontuacao(isCorrect);
        setDisable(true);
        props.triggerNextStep();
    }

    return (
        <div>
            <h4>1. Pergunta</h4>
            <p className="pt-4">Hello. What _________ your name?</p>

            <Button disabled={disable} className="ml-1 mt-1" onClick={() => answerQuestion(false)} variant="primary">be</Button>
            <Button disabled={disable} className="ml-1 mt-1" onClick={() => answerQuestion(false)} variant="primary">are</Button>
            <Button disabled={disable} className="ml-1 mt-1" onClick={() => answerQuestion(true)} variant="primary">is</Button>
            <Button disabled={disable} className="ml-1 mt-1" onClick={() => answerQuestion(false)} variant="primary">___</Button>
        </div>
    )
}
