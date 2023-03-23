import Jogador from '../Jogador/Jogador'
import './Time.css'

const Time = (props) => {

    return (
        props.jogadores.length > 0 &&
        <section className='time'>
            <h3 style={{ borderColor: props.cor }}>{props.time}</h3>

            <div className="jogadores">
                {props.jogadores.map(jogador => <Jogador key={jogador.nick} nick={jogador.nick} funcao={jogador.funcao} img={jogador.imagem}/>)}
            </div>
        </section>
        
    )
}


export default Time