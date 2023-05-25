import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './styles.module.css';

const Form = () => {
   /* NEW: validation for inputs vvvv */
   // Input Change Handling
   const [inputs, setInputs] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
   const [fieldErrors, setFieldErrors] = useState({});
   const validationRules = {
     name: val => !!val,
     email: val => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
     company: val => !!val,
     phone: val => !val || /[+]{0,1}[0-9]{0,3}[0-9]{9,15}/.test(val),
     message: val => !!val
   };
   const validate = () => {
     let errors = {};
     let hasErrors = false;
     for (let key of Object.keys(inputs)) {
       errors[key] = !validationRules[key](inputs[key]);
       hasErrors |= errors[key];
     }
     setFieldErrors(prev => ({ ...prev, ...errors }));
     return !hasErrors;
   };
   const renderFieldError = field => {
     if (fieldErrors[field]) {
       return (
         <div className={styles.errorMsgContainer}>
           <p className={styles.errorMsg}>Please enter a valid {field}.</p>
         </div>
       );
     }
   };
   useEffect(() => {
     // Only perform interactive validation after submit
     if (Object.keys(fieldErrors).length > 0) {
       validate();
     }
   }, [inputs]);
   /* End new validation ^^^^ */
 
   const handleOnChange = event => {
     event.persist();
     setInputs(prev => ({
       ...prev,
       [event.target.id]: event.target.value
     }));
   };
 
   // Server State Handling
   const [serverState, setServerState] = useState({
     submitting: false,
     status: null
   });
   const handleServerResponse = (ok, msg) => {
     setServerState({
       submitting: false,
       status: { ok, msg }
     });
     if (ok) {
       setFieldErrors({});
       setInputs({
         name: "",
         email: "",
         company: "",
         phone: "",
         message: ""
       });
     }
   };
   const handleOnSubmit = event => {
     event.preventDefault();
     if (!validate()) {
       return;
     }
     setServerState({ submitting: true });
     axios({
       method: "POST",
       url: "https://formspree.io/meqwwzoz",
       data: inputs
     })
       .then(r => {
         handleServerResponse(true, "Great! Your message has been successfully submitted. We'll get back to you shortly. Thank you for contacting us!");
       })
       .catch(r => {
        //  handleServerResponse(false, r.response.data.error);
         handleServerResponse(false, "Oops! There was an error submitting your form. Please try again later.");
       });
   };
 
   return (
     <div>
       {serverState.status && (
           <p className={!serverState.status.ok ? `${styles.formSubmitErrorMsg}` : `${styles.formSubmitSuccessMsg}`}>
             {serverState.status.msg}
           </p>
         )}

       <form onSubmit={handleOnSubmit} noValidate className={`${styles.form} ${serverState.status ? styles.hidden : ''}`}>
       <input name="subject" value="New customer inquiry - airt contact form submission" type="hidden"/>
       <label htmlFor="name">Name:</label>
         <input
           id="name"
           type="text"
           name="name"
           onChange={handleOnChange}
           value={inputs.name}
           className={fieldErrors.name ? "error" : ""}
         />
         {renderFieldError("name")}
         <label htmlFor="email">Email:</label>
         <input
           id="email"
           type="email"
           name="email"
           onChange={handleOnChange}
           value={inputs.email}
           className={fieldErrors.email ? "error" : ""}
         />
         {renderFieldError("email")}
         <label htmlFor="company">Company:</label>
         <input
           id="company"
           type="text"
           name="company"
           onChange={handleOnChange}
           value={inputs.company}
           className={fieldErrors.company ? "error" : ""}
         />
         {renderFieldError("company")}
         <label htmlFor="phone">Phone (optional):</label>
         <input
           id="phone"
           type="text"
           name="phone"
           onChange={handleOnChange}
           value={inputs.phone}
           className={fieldErrors.phone ? "error" : ""}
         />
         {renderFieldError("phone")}
         <label htmlFor="message">Message:</label>
         <textarea
           id="message"
           name="message"
           onChange={handleOnChange}
           value={inputs.message}
           className={fieldErrors.message ? "error" : ""}
         ></textarea>
         {renderFieldError("message")}
         <button type="submit" disabled={serverState.submitting}>
          Send Message
         </button>
       </form>

       {serverState.submitting && (
        <div className={styles.loader}>
          <div className={styles.loaderContent}>
            <div className={styles.spinner}></div>
          </div>
        </div>
      )}
     </div>
   );
};

export default Form;