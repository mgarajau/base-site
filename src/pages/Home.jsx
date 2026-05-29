import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Button from "../components/Button/Button"

function Home() {
  return (
    <>
        <Header />
        <h1>Home</h1>
        <p>Subtitulo - Home</p>
        <Button  buttonStyle="primary" arrow> Olá</Button> // aqui eu estou passando a prop buttonStyle com o valor "primary", e a prop arrow com o valor true, ou seja, o botão vai ter a classe "button primary" e vai renderizar a imagem da seta
        <Footer />
    </>
   
  )
}

export default Home
