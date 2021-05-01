import React, { useContext } from 'react'
import './resultado.css'
import { useHistory } from "react-router-dom";
import BotContext from '../context/context'
import { Card, Button } from "react-bootstrap";

export default function Resultado() {
    const { name, objetivo, zerar, pontuacao } = useContext(BotContext)
    const history = useHistory();

    function refazerTeste() {
        zerar();
        history.push('/');
    }

    function pacoteBasico() {
        return (
            <div>
                <Card.Text>
                    Pacote Basico.
                    </Card.Text>
                <p>- Pacote de 8 aulas X</p>
                <p>- Pacote de 10 aulas Y</p>
                <p>- Pacote de 5 aulas Z</p>
            </div>
        )
    }

    function pacoteIntermediario() {
        return (
            <div>
                <Card.Text>
                    Pacote Intermediario.
                    </Card.Text>
                <p>- Pacote de 8 aulas X</p>
                <p>- Pacote de 10 aulas Y</p>
                <p>- Pacote de 5 aulas Z</p>
            </div>
        )
    }

    function pacoteAvancao() {
        return (
            <div>
                <Card.Text>
                    Pacote Avançado.
                    </Card.Text>
                <p>- Pacote de 8 aulas X</p>
                <p>- Pacote de 10 aulas Y</p>
                <p>- Pacote de 5 aulas Z</p>
            </div>
        )
    }

    function getPacote() {
        if (pontuacao >= 0 && pontuacao < 5) {
            return pacoteBasico();
        }
        if (pontuacao >= 5 && pontuacao < 8) {
            return pacoteIntermediario();
        }
        if (pontuacao >= 8 && pontuacao <= 10) {
            return pacoteAvancao();
        }
    }

    return (
        <div className="container">
            <Card>
                <Card.Header as="h5">Resultado</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {name}, sua pontuação foi {pontuacao} de 10.
                    </Card.Text>
                    <Card.Text>
                        Objetivo - {objetivo}.
                    </Card.Text>
                    {getPacote()}
                    <Button onClick={() => refazerTeste()} variant="primary">Refazer Teste</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
