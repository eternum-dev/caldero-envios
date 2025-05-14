# Caldero envíos

Este proyecto comenzó como una solución personalizada para un cliente local, propietario de un restaurante.

En este restaurante existía una problemática al calcular tanto los tiempos como los valores de los envíos a domicilio. Para obtener esta información, se contactaba directamente al repartidor, quien indicaba el costo y el tiempo estimado de entrega.

Este método generaba bastante insatisfacción por parte del cliente, ya que presentaba varias desventajas:
- Valores que podían fluctuar dependiendo del repartidor o del momento en que se hiciera la consulta.
- Tiempos de entrega inconsistentes.
- Demoras en la entrega de información al cliente, ya que contactar al repartidor podía tardar demasiado.

Una vez que el proyecto logró resolver estos problemas, noté que otros locales con servicios similares enfrentaban las mismas dificultades. Fue entonces cuando decidí convertirlo en un servicio más general, y así nació **Caldero Envíos**.

## Tabla de Contenidos
- [Visión general](#visión-general)
  - [Proyecto](#proyecto)
- [Mi Proceso](#mi-proceso)
  - [Desarrollado con](#desarrollado-con)
  - [Configuración de Variables de Entorno](#configuración-de-variables-de-entorno)
  - [Instalación](#instalación)
- [Autor](#autor)

## Visión general

### Proyecto

Los usuarios deberían poder:
- Ingresar una dirección.
- Seleccionar un local de inicio de ruta y el repartidor que hará el envío.
- Renderizar el mapa de la zona, con una ruta desde el punto de partida y el destino.
- Ver información de el envío: valor total, ruta optima y tiempos de envío.


### Desarrollado con

- JavaScript
- React
- Vite
- HTML5
- CSS
- Google Maps
- React Router
- Firebase


### Instalación

#### Clonar este repositorio
`git clone https://github.com/eternum-dev/caldero-envios.git`

#### Acceder al archivo Nombre Proyecto
`cd ./caldero-envios`

#### Instalar Dependencias
`npm install`

### Configuración de Variables de Entorno

1. Crea un archivo llamado `.env` en la raíz del proyecto o renombra `env.template` a `.env`.
2. Rellena el contenido del archivo y completa las variables requeridas.

### Scripts del proyecto

#### Iniciar el proyecto
`npm run dev`

#### Construir para producción
`npm run build`

## Autor

### Alejandro Thon

- Linkedin - [Linkedin - Alejandro Thon](www.linkedin.com/in/alejandrothon/)
- Email - alejandro.thon.j@gmail.com

