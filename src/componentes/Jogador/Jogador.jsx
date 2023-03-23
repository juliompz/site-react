import './Jogador.css'

export const Jogador = (props) => {
  return (
    <div className='jogador'>      
        <div className="foto">
            <img src={props.img} alt={props.nick} />
        </div>

        <div className="dados">
            <h4>{props.nick}</h4>
            <h5>{props.funcao}</h5>
        </div>
    </div>
  )
}

export default Jogador
