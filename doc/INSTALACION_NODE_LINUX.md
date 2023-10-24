# Intalacion Node.js en Linux
En Linux, puedes instalar Node.js a través de la línea de comandos.
Los siguientes comandos son para sistemas basados en Debian, como Ubuntu:

```
sudo apt update
sudo apt install nodejs
sudo apt install npm
```
Si estás usando un sistema basado en Red Hat, como Fedora, puedes utilizar yum o dnf en lugar de apt.

### Instalación en linux mediante archivo .tar
1. Descomprimir el archivo .tar: Primero, abre una terminal y navega al directorio donde tienes el archivo .tar.
   Luego, utiliza el siguiente comando para descomprimirlo:
```
tar -xvf nombre_del_archivo.tar
```
Asegúrate de reemplazar nombre_del_archivo.tar con el nombre del archivo .tar que deseas descomprimir.

2. Mover la carpeta descomprimida: Una vez que hayas descomprimido el archivo, tendrás una carpeta que contiene los archivos de Node.js.
   Puedes mover esta carpeta a una ubicación adecuada en tu sistema. Por ejemplo, puedes moverla a /usr/local si deseas que Node.js esté disponible de forma global en tu sistema:
```
sudo mv nombre_de_la_carpeta /usr/local/
```
3. Agregar la carpeta al PATH: Para que puedas usar Node.js y npm desde cualquier ubicación en tu sistema,
   es importante que la carpeta bin de Node.js se agregue a tu variable PATH.
   Puedes hacerlo editando tu archivo de perfil, como ~/.bashrc, ~/.zshrc, o similar.
   Agrega una línea como esta al final del archivo:
```
export PATH=/usr/local/nombre_de_la_carpeta/bin:$PATH
```
Reemplaza nombre_de_la_carpeta con el nombre de la carpeta que descomprimiste.
4. Recargar el archivo de perfil: Después de editar el archivo de perfil,
   recárgalo para que los cambios surtan efecto. Por ejemplo, si estás usando Bash:
```
source ~/.bashrc
```
Si estás usando Zsh:
```
source ~/.zshrc
```
### Verificar la instalación
Para verificar que Node.js se ha instalado correctamente,
abre una terminal o línea de comandos y ejecuta los siguientes comandos:
```
node -v
npm -v
```
