import React from 'react'
import { Button } from "react-bootstrap";

export default function SegundaPergunta({previousStep, step, steps, triggerNextStep}) {
    
    function answerQuestion(isCorrect) {
        triggerNextStep();
    }

    return (
        <div>
            <h4>2. Pergunta</h4>
            <p className="pt-4">Anna: What’s your job?</p>
            <p>Christina: I’m __________ secretary.</p>

            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">an</Button>
            <Button onClick={() => answerQuestion(true)} className="ml-1" variant="primary">a</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">one</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">___</Button>
        </div>
    )
}
