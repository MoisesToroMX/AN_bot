# Ejercicio 2

El ejercicio consiste en realizar una interfaz web de chat (en forma de chatbot).

Del lado del cliente debe haber un campo para entrada de texto que se enviará al server side, en dónde se deberá hacer uso de alguna API gratuita como [Dialog Flow](https://dialogflow.cloud.google.com/), [Wit.AI](http://wit.AI) o simplemente integrar alguna biblioteca como [Eliza-JS](https://github.com/brandongmwong/elizabot-js) para generar respuestas automáticas y poder responder al cliente.

Para la comunicación en tiempo real entre cliente y servidor se podrá utilizar Sockets, MQTT o cualquier otro protocolo.

Para la API se deberá utilizar Express-JS o Nest y para el frontend VueJS. 

### Entregable

Se deberá enviar el link del repo con las instrucciones de ejecución y de forma opcional (plus) se podrá publicar el proyecto en alguna plataforma como AWS, Heroku, Firebase o Netlify.

# INSTRUCCIONES DE EJECUCIÓN

### Frontend

Tomando en cuenta que nos encontramos en la carpeta ".../artificial_nerds_bot", debemos dirigirnos a la carpeta "/client".

Vamos a ejecutar en la terminal el siguiente comando:

```bash
cd client
```
Una vez estemos en la ruta ".../artificial_nerds_bot/client", vamos a ejecutar en la terminal el siguiente comando:

```bash
$ npm run serve
```
^ ^ ^

Este comando ejecutará el frontend de nuestra aplicación y nos permitirá verlo en el navegador que queramos (es recomendable usar Google Chrome ya que ahí
fue en donde se estuvo probando la aplicación de forma constante y es donde mejor se ve).

Para asegurarnos que si esta funcionando el frontend, podremos ver que en la terminal donde ejecutamos "npm run serve" nos imprimirá lo siguiente:

```bash
 DONE  Compiled successfully in 4408ms


  App running at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.100.8:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

Entonces, podremos dirigirnos en nuestro navegador de preferencia a la ruta local http://localhost:8080/ y ver el frontend. También podemos presionar la tecla Ctrl y cliquear el texto,
lo cual nos va a dirigir inmediatamente a la dirección.

### Backend

Tomando en cuenta que nos encontramos en la carpeta ".../artificial_nerds_bot", debemos dirigirnos a la carpeta "/server".

Vamos a ejecutar en la terminal el siguiente comando:

```bash
cd server
```
Una vez estemos en la ruta ".../artificial_nerds_bot/server", vamos a ejecutar en la terminal el siguiente comando:

### Si no quieres recargar a cada rato el servidor tienes:

```bash
$ nodemon app.js 
```

### O si quieres recargar constantemente, también tienes:

```bash
$ node app.js 
```
^ ^ ^

Estos comandos hacen los mismo, se encargan de ejecutar el backend de nuestra aplicación.

Para asegurarnos que si esta funcionando el backend, podremos ver que en la terminal donde ejecutamos "nodemon app.js" o "node app.js" nos imprimirá lo siguiente:

```bash
 Listening on port: 3000
```
^ ^ ^

Ya con esto sabemos que el backend esta funcionando.

## ¿Que hacer para utilizar el bot?

Es simple, debemos dirigirnos a la ruta local http://localhost:8080/ donde encontraremos el frontend funcionando y ya podremos interactuar con la página.