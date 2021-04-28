import React from 'react'
import { Button } from "react-bootstrap";

export default function OitavaPergunta({previousStep, step, steps, triggerNextStep}) {
    
    function answerQuestion(isCorrect) {
        triggerNextStep();
    }

    return (
        <div>
            <h4>8. Pergunta</h4>
            <p className="pt-4">He has been to the United States _________ times.</p>

            <Button onClick={() => answerQuestion(true)} className="ml-1" variant="primary">many</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">much</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">a little</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">a short</Button>
        </div>
    )
}
