import { Link } from "react-router-dom"

// ASSETS
import './Footer.css'
import LogoDNC from '../../assets/dnc-logo.svg'
import LogoInstagram from '../../assets/instagram.svg'
import LogoLinkedin from '../../assets/linkedin.svg'
import LogoTwitter from '../../assets/twitter.svg'
import LogoFacebook from '../../assets/facebook.svg'
import LogoBrasil from '../../assets/brasil.svg'
import LogoEUA from '../../assets/EUA.svg'

function Footer() {
    return (
        <footer>
            <div className="container">
                
                {/* --- SEÇÃO SUPERIOR (Colunas) --- */}
                <div className="d-flex jc-space-between footer-top">
                    
                    {/* Coluna 1: Logo, Descrição e Redes */}
                    <div className="footer-logo-col">
                        <img src={LogoDNC} alt="Logo DNC" className="footer-logo"/>
                        <p className="grey-1-color footer-desc">A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
                        <div className="d-flex social-links">
                           <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src={LogoFacebook} alt="Facebook" /></a>
                           <a href="https://twitter.com" target="_blank" rel="noreferrer"><img src={LogoTwitter} alt="Twitter" /></a>
                           <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><img src={LogoLinkedin} alt="LinkedIn" /></a>
                           <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><img src={LogoInstagram} alt="Instagram" /></a>
                        </div>
                    </div>

                    {/* Container para Colunas 2 e 3 (Pages e Contact) */}
                    <div className="d-flex footer-links-container">
                        
                        {/* Coluna 2: Pages */}
                        <div className="footer-col">
                            <h3>Pages</h3>
                            <ul>
                                 <li><Link to="/">Home</Link></li>
                                 <li><Link to="/about">About us</Link></li>
                                 <li><Link to="/projects">Projects</Link></li>
                                 <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        
                        {/* Coluna 3: Contact */}
                        <div className="footer-col footer-contact-col">
                            <h3>Contact</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 – Vila<br/>Ema | São José dos<br/>Campos – SP | CEP<br/>12243-030</p>
                            <p className="grey-1-color">suporte@escoladnc.com.br</p>
                            <p className="grey-1-color">(19) 99187-4342</p>
                        </div>

                    </div>
                </div>

                {/* --- SEÇÃO INFERIOR (Copyright e Bandeiras) --- */}
                <div className="footer-bottom d-flex jc-space-between al-center">
                    <p className="grey-1-color footer-copy">Copyright © DNC - 2024</p>
                    <div className="langs-area d-flex">
                        <img src={LogoBrasil} width="29" height="29" alt="PT-BR"/>
                        <img className="margin-left-small" src={LogoEUA} width="29" height="29" alt="EN-US"/>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer