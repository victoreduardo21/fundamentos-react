import './App.css'
import Aleatorio from './components/basic/Aleatorio'
import ComParametro from './components/basic/ComParametro'
import Fragmento from './components/basic/Fragmento'
import Primeiro from './components/basic/Primeiro'
import Card from './components/layout/card'
import Familia from './components/basic/familia'
import Membro from './components/basic/membro'
import Lista from './components/repeticao/listaAlunos'
import Tabela from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParouImpar'
import Usuario from './components/condicional/usuario'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/input'
import Contador from './components/Contador/contador'
import MegaSena from './components/mega/mega'


import React from "react"

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="cards">

      <Card titulo='#13 Mega Sena' color="#00BFFF">
          <MegaSena></MegaSena>
        </Card>

      <Card titulo='#12 Contador' color="#424242">
          <Contador numeroInicial={0}></Contador>
        </Card>

        <Card titulo='#11 componente controlado (Input)' color="#6A5ACD">
          <Input></Input>
        </Card>


        <Card titulo='#10 Comunicação indireta' color="#8bad">
          <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo='#9 Comunicação direta' color="#FF8897">
          <DiretaPai></DiretaPai>
        </Card>

        <Card titulo='#8 Renderização condicional' color="#982395">
          <ParOuImpar numero={17}></ParOuImpar>
          <Usuario usuario={{ nome: 'Victor' }} />
          <Usuario usuario={{}} />
        </Card>

        <Card titulo='#7 Desafio de Repetição' color="#FF8c66">
          <Tabela></Tabela>
        </Card>

        <Card titulo='#6 Repetição' color="#FF4c65">
          <Lista></Lista>
        </Card>

        <Card titulo='#5 Componentes filho' color="#FF00FF">
          <Familia sobrenome="silva">
            <Membro nome="Pedro" />
            <Membro nome="Ana" />
            <Membro nome="Gustavo" />
            <Membro nome="Victor" />
            <Membro nome="Gilerme" />
            <Membro nome="João" />

          </Familia>
        </Card>

        <Card titulo="#4 - desafios aliatorios" color="#080" >
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#3 - Fragmentos" color="#0000FF">
          <Fragmento />
        </Card>

        <Card titulo="#2 - Comparametros" color="#00FFFF">
          <ComParametro
            Titulo="Situação do aluno"
            Aluno=" Victor " nota=" 7 "
          />
        </Card>

        <Card titulo="#1 - Primeiros" color="#A020F0">
          <Primeiro />
        </Card>

      </div>
    </div>
  );
}
export default App;