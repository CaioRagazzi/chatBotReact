import React, { useContext, useState } from 'react'
import { Button } from "react-bootstrap";
import BotContext from '../context/context';

export default function SegundaPergunta({previousStep, step, steps, triggerNextStep}) {
    const { selecionaPontuacao } = useContext(BotContext)
    const [disable, setDisable] = useState(false);
    
    function answerQuestion(isCorrect) {
        selecionaPontuacao(isCorrect);
        setDisable(true);
        triggerNextStep();
    }

    return (
        <div>
            <h4>2. Pergunta</h4>
            <p>Anna: What’s your job?</p>
            <p>Christina: I’m __________ secretary.</p>

            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1 mt-1" variant="primary">an</Button>
            <Button disabled={disable} onClick={() => answerQuestion(true)} className="ml-1 mt-1" variant="primary">a</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1 mt-1" variant="primary">one</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1 mt-1" variant="primary">___</Button>
        </div>
    )
}
