function contact(event) {
  event.preventDefault();

  emailjs
    .sendForm(
      'service_gnyj19c',   // your service ID
      'template_u9oea1j',  // your template ID
      event.target,        // the form
      'eeEiaje-L30e4GhrV'  // your public key
    )
    .then(() => {
      console.log('this worked');
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
    });
}