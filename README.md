# challenge-amigo-secreto

Descripción:

Esta aplicación web permite organizar un juego de amigo secreto de manera sencilla y dinámica. Los usuarios pueden agregar nombres de participantes y realizar un sorteo aleatorio para asignar amigos secretos.
Características

Interfaz de usuario intuitiva y amigable
Validación de entrada de nombres
Visualización de lista de participantes en tiempo real
Sorteo aleatorio de amigos secretos
Diseño responsivo adaptable a diferentes dispositivos

Estructura del Proyecto
Copy📦 amigo-secreto
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┣ 📜 app.js
 ┗ 📂 assets
    ┣ 📜 amigo-secreto.png
    ┗ 📜 play_circle_outline.png
Tecnologías Utilizadas

HTML5
CSS3
JavaScript (Vanilla)
Fuentes de Google Fonts (Inter y Merriweather)

Funcionalidades Principales
1. Agregar Participantes

La función agregarAmigo() permite:

Capturar el nombre ingresado en el campo de texto
Validar que el campo no esté vacío
Agregar el nombre a la lista de participantes
Limpiar el campo de entrada después de agregar



2. Mostrar Lista de Participantes

La función actualizarListaAmigos():

Actualiza la visualización de la lista en tiempo real
Muestra todos los participantes agregados
Mantiene el DOM actualizado con los cambios



3. Realizar Sorteo

La función sortearAmigo():

Verifica que haya al menos 2 participantes
Selecciona un amigo secreto de manera aleatoria
Muestra el resultado en la interfaz



Requisitos de Instalación

Clonar el repositorio
No requiere instalación de dependencias
Abrir el archivo index.html en un navegador web

Cómo Usar

Abrir la aplicación en el navegador
Ingresar el nombre de un participante en el campo de texto
Hacer clic en "Añadir" para agregar el participante
Repetir los pasos 2 y 3 hasta tener todos los participantes
Hacer clic en "Sortear amigo" para realizar el sorteo

Consideraciones

Se requieren al menos 2 participantes para realizar el sorteo
Los nombres vacíos no son permitidos
La aplicación mantiene los datos solo durante la sesión actual
El sorteo es completamente aleatorio

Accesibilidad
La aplicación incluye características de accesibilidad:

Etiquetas ARIA para mejorar la navegación
Roles definidos para elementos de lista
Textos alternativos para imágenes
Estructura semántica del HTML

Mejoras Futuras Posibles

Persistencia de datos
Opción para eliminar participantes
Histórico de sorteos
Envío de notificaciones por email
Modo oscuro
Animaciones en el sorteo

Autor
[Tu Nombre]
