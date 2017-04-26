# Comandos Docker

## docker ps

Para ver **todos** los contenedores corriendo usamos

```
>> docker ps -a
```

## docker stop

Para **detener** un contenedor

```
>> docker stop 'id' o 'nombre'
>> docker stop 12
>> docker stop micontenedor
```
## docker start 

Para **levantar** el contenedor instalado

```
>> docker start 'id' o 'nombre'
>> docker start 12
>> docker start micontenedor
```
## docker rm 

Para **eliminar** el contenedor instalado

```
>> docker rm 'id' o 'nombre'
>> docker rm 12
>> docker rm micontenedor
```
* No se puede **_borrar_** los contenedores que no han sido _detenidos_.

## MYSQL
Para levantar docker con mysql utilizamos

```
>> docker run --name adrian -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=adrian -e MYSQL_USER=adrian -e MYSQL_PASSWORD=123456 -p 3306:3306 -d mysql
```
### --name adrian
Es el nombre del contenedor

### -e MYSQL_ROOT_PASSWORD=123456
Es la clave de root

### -e MYSQL_DATABASE=adrian
Es el nombre de la base de datos

### -e MYSQL_USER=adrian 
Es el nombre de usuario
### -e MYSQL_PASSWORD=123456
 Es la clave del usuario
###-p 3306:3306
 - Es el puerto asignado al contenedor **direccionado** (el de la derecha es del **host**)
 - El puerto de la izquierda es el puerto del **contenedor**

## PostgreSQL

```
>> docker run --name postgresadrian -e POSTGRES_PASSWORD=123456 -e POSTGRES_USER=adrian -e POSTGRES_DB=politecnica -p 5432:5432 -d postgres
```

