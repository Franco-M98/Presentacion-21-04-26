🖥️ Compumundo — Guía de instalación y configuración
Proyecto web de e-commerce desarrollado con HTML, CSS, Bootstrap 5, Node.js y MySQL.

📋 Requisitos previos
Antes de comenzar, asegurate de tener instalado:

-XAMPP (versión 8.x recomendada)
-SQLyog Community o MySQL Workbench
-Node.js (versión 18 o superior)
-Navegador web moderno (Chrome, Firefox, Edge)

🚀 Paso 1 — Iniciar XAMPP

Abrí el Panel de Control de XAMPP
Iniciá los siguientes módulos haciendo clic en Start:

✅ Apache
✅ MySQL

Verificá que ambos estén en verde con el estado Running

⚠️ Si el puerto 3306 está ocupado, MySQL no va a iniciar. Cerrá cualquier otra instancia de MySQL que esté corriendo.

🗄️ Paso 2 — Crear la base de datos con SQLyog
Conectarse a MySQL

A) Abrí SQLyog
B) Creá una nueva conexión con los siguientes datos:

Campo Valor
Host: localhost
Usuario: root
Contraseña: (vacía)
Puerto: 3306

C) Hacé clic en Connect

Importar la base de datos existente
La base de datos ya está creada. Solo necesitás importar el archivo .sql incluido en el proyecto.

Opción 1 — Desde SQLyog:

I) En el menú superior andá a Tools → Import → Execute SQL Script
II) Seleccioná el archivo compumundo.sql que está en la carpeta raíz del proyecto
III) Hacé clic en Execute
IV) Verificá que la base de datos compumundo aparezca en el panel izquierdo

Opción 2 — Desde phpMyAdmin (XAMPP):

I) Abrí el navegador y entrá a http://localhost/phpmyadmin
I) Hacé clic en Importar en el menú superior
III) Seleccioná el archivo compumundo.sql
IV) Hacé clic en Continuar

Opción 3 — Desde la terminal:
mysql -u root -p compumundo < compumundo.sql

✅ Una vez importada, vas a ver la base de datos compumundo con todas sus tablas y datos listos.


⚙️ Paso 3 — Iniciar el servidor (Node.js)
Iniciar el servidor
node server.js
El servidor debe correr en http://localhost:3000

✅ Si ves en la consola Servidor corriendo en puerto 3000, la conexión fue exitosa.


🌐 Paso 4 — Abrir el proyecto en el navegador
Con XAMPP y el servidor Node corriendo, abrí en el navegador:
http://localhost:3000
o si abrís los archivos estáticos directo:
http://localhost/compumundo/index.html
