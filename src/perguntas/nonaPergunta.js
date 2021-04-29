import React, { useContext, useState } from 'react'
import { Button } from "react-bootstrap";
import BotContext from '../context/context';

export default function NonaPergunta({previousStep, step, steps, triggerNextStep}) {
    const { selecionaPontuacao } = useContext(BotContext)
    const [disable, setDisable] = useState(false);
    
    function answerQuestion(isCorrect) {
        selecionaPontuacao(isCorrect);
        setDisable(true);
        triggerNextStep();
    }

    return (
        <div>
            <h4>9. Pergunta</h4>
            <p className="pt-4">Her house is __________ than my house.</p>

            <Button disabled={disable} onClick={() => answerQuestion(true)} className="ml-1" variant="primary">bigger</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1" variant="primary">more big</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1" variant="primary">biggest</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1" variant="primary">big</Button>
        </div>
    )
}
