CREATE DATABASE aula_sesi;
USE aula_sesi;
CREATE TABLE aluno(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, # auto_increment adiciona 1 a cada registro. Exemplo: (id: 1, nome: luiz), (id:2, nome: gustavo);
	nome VARCHAR(67) NOT NULL,
	serie INT NOT NULL,
	turma CHAR(1)
);

SELECT * FROM aluno;