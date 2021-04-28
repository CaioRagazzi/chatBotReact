import React from 'react'
import { Button } from "react-bootstrap";

export default function TerceiraPergunta({previousStep, step, steps, triggerNextStep}) {
    
    function answerQuestion(isCorrect) {
        triggerNextStep();
    }

    return (
        <div>
            <h4>3. Pergunta</h4>
            <p>I have a brother. __________ name is John.</p>

            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">Her</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">Hers</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">Him</Button>
            <Button onClick={() => answerQuestion(true)} className="ml-1" variant="primary">His</Button>
        </div>
    )
}
