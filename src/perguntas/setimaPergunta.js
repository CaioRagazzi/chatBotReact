import React, { useContext, useState } from 'react'
import { Button } from "react-bootstrap";
import BotContext from '../context/context';

export default function SetimaPergunta({previousStep, step, steps, triggerNextStep}) {
    const { selecionaPontuacao } = useContext(BotContext)
    const [disable, setDisable] = useState(false);
    
    function answerQuestion(isCorrect) {
        selecionaPontuacao(isCorrect);
        setDisable(true);
        triggerNextStep();
    }

    return (
        <div>
            <h4>7. Pergunta</h4>
            <p className="pt-4">This is my__________ car</p>

            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1" variant="primary">wife</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1" variant="primary">wifes'</Button>
            <Button disabled={disable} onClick={() => answerQuestion(true)} className="ml-1" variant="primary">wife's</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1" variant="primary">wives</Button>
        </div>
    )
}
