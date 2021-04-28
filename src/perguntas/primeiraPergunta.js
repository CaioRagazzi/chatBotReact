import React from 'react'
import { Button } from "react-bootstrap";

export default function PrimeiraPergunta(props) {
    
    function answerQuestion(isCorrect) {
        props.triggerNextStep();
    }

    return (
        <div>
            <h4>1. Pergunta</h4>
            <p className="pt-4">Hello. What _________ your name?</p>

            <Button className="ml-1" onClick={() => answerQuestion(false)} variant="primary">be</Button>
            <Button className="ml-1" onClick={() => answerQuestion(false)} variant="primary">are</Button>
            <Button className="ml-1" onClick={() => answerQuestion(true)} variant="primary">is</Button>
            <Button className="ml-1" onClick={() => answerQuestion(false)} variant="primary">___</Button>
        </div>
    )
}
