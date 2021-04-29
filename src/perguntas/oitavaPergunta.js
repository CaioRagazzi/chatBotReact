import React, { useContext, useState } from 'react'
import { Button } from "react-bootstrap";
import BotContext from '../context/context';

export default function OitavaPergunta({previousStep, step, steps, triggerNextStep}) {
    const { selecionaPontuacao } = useContext(BotContext)
    const [disable, setDisable] = useState(false);
    
    function answerQuestion(isCorrect) {
        selecionaPontuacao(isCorrect);
        setDisable(true);
        triggerNextStep();
    }

    return (
        <div>
            <h4>8. Pergunta</h4>
            <p className="pt-4">He has been to the United States _________ times.</p>

            <Button disabled={disable} onClick={() => answerQuestion(true)} className="ml-1" variant="primary">many</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1" variant="primary">much</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1" variant="primary">a little</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1" variant="primary">a short</Button>
        </div>
    )
}
