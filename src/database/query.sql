create database estacionamento;

create table usuarios
(
  id serial primary key,
  name text not null,
  email text not null unique,
  password text not null
);

