# Instrucciones de instalación

## Paso 1: Metro Server

Si es que se utilizara algun emulador junto a Metro, esos son los comandos a correr

```bash
# intalar librerias
npm install

# correr el servidor con npm
npm start

# o usando yarn
yarn start
```

## Paso 2: Seleccionar OS

### Para Android

```bash
# usando npm
npm run android

# o usando Yarn
yarn android
```

### Para iOS

```bash
# usando npm
npm run ios

# o usando Yarn
yarn ios
```

# Instrucciones de uso

El App es un simple To Do list, donde se pueden crear, eliminar y cambiar el estado de tareas.

Las tareas que no esten maracadas como finalizadas se podran ver en la vista principal llamada "List", y las tareas ya finalizadas se encuentran en la seccion "Done List". En ambos casos las tareas pueden ser eliminadas con el icono de basurero ubicado al final de cada tarea.

## Vista To Do list

![Vista de la lista](./img/List%20view.png)

Dentro de esta vista se observa una tarea de prueba, junto a su checkbox para cambiar el estado de la tarea y el botón de eliminar. Al final del todo se ubica el input para agregar una nueva tarea a la lista. El botón se encuentra deshabilitado mientras no exista texto.

![Vista de la lista, boton on](./img/Lista%20Vista%20con%20boton%20habilitado.png)

Cuando marque el check de una tarea, esta se mostrara tachada por 1 segundo y se movera hacia el listado de Done.

![Vista de la lista, check](./img/Lista%20vista%20check.png)

## Vista Done list

![Vista Done List](img/Done%20List.png)

En esta vista se mostraran todas las tareas ya marcadas como listas, en caso de que se requiera desmarcar una tarea solo oprima nuevamente la tarea.
