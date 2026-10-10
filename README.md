# Grúa Roma — demo Android

Este proyecto contiene un prototipo visual e interactivo de Grúa Roma y un flujo de GitHub Actions para compilar un APK de prueba sin instalar Android Studio en el teléfono.

## Qué incluye
- Formulario de solicitud de grúa.
- Datos del cliente, vehículo, problema, origen y destino.
- Simulación local de presupuesto y confirmación.
- Diseño adaptable a pantallas de celular.
- Workflow para crear un APK Android de depuración.

## Importante
Esta versión **no envía solicitudes reales**, no usa GPS, no guarda pedidos en un servidor y no manda notificaciones. El presupuesto y la confirmación son simulaciones locales. Para operar con clientes reales habrá que conectar un backend y un canal de contacto.

## Crear el APK gratis desde el celular

1. Descargá y descomprimí `grua-roma-demo.zip` en el teléfono, o guardá el ZIP en Descargas para subir su contenido desde el navegador.
2. Creá una cuenta gratuita en GitHub si no tenés una: https://github.com
3. En GitHub, creá un repositorio nuevo llamado `grua-roma-demo`. Para simplificar, podés dejarlo público; no subas datos personales ni claves.
4. En el repositorio, elegí **Add file → Upload files** y subí los archivos y carpetas de este proyecto. Asegurate de que también se suba `.github/workflows/build-apk.yml`. Si el teléfono no muestra archivos ocultos, usá la opción del navegador para mostrar archivos ocultos o subí el proyecto desde una computadora.
5. Confirmá el envío con **Commit changes**.
6. Abrí la pestaña **Actions** del repositorio. Si aparece un aviso para habilitar workflows, aceptalo.
7. Elegí **Crear APK de Grúa Roma** y tocá **Run workflow**. También se inicia al subir cambios a la rama `main`.
8. Esperá a que la ejecución termine en verde. Abrí esa ejecución y buscá **Artifacts**.
9. Descargá `grua-roma-apk-debug`. Es un ZIP que contiene `app-debug.apk`; descomprimilo con el administrador de archivos del teléfono.
10. Tocá `app-debug.apk` y autorizá la instalación desde esa fuente si Android te lo solicita. Instalá solo el APK que generaste desde tu propio repositorio.

## Si no aparece Actions
- Revisá que `build-apk.yml` esté en `.github/workflows/`.
- Revisá que los archivos estén en la rama `main`.
- Entrá a Actions y habilitá workflows si GitHub lo solicita.

## Modificar el demo
Editá `index.html`, `style.css` o `src.js` desde GitHub o un editor de texto y guardá los cambios. Cada cambio en `main` vuelve a ejecutar la compilación.

## Publicar en Google Play
Este flujo genera un APK de depuración para probar e instalar manualmente. No es una versión firmada para publicar en Google Play. La publicación requiere preparar una versión release firmada y cumplir los requisitos vigentes de Play Console.
