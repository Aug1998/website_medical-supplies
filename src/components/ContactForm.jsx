import { useState, useRef } from 'react';
import styled from '@emotion/styled'
import { colors, elements } from '../style/theme'
import emailjs from '@emailjs/browser';
import Button from './Button';
import Title from './Title';

export default function ContactForm() {
  const formRef = useRef(null);

  const [userInput, setUserInput] = useState({ 
    name : "",
    form_number : "",
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
      <Title color={colors.primaryLight}>/ Contacto</Title>
      <Form id="contact-form" autoComplete="off" ref={formRef}>
        {/* Nombre */}
        <FormItem className="form_name" gridArea="name">
          <div>
            <label htmlFor="form_name">Nombre</label>
          </div>
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

        {/* Email */}
        <FormItem className="form_email" gridArea="email">
          <div>
            <label htmlFor="form_email">Email</label>
          </div>
          <input 
            id="form_email" 
            type="email" 
            name="form_email"
            value={userInput.form_email}
            onChange={(e) => handleChange(e)}
          />
        </FormItem>

        {/* Numero */}
        <FormItem className="form_number" gridArea="number">
          <div>
            <label htmlFor="form_number">Teléfono</label>
          </div>
          <input 
          id="form_number" 
          type="text" 
          name="form_number" 
          pattern="[A-Za-z0-9]+" 
          maxLength="20"
          value={userInput.form_number}
          onChange={(e) => handleChange(e)}
          />
        </FormItem>
    
        {/* Empresa */}
        <FormItem className="form_company" gridArea="company">
          <div>
            <label htmlFor="form_company">Empresa</label>
          </div>
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

        {/* Mensaje */}
        <FormMessage className="message" fullWidth gridArea="message">
          <div>
            <label htmlFor="message">Mensaje</label>
          </div>
          <textarea 
            style={{ resize: "none", height: "100px" }}
            maxLength="800"
            name="message" 
            value={userInput.message}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </FormMessage>
        
        {/* Captcha */}
        <CaptchaContainer className="g-recaptcha" data-sitekey="6Lf8gyUnAAAAADA60Ofp-_RsQkSGUpZ8DcJquyk6" />

        {/* Dummy Submit */}
        <Button type="dark" className="dummy_submit" onClick={() => handleSubmit()}>Enviar</Button>
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
  align-items: flex-start;
  justify-content: center;
  padding: 90px 90px 70px;
  background-color: white;
  width: 100%;
  height: 100%;
  border-top: solid 3.5px ${colors.primaryLight};
  border-bottom: solid 3.5px ${colors.primaryLight};
  @media only screen and (max-width: 800px) {
    padding: 40px 10px;
  }
`

export const Form = styled.form`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 7fr 6fr 1fr;
  grid-template-rows: auto auto auto auto auto;
  grid-template-areas: 
  "name message message"
  "email message message"
  "number message message"
  "company message message"
  ". . button"
  ;
  width: 100%;
  height: 100%;
  gap: 30px 70px;
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
  grid-area: ${props => props.gridArea};
  position: relative;
  div {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 1px;
    left: 0px;
    width: 80px;
    height: 100%;
    &::before {
      content: "";
      position: absolute;
      top: 20%;
      left: 84px;
      height: 64%;
      width: 1px;
      background-color: ${colors.gray};
    }
    label {
      font-size: 14px;
      color: ${colors.gray}
    }
  }
  input{
    height: 40px;
    margin-top: 2px;
    font-size: 14px;
    border: none;
    outline: none;
    background-color: transparent;
    border-bottom: 1px solid ${colors.gray};
    padding: 0 6px 0 100px;
    color: ${colors.black};
  }
  @media only screen and (min-width: 801px) {
    grid-column: ${props => props.fullWidth? "span 2" : ""};
    width: ${props => props.fullWidth? "100%" : ""};
  }
`

export const FormMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  grid-area: ${props => props.gridArea};
  position: relative;
  div {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 1px;
    left: -4px;
    width: 80px;
    height: 40px;
    label {
      font-size: 14px;
      color: ${colors.gray}
    }
  }
  textarea {
    height: calc(100% - 40px)!important;
    margin-top: 2px;
    font-size: 14px;
    border: none;
    outline: none;
    background-color: transparent;
    border-bottom: 1px solid ${colors.gray};
    padding: 0px 6px 8px;
    color: ${colors.black};
  }
  @media only screen and (min-width: 801px) {
    grid-column: ${props => props.fullWidth? "span 2" : ""};
    width: ${props => props.fullWidth? "100%" : ""};
  }
`
