import React from 'react'
import { Button } from "react-bootstrap";

export default function QuintaPergunta({previousStep, step, steps, triggerNextStep}) {
    
    function answerQuestion(isCorrect) {
        triggerNextStep();
    }

    return (
        <div>
            <h4>5. Pergunta</h4>
            <p className="pt-4">__________ you like football?</p>

            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">Does</Button>
            <Button onClick={() => answerQuestion(true)} className="ml-1" variant="primary">Do</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">Are</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">___</Button>
        </div>
    )
}
