import React, { useContext, useState } from 'react'
import { Button } from "react-bootstrap";
import BotContext from '../context/context';

export default function DecimaPergunta({ previousStep, step, steps, triggerNextStep }) {
    const { selecionaPontuacao } = useContext(BotContext)
    const [disable, setDisable] = useState(false);

    function answerQuestion(isCorrect) {
        selecionaPontuacao(isCorrect);
        setDisable(true);
        triggerNextStep();
    }

    return (
        <div>
            <h4>10. Pergunta</h4>
            <p className="pt-4">He __________ have any money.</p>

            <Button disabled={disable} onClick={() => answerQuestion(true)} className="ml-1 mt-1" variant="primary">doesn’t</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1 mt-1" variant="primary">don’t</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1 mt-1" variant="primary">no</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1 mt-1" variant="primary">not</Button>
        </div>
    )
}
