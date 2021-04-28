import React from 'react'
import { Button } from "react-bootstrap";

export default function SextaPergunta({previousStep, step, steps, triggerNextStep}) {
    
    function answerQuestion(isCorrect) {
        triggerNextStep();
    }

    return (
        <div>
            <h4>6. Pergunta</h4>
            <p className="pt-4">I am __________ my lunch now.</p>

            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">eat</Button>
            <Button onClick={() => answerQuestion(true)} className="ml-1" variant="primary">eating</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">ate</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">eaten</Button>
        </div>
    )
}
