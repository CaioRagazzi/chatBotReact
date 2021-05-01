import React, { useContext, useState } from 'react'
import { Button } from "react-bootstrap";
import BotContext from '../context/context';

export default function QuartaPergunta({previousStep, step, steps, triggerNextStep}) {
    const { selecionaPontuacao } = useContext(BotContext)
    const [disable, setDisable] = useState(false);
    
    function answerQuestion(isCorrect) {
        selecionaPontuacao(isCorrect);
        setDisable(true);
        triggerNextStep();
    }

    return (
        <div>
            <h4>4. Pergunta</h4>
            <p className="pt-4">He lives __________ England.</p>

            <Button disabled={disable} onClick={() => answerQuestion(true)} className="ml-1 mt-1" variant="primary">in</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1 mt-1" variant="primary">at</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1 mt-1" variant="primary">to</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1 mt-1" variant="primary">from</Button>
        </div>
    )
}
