CREATE DATABASE IF NOT EXISTS banco_mundo_mujer;
USE banco_mundo_mujer;

-- Tabla Banco
CREATE TABLE banco (
  id_banco INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  ciudad_sede VARCHAR(100) NOT NULL
);

-- Tabla Cliente
CREATE TABLE cliente (
  id_cliente INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(100) NOT NULL UNIQUE,
  ciudad VARCHAR(100) NOT NULL,
  id_banco INT,
  FOREIGN KEY (id_banco) REFERENCES banco(id_banco)
);

-- Tabla Crédito
CREATE TABLE credito (
  id_credito INT AUTO_INCREMENT PRIMARY KEY,
  monto DECIMAL(10,2) NOT NULL,
  tipo_credito VARCHAR(50) NOT NULL,
  fecha_aprobacion DATE NOT NULL,
  id_cliente INT,
  FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);
