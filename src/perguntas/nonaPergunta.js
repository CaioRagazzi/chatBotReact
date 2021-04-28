import React from 'react'
import { Button } from "react-bootstrap";

export default function NonaPergunta({previousStep, step, steps, triggerNextStep}) {
    
    function answerQuestion(isCorrect) {
        triggerNextStep();
    }

    return (
        <div>
            <h4>9. Pergunta</h4>
            <p className="pt-4">Her house is __________ than my house.</p>

            <Button onClick={() => answerQuestion(true)} className="ml-1" variant="primary">bigger</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">more big</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">biggest</Button>
            <Button onClick={() => answerQuestion(false)} className="ml-1" variant="primary">big</Button>
        </div>
    )
}
