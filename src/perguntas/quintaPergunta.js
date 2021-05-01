import React, { useContext, useState } from 'react'
import { Button } from "react-bootstrap";
import BotContext from '../context/context';

export default function QuintaPergunta({previousStep, step, steps, triggerNextStep}) {
    const { selecionaPontuacao } = useContext(BotContext)
    const [disable, setDisable] = useState(false);
    
    function answerQuestion(isCorrect) {
        selecionaPontuacao(isCorrect);
        setDisable(true);
        triggerNextStep();
    }

    return (
        <div>
            <h4>5. Pergunta</h4>
            <p className="pt-4">__________ you like football?</p>

            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1 mt-1" variant="primary">Does</Button>
            <Button disabled={disable} onClick={() => answerQuestion(true)} className="ml-1 mt-1" variant="primary">Do</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1 mt-1" variant="primary">Are</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1 mt-1" variant="primary">___</Button>
        </div>
    )
}
