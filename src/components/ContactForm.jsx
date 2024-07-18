import { useState, useRef } from 'react';
import styled from '@emotion/styled'
import { colors } from '../theme'
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const formRef = useRef(null);

  const [userInput, setUserInput] = useState({ 
    name : "",
    lastName : "",
    email : "",
    number : "",
    message : "",
  })

  // Email.JS Credentials
  const formConfig = {
    serviceID : process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateID : process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    publicKey : process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  }

  const handleChange = (e) => {
    setUserInput({
      ...userInput,  
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e) => {
    if(validateForm()){
      // sendEmail();
    } else {
      return;
    }
  }

  // Commented out for testing
  // eslint-disable-next-line no-unused-vars
  const sendEmail = (e) => {
    emailjs.sendForm(formConfig.serviceID, formConfig.templateID, formRef.current, formConfig.publicKey)
    .then((result) => {
        console.log(result.text);
        // window.location.reload(false);
        alert("Gracias por contactarte");
        window.location.reload()
    }, (error) => {
        console.log(error.text);
        alert("No se pudo enviar el mensaje");
    });
  }

  const validateForm = () => {
    // Nombre
    if (userInput.form_name.length < 3) {
        console.log("name error");
        return false;
    }
    // Apellido
    if (userInput.form_lastName.length < 3) {
        console.log("lastName error");
        return false;
    }
    // Mail
    if (userInput.form_email.length < 5) {
        console.log("email error");
        return false;
    }
    // Numero
    var numbers = /^[0-9]+$/;
    if(!userInput.form_number.match(numbers) || userInput.form_number.length < 6){
        console.log("number error");
        return false;
    }
    return true;
  }

  return (
    <FormContainer>
      <h3>Formulario de contacto</h3>
      <Form id="contact-form" autoComplete="off" ref={formRef}>
        {/* Nombre */}
        <FormItem className="form_name" >
          <label htmlFor="form_name">Nombre*</label>
          <input 
          id="form_name" 
          type="text" 
          name="form_name" 
          pattern="[A-Za-z0-9]+" 
          maxLength="20"
          value={userInput.form_name}
          onChange={(e) => handleChange(e)}
          />
        </FormItem>

        {/* Apellido */}
        <FormItem className="form_lastName" >
          <label htmlFor="form_lastName">Apellido</label>
          <input 
          id="form_lastName" 
          type="text" 
          name="form_lastName" 
          pattern="[A-Za-z0-9]+" 
          maxLength="20"
          value={userInput.form_lastName}
          onChange={(e) => handleChange(e)}
          />
        </FormItem>

        {/* Empresa */}
        <FormItem className="form_company" >
          <label htmlFor="form_company">Empresa</label>
          <input 
          id="form_company" 
          type="text" 
          name="form_company" 
          pattern="[A-Za-z0-9]+" 
          maxLength="20"
          value={userInput.form_company}
          onChange={(e) => handleChange(e)}
          />
        </FormItem>
      


        {/* Email */}
        <FormItem className="form_email">
          <label htmlFor="form_email">Email*</label>
          <input 
            id="form_email" 
            type="email" 
            name="form_email"
            value={userInput.form_email}
            onChange={(e) => handleChange(e)}
          />
        </FormItem>
    
        {/* Mensaje */}
        <FormItem className="message" fullWidth>
          <label htmlFor="message">Mensaje</label>
          <textarea 
            style={{ resize: "none", height: "100px" }}
            maxLength="800"
            name="message" 
            value={userInput.message}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </FormItem>
        
        {/* Captcha */}
        <CaptchaContainer className="g-recaptcha" data-sitekey="6Lf8gyUnAAAAADA60Ofp-_RsQkSGUpZ8DcJquyk6" />

        {/* Dummy Submit */}
        <SubmitButton type="button" className="dummy_submit" onClick={() => handleSubmit()}>Enviar</SubmitButton>
      </Form>
    </FormContainer>
  )
}

const CaptchaContainer = styled.div`
   div{
      overflow: hidden;
   }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 46px 50px;
  background-color: white;
  width: fit-content;
  h3 {
    color: ${colors.primary};
    text-transform: uppercase;
    font-size: 26px;
    letter-spacing: 2px;
    margin-bottom: 18px;
    text-align: center;
  }
  @media only screen and (max-width: 800px) {
    padding: 40px 10px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 460px;
  gap: 20px;
  @media only screen and (max-width: 800px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
  }
`

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    margin-left: 6px;
    font-size: 14px;
  }
  input, textarea{
    height: 40px;
    margin-top: 2px;
    font-size: 14px;
    border: none;
    outline: none;
    background-color: ${colors.gray2};
    border: 1px solid ${colors.gray1};
    padding: 0 6px;
    color: #f5f5f5;
    border-radius: 4px;
  }
  @media only screen and (min-width: 801px) {
    grid-column: ${props => props.fullWidth? "span 2" : ""};
    width: ${props => props.fullWidth? "100%" : ""};
  }
`

export const SubmitButton = styled.button`
  border: none;
  background-color: ${colors.secondary};
  color: black;
  text-transform: uppercase;
  width: 100%;
  height: 46px;
  padding: 5px 0;
  font-size: 16px;
  margin-top: 18px;
  font-weight: 500;
  letter-spacing: 0.5px;
  &:hover{
    cursor: pointer;
    background-color: ${colors.secondary};
  }
`