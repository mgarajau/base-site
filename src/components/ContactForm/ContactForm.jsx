import './ContactForm.css'
import React, { useState, useEffect } from 'react';
import Button from '../Button/Button'

function ContactForm(props) {
  return (

       
        <div className="contact-form d-flex fd-column al-center">
            <h2>We love meeting new people and helping them.</h2>
           <form className="deflex form-group">
  <input 
    className="form-input" 
    type="text" 
    id="name" 
    name="name" 
    placeholder="Nome*" 
  />
  <input 
    className="form-input" 
    type="email" 
    id="email" 
    name="email" 
    placeholder="E-mail*" 
  />
  <textarea 
    className="form-input" 
    id="message" 
    name="message" 
    placeholder="Mensagem" 
    rows="5"
  ></textarea>
  <div className="form-group">
    <Button type="submit" buttonStyle="secondary">
      Enviar
    </Button>
  </div>
</form>
       
        </div>
            
  )
}

export default ContactForm