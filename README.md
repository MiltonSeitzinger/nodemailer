# nodemailer :email:
_Enviaremos emails a través de NodeJs con Nodemailer_

## Los pasos a seguir son.
- [ ] Iniciar un proyecto.
- [ ] Instalar Nodemailer.
- [ ] Crear el archivo index.js.
- [ ] Editar el archivo index.js.

## Primer Paso: _Iniciar un proyecto_ :file_folder:
  `npm init` y seguir los pasos.
- [x] ~Iniciar un proyecto~.
- [ ] Instalar Nodemailer.
- [ ] Crear el archivo index.js.
- [ ] Editar el archivo index.js.

## Segundo Paso: _Instalar Nodemailer_
  `npm install nodemailer`
- [x] ~Iniciar un proyecto~.
- [x] ~Instalar Nodemailer~.
- [ ] Crear el archivo index.js.
- [ ] Editar el archivo index.js.

## Tercer Paso:
_Crear el archivo index.js (o como lo hayas definido en `npm init`)_

`touch index.js`

- [x] ~Iniciar un proyecto~.
- [x] ~Instalar Nodemailer~.
- [x] ~Crear el archivo index.js~.
- [ ] Editar el archivo index.js.

## Editar index.js
#### _Importamos el módulo **nodemailer**_

`const nodemailer = require('nodemailer')`

#### _Creamos el objeto Transporter_

Para este ejemplo usamos el servicio de _**hotmail**_
```
var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'xxxxxxx@hotmail.com',
    pass: 'xxxxxxxxx'
  }
})
```

#### _Creamos el mensaje_

```
var mensaje = "Envío desde NodeJs con Nodemailer"
```

#### _Creamos el email_

```
var email = {
  from: 'xxxxxx@hotmail.com',
  to: 'xxxxxxx@gmail.com',
  subject: 'Probando el servicio de correo',
  text: mensaje
}
```

#### _Hacemos el envío del mensaje_

```
transporter.sendMail(email, (err, info)=> {
  if (err){
    console.log('Hubo un error: ', err)
  } else {
    console.log("El email se envio correctamente: ", info)
  }
})
```

- [x] ~Iniciar un proyecto~.
- [x] ~Instalar Nodemailer~.
- [x] ~Crear el archivo index.js~.
- [x] ~Editar el archivo index.js~.

## :thumbsup:
