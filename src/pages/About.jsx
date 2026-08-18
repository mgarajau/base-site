import AboutText from "../components/AboutText/AboutText"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Button from "../components/Button/Button"
import Banner from "../components/Banner/Banner"


function About() {
  return (
    <>
        <Header />
        <Banner title="About" image="about.svg"/>
        <div className="container">
            <AboutText />
        </div>
        <Footer />
    </>
   
  )
}

export default About