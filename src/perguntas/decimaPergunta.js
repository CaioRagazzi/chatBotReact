import React from 'react'
import { Button } from "react-bootstrap";

export default function DecimaPergunta({previousStep, step, steps, triggerNextStep}) {
    
    function answerQuestion(isCorrect) {
        triggerNextStep();
    }

    return (
        <div>
            <h4>10. Pergunta</h4>
            <p className="pt-4">He __________ have any money.</p>

            <Button onClick={() => answerQuestion(true)} className="ml-1" variant="primary">doesn’t</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">don’t</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">no</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">not</Button>
        </div>
    )
}
