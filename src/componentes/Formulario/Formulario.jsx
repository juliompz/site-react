import { useState } from "react"
import Botao from "../Botao/Botao"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import './Formulario.css'

const Formulario = (props) => {

    const[nick, setNick] = useState('')
    const[funcao, setFuncao] = useState('')
    const[imagem, setImagem] = useState('')
    const[time, setTime] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoJogadorCadastrado({
            nick,
            funcao,
            imagem,
            time
        })

        setNick('')
        setFuncao('')
        setImagem('')
        setTime('')
        console.log("Form foi submetido! =>", nick, funcao, imagem, time)
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar um card de player</h2>
                    <CampoTexto obrigatorio ={true}
                    label="Nick" 
                    placeholder="Digite seu nick"
                    valor = {nick}
                    aoAlterado = {valor => setNick(valor)}
                    />

                    <CampoTexto obrigatorio ={true} 
                    label="Função" 
                    placeholder="Digite sua função" 
                    valor ={funcao}
                    aoAlterado = {valor => setFuncao(valor)}
                    />

                    <CampoTexto label="Imagem" 
                    placeholder="Digite o endereço da imagem." 
                    valor ={imagem}
                    aoAlterado = {valor => setImagem(valor)}
                    />

                    <ListaSuspensa obrigatorio ={true} 
                    label="Time" 
                    placeholder="Selecione" 
                    itens={props.times}
                    valor = {time}
                    aoAlterado = {valor => setTime(valor)}
                    
                    />
                    <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario