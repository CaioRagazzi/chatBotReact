import './App.css';
import ChatBot from 'react-simple-chatbot';
import 'bootstrap/dist/css/bootstrap.min.css';
import SegundaPergunta from './perguntas/segundaPergunta';
import PrimeiraPergunta from './perguntas/primeiraPergunta';
import TerceiraPergunta from './perguntas/terceiraPergunta';
import DecimaPergunta from './perguntas/decimaPergunta';
import QuartaPergunta from './perguntas/quartaPergunta';
import QuintaPergunta from './perguntas/quintaPergunta';
import SextaPergunta from './perguntas/sextaPergunta';
import SetimaPergunta from './perguntas/setimaPergunta';
import OitavaPergunta from './perguntas/oitavaPergunta';
import NonaPergunta from './perguntas/nonaPergunta';
import { useState } from 'react';
import Loader from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(false);

  function changeLoading() {
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  }

  return (
    loading ?
      <div className="AppLoading">
        <Loader
          type="Circles"
          color="#00BFFF"
          height={100}
          width={100}
        />
        <h4>Calculando objetivo</h4>
        <h6>Aguarde um instante</h6>
      </div> :
      <div className="App">
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'Olá, qual seu nome?',
              trigger: '2',
            },
            {
              id: '2',
              user: true,
              validator: (value) => {
                return true;
              },
              trigger: '3',
            },
            {
              id: '3',
              message: `Olá {previousValue}, qual a sua idade?`,
              trigger: '4'
            },
            {
              id: '4',
              user: true,
              validator: (value) => {
                if (isNaN(value)) {
                  return 'Idade deve ser um número!'
                }
                return true;
              },
              trigger: '5'
            },
            {
              id: '5',
              message: 'Qual o seu objetivo com essas aulas de ingles?',
              trigger: '6',
            },
            {
              id: '6',
              options: [
                { value: 1, label: 'Entrevista de emprego', trigger: '7' },
                { value: 2, label: 'Viagem pro exterior', trigger: '7' },
                { value: 3, label: 'Apresentação acadêmica', trigger: '7' },
              ],
            },
            {
              id: '7',
              message: 'Já fez algum curso de ingles?',
              trigger: '8',
            },
            {
              id: '8',
              options: [
                { value: 1, label: 'Sim', trigger: '9' },
                { value: 2, label: 'Não', trigger: '11' },
              ],
            },
            {
              id: '9',
              message: 'Por quanto tempo?',
              trigger: '10',
            },
            {
              id: '10',
              options: [
                { value: 1, label: 'até 1 ano', trigger: '11' },
                { value: 2, label: '1 a 2 anos', trigger: '11' },
                { value: 3, label: '2 a 3 anos', trigger: '11' },
                { value: 4, label: '3 ou mais', trigger: '11' },
              ],
            },
            {
              id: '11',
              message: 'Qual o seu nível de ingles?',
              trigger: '12',
            },
            {
              id: '12',
              options: [
                { value: 1, label: 'basico', trigger: '13' },
                { value: 2, label: 'intermediario', trigger: '13' },
                { value: 3, label: 'avançado', trigger: '13' },
                { value: 4, label: 'nenhum', trigger: '13' },
              ]
            },
            {
              id: '13',
              message: 'Agora irei fazer algumas perguntas para verificar o seu nível de Inglês. Selecione a resposta correta',
              trigger: '14',
            },
            {
              id: '14',
              component: (
                <PrimeiraPergunta />
              ),
              waitAction: true,
              trigger: '15'
            },
            {
              id: '15',
              component: (
                <SegundaPergunta />
              ),
              waitAction: true,
              trigger: '16'
            },
            {
              id: '16',
              component: (
                <TerceiraPergunta />
              ),
              waitAction: true,
              trigger: '17'
            },
            {
              id: '17',
              component: (
                <QuartaPergunta />
              ),
              waitAction: true,
              trigger: '18'
            },
            {
              id: '18',
              component: (
                <QuintaPergunta />
              ),
              waitAction: true,
              trigger: '19'
            },
            {
              id: '19',
              component: (
                <SextaPergunta />
              ),
              waitAction: true,
              trigger: '20'
            },
            {
              id: '20',
              component: (
                <SetimaPergunta />
              ),
              waitAction: true,
              trigger: '21'
            },
            {
              id: '21',
              component: (
                <OitavaPergunta />
              ),
              waitAction: true,
              trigger: '22'
            },
            {
              id: '22',
              component: (
                <NonaPergunta />
              ),
              waitAction: true,
              trigger: '23'
            },
            {
              id: '23',
              component: (
                <DecimaPergunta />
              ),
              waitAction: true,
              trigger: '24'
            },
            {
              id: '24',
              message: 'Muito Obrigado! Agora vamos calcular seus objetivos...',
              end: true
            },
          ]}
          userDelay={0}
          width="500px"
          handleEnd={() => {
            changeLoading();
          }}
        />
      </div>
  );
}

export default App;
