import React from 'react'
import { Button } from "react-bootstrap";

export default function SetimaPergunta({previousStep, step, steps, triggerNextStep}) {
    
    function answerQuestion(isCorrect) {
        triggerNextStep();
    }

    return (
        <div>
            <h4>7. Pergunta</h4>
            <p className="pt-4">This is my__________ car</p>

            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">wife</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">wifes'</Button>
            <Button onClick={() => answerQuestion(true)} className="ml-1" variant="primary">wife's</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">wives</Button>
        </div>
    )
}
