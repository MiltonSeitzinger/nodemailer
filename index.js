/**
* Importamos el modulo
**/
const nodemailer = require('nodemailer')
/**
* Creamos el objeto Transport
**/
var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'xxxxxx@hotmail.com',
    pass: 'xxxxxx'
  }
})
/**
* Creamos el mensaje
**/
var mensaje = "Envío desde NodeJs con Nodemailer"
/**
* Creamos el email
**/
var email = {
  from: 'xxxxxx@hotmail.com',
  to: 'xxxxxx@gmail.com',
  subject: 'Probando el servicio de correo',
  text: mensaje
}
/**
* Utilizamos Transporter para realizar el envío del email.
**/
transporter.sendMail(email, (err, info)=> {
  if (err){
    console.log('Hubo un error: ', err)
  } else {
    console.log("El email se envio correctamente: ", info)
  }
})
