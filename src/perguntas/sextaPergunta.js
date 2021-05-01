import React, { useContext, useState } from 'react'
import { Button } from "react-bootstrap";
import BotContext from '../context/context';

export default function SextaPergunta({previousStep, step, steps, triggerNextStep}) {
    const { selecionaPontuacao } = useContext(BotContext)
    const [disable, setDisable] = useState(false);
    
    function answerQuestion(isCorrect) {
        selecionaPontuacao(isCorrect);
        setDisable(true);
        triggerNextStep();
    }

    return (
        <div>
            <h4>6. Pergunta</h4>
            <p className="pt-4">I am __________ my lunch now.</p>

            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1 mt-1" variant="primary">eat</Button>
            <Button disabled={disable} onClick={() => answerQuestion(true)} className="ml-1 mt-1" variant="primary">eating</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1 mt-1" variant="primary">ate</Button>
            <Button disabled={disable} onClick={() => answerQuestion(false)} className="ml-1 mt-1" variant="primary">eaten</Button>
        </div>
    )
}
