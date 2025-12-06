// template_u9oea1j
// service_gnyj19c
// eeEiaje-L30e4GhrV

function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            `service_gnyj19c`,
            `template_u9oea1j`,
            event.target,
            `eeEiaje-L30e4GhrV`
    ).then(() => {
            console.log(`this worked`)
    }) 
}