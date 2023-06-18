use universidade;

DROP TABLE IF EXISTS Projetos;
DROP TABLE IF EXISTS Organismo_financiador;
DROP TABLE IF EXISTS Estudantes;
DROP TABLE IF EXISTS Departamento;
DROP TABLE IF EXISTS Professores;


-- Tabela Professores
CREATE TABLE Professores (
  nContribuinte INT PRIMARY KEY,
  dataNascimento DATE,
  nome VARCHAR(255),
  especialidade VARCHAR(255),
  posto VARCHAR(255)
);

-- Tabela Departamento
CREATE TABLE Departamento (
  numero_Departamento INT PRIMARY KEY,
  nome VARCHAR(255),
  escritorio VARCHAR(255),
  nContribuinte_Professores INT,
  FOREIGN KEY (nContribuinte_Professores) REFERENCES Professores (nContribuinte)
);

-- Tabela Estudantes
CREATE TABLE Estudantes (
  nContribuinte INT PRIMARY KEY,
  plano_de_curso VARCHAR(255),
  nome VARCHAR(255),
  dataNascimentoEst DATE,
  numero_Departamento INT,
  FOREIGN KEY (numero_Departamento) REFERENCES Departamento (numero_Departamento)
);

-- Tabela Organismo_financiador
CREATE TABLE Organismo_financiador (
  identificacao INT PRIMARY KEY,
  nome VARCHAR(255)
);

-- Tabela Projetos
CREATE TABLE Projetos (
  numero_Projeto INT PRIMARY KEY,
  orcamentos DECIMAL(10, 2),
  dtFinal DATE,
  dtInicio DATE,
  numero_nContribuinte_Professores INT,
  identificacao_OrganismoFinanciador INT,
  FOREIGN KEY (numero_nContribuinte_Professores) REFERENCES Professores (nContribuinte),
  FOREIGN KEY (identificacao_OrganismoFinanciador) REFERENCES Organismo_financiador (identificacao)
);


-- tabela Professores
INSERT INTO Professores (nContribuinte, dataNascimento, nome, especialidade, posto)
VALUES (12345, '1975-03-15', 'Professor A', 'Matemática', 'Titular'),
       (67890, '1980-07-20', 'Professor B', 'Física', 'Adjunto');

-- tabela Departamento
INSERT INTO Departamento (numero_Departamento, nome, escritorio, nContribuinte_Professores)
VALUES (1, 'Departamento A', 'Escritório A', 12345),
       (2, 'Departamento B', 'Escritório B', 67890);

-- tabela Estudantes
INSERT INTO Estudantes (nContribuinte, plano_de_curso, nome, dataNascimentoEst, numero_Departamento)
VALUES (12345, 'Plano A', 'João', '2000-01-01', 1),
       (67890, 'Plano B', 'Maria', '1999-05-10', 2);

