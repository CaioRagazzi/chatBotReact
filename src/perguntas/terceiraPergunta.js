import React, { useContext, useState } from 'react'
import { Button } from "react-bootstrap";
import BotContext from '../context/context';

export default function TerceiraPergunta({previousStep, step, steps, triggerNextStep}) {
    const { selecionaPontuacao } = useContext(BotContext)
    const [disable, setDisable] = useState(false);
    
    function answerQuestion(isCorrect) {
        selecionaPontuacao(isCorrect);
        setDisable(true);
        triggerNextStep();
    }

    return (
        <div>
            <h4>3. Pergunta</h4>
            <p>I have a brother. __________ name is John.</p>

            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1" variant="primary">Her</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1" variant="primary">Hers</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1" variant="primary">Him</Button>
            <Button disabled={disable} onClick={() => answerQuestion(true)} className="ml-1" variant="primary">His</Button>
        </div>
    )
}
