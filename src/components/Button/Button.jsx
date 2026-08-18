import './Button.css'
import setaBranca from '../../assets/seta.svg'

function Button({ arrow, buttonStyle,children, loading, ...props}) {
    return (
        <button className={`button ${buttonStyle} `}{...props}> {/* aqui eu estou usando a sintaxe de template string para concatenar a classe "button" com a classe que eu recebo pela prop buttonStyle, ou seja, se eu passar a prop buttonStyle com o valor "primary", o botão vai ter a classe "button primary" */ }
            {children} {arrow && <img src={setaBranca}/>} {/* aqui eu estou usando a sintaxe de short-circuit para renderizar a imagem da seta apenas se a prop arrow for true, ou seja, se eu passar a prop arrow com o valor true, o botão vai renderizar a imagem da seta, caso contrário, ele não vai renderizar nada */ }
        </button>
    )
}

export default Button

