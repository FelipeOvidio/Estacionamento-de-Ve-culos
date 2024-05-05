create database estacionamento;

create table usuarios
(
  id serial primary key,
  name text not null,
  email text not null unique,
  password text not null
);

create table clientes
(
  id serial primary key,  
  name text not null,
  cpf char(11) not null unique,
  telephone text  
);

create table veiculos
(
  id serial primary key, 
  brand text not null,
  model text not null,
  year int not null,
  plate text not null unique,
  prohibited timestamptz default now(),
  clientes_id integer references clientes(id)
  
);

create table registro_saida
(
  id serial primary key,
  vehicle_id integer references veiculos(id),
  client_id integer references clientes(id),
  prohibited timestamptz,
  exit timestamptz default now()
);
