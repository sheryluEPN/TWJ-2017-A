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
