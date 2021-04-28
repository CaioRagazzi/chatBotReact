import React from 'react'
import { Button } from "react-bootstrap";

export default function QuartaPergunta({previousStep, step, steps, triggerNextStep}) {
    
    function answerQuestion(isCorrect) {
        triggerNextStep();
    }

    return (
        <div>
            <h4>4. Pergunta</h4>
            <p className="pt-4">He lives __________ England.</p>

            <Button onClick={() => answerQuestion(true)} className="ml-1" variant="primary">in</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">at</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">to</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">from</Button>
        </div>
    )
}
