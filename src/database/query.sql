create database estacionamento;

create table usuarios
(
  id serial primary key,
  nome text not null,
  email text not null,
  senha text not null
);

