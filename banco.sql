
USE banco1022b;
CREATE TABLE IF NOT EXISTS produtos(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    descricao VARCHAR(50),
    preco DECIMAL(10,2),
    imagem VARCHAR(300)
);
INSERT INTO produtos VALUES (1,'Iphone','Celular RUIM',5000.50,'https://m.media-amazon.com/images/I/515ahREcK+L._AC_SX679_.jpg');

USE banco1022b;
CREATE TABLE IF NOT EXISTS usuarios(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(100),
    created_at timestamp(4),
    updated_at timestamp(4)
);
INSERT INTO `banco1022b`.`usuarios` (`id`, `nome`, `email`, `created_at`, `updated_at`) VALUES ('1', 'Marcos', 'marcos.neto@estudante.ifms.edu.br', '2024-10-21 07:40', '2024-10-21 07:41');
INSERT INTO `banco1022b`.`usuarios` (`id`, `nome`, `email`, `created_at`, `updated_at`) VALUES ('2', 'Mateus', 'mateus@gmail.com', '2024-10-21 07:40', '2024-11-22 07:41');
INSERT INTO `banco1022b`.`usuarios` (`id`, `nome`, `email`, `created_at`, `updated_at`) VALUES ('3', 'Felipe Brito', 'felipe@gmail.com', '2024-10-22 07:45', '2024-10-24 07:31');

/*
USE defaultdb;
CREATE TABLE IF NOT EXISTS produtos(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    descricao VARCHAR(50),
    preco DECIMAL(10,2),
    imagem VARCHAR(300)
);
INSERT INTO produtos VALUES (1,'Iphone','Celular RUIM',5000.50,'SEM IMAGEM');

USE defaultdb;
CREATE TABLE IF NOT EXISTS usuarios(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(100),
    created_at timestamp(4),
    updated_at timestamp(4)
);
INSERT INTO `defaultdb`.`usuarios` (`id`, `nome`, `email`, `created_at`, `updated_at`) VALUES ('1', 'Marcos', 'marcos.neto@estudante.ifms.edu.br', '2024-10-21 07:40', '2024-10-21 07:41');
*/