import React, { createContext, useState } from "react";

const BotContext = createContext();

export const AuthProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [idade, setIdade] = useState(0);
    const [objetivo, setObjetivo] = useState('');
    const [cursoIngles, setCursoIngles] = useState('');
    const [tempoCursoIngles, setTempoCursoIngles] = useState('');
    const [nivelIngles, setNivelIngles] = useState('');
    const [pontuacao, setPontuacao] = useState(0);

    function selecionaPontuacao(value) {
        if (value) {
            setPontuacao(previousState => previousState + 1)
        }
    }

    function selecionaObjetivo(value) {
        if (value === 1) {
            setObjetivo('Entrevista de emprego')
            return;
        }
        if (value === 2) {
            setObjetivo('Viagem pro exterior')
            return;
        }
        if (value === 3) {
            setObjetivo('Apresentação acadêmica')
            return;
        }
    }

    function selecionaCursoIngles(value) {
        if (value === 1) {
            setCursoIngles('sim')
            return;
        }
        if (value === 2) {
            setCursoIngles('não')
            return;
        }
    }

    function selecionaTempoCursoIngles(value) {
        if (value === 1) {
            setTempoCursoIngles('até 1 ano')
            return;
        }
        if (value === 2) {
            setTempoCursoIngles('1 a 2 anos')
            return;
        }
        if (value === 2) {
            setTempoCursoIngles('2 a 3 anos')
            return;
        }
        if (value === 2) {
            setTempoCursoIngles('3 ou mais')
            return;
        }
    }

    function selecionaNivelIngles(value) {
        if (value === 1) {
            setNivelIngles('basico')
            return;
        }
        if (value === 2) {
            setNivelIngles('intermediario')
            return;
        }
        if (value === 2) {
            setNivelIngles('avançado')
            return;
        }
        if (value === 2) {
            setNivelIngles('nenhum')
            return;
        }
    }

    function zerar() {
        setName('');
        setIdade(0);
        setObjetivo('');
        setCursoIngles('');
        setTempoCursoIngles('');
        setNivelIngles('');
        setPontuacao(0);
    }

    return (
        <BotContext.Provider
            value={{ setName, name, setIdade, selecionaObjetivo, objetivo, selecionaCursoIngles, selecionaTempoCursoIngles, selecionaNivelIngles, selecionaPontuacao, zerar, pontuacao }}
        >
            {children}
        </BotContext.Provider>
    );
}

export default BotContext;