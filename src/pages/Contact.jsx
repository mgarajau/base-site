
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ContactForm from "../components/ContactForm/ContactForm"
import Banner from "../components/Banner/Banner"

function Contact() {
  return (
    <>
        <Header />
        <Banner title="Contact" image="contact.svg"/>
        <div className="container">
            <ContactForm />
        </div>
        <Footer />
    </>
   
  )
}

export default Contact