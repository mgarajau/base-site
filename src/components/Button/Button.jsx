import './Button.css'
import setaBranca from '../../assets/seta.svg'

function Button({ arrow, buttonStyle,children, loading, ...props}) {
    return (
        <button className={`button ${buttonStyle} `}{...props}> // aqui eu passei o buttonStyle como uma classe, e o valor dessa classe é o valor da prop buttonStyle, ou seja, se eu passar buttonStyle="primary", a classe do botão vai ser "button primary"
            {children} {arrow && <img src={setaBranca}/>} // aqui eu estou verificando se a prop arrow é true, se for true, eu vou renderizar a imagem da seta, se for false, eu não vou renderizar nada
        </button>
    )
}

export default Button

