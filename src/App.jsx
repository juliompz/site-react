
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Rodape from './componentes/Rodape/Rodape';
import Time from './componentes/Time/Time';

function App() {

const[jogadores, setJogadores] = useState([])

const times = [
  {
    nome: "LOUD",
    cor: "#008000"
  },

  {
    nome: "MIBR",
    cor: "#808080"
  },

  {
    nome: "DRX",
    cor: "#00BFFF"
  },

  {
    nome: "FNATIC",
    cor: "#bb7d0b"
  },


]

const aoNovoJogadorAdicionado = (jogador) => {
  console.log(jogador)
  setJogadores([...jogadores, jogador])

 }
  return (
    <div className="App">
      <header className="App-header">
        <Banner/>
        </header>
        <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={aoNovoJogadorAdicionado}/>

        {times.map(time =><Time 
        key = {time.nome} 
        time = {time.nome} 
        cor = {time.cor}
        jogadores = {jogadores.filter(jogador => jogador.time === time.nome )}  
        />)}

        <Rodape />
    </div>
  );
}

export default App;
