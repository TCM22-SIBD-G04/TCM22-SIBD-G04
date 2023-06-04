# C3 : SQL

## DDL

```sql
-- Tabela Estudantes
CREATE TABLE Estudantes (
  nContribuinte INT PRIMARY KEY,
  plano_de_curso VARCHAR(255),
  nome VARCHAR(255),
  dataNascimentoEst DATE,
  número_Departamento INT,
  FOREIGN KEY (número_Departamento) REFERENCES Departamento (número_Departamento)
);

-- Tabela Projetos
CREATE TABLE Projetos (
  número_Projeto INT PRIMARY KEY,
  orçamentos DECIMAL(10, 2),
  dtFinal DATE,
  dtInicio DATE,
  número_nContribuinte_Professores INT,
  identificação_OrganismoFinanciador INT,
  FOREIGN KEY (número_nContribuinte_Professores) REFERENCES Professores (nContribuinte),
  FOREIGN KEY (identificação_OrganismoFinanciador) REFERENCES Organismo_financiador (identificação)
);

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
  número_Departamento INT PRIMARY KEY,
  nome VARCHAR(255),
  escritório VARCHAR(255),
  nContribuinte_Professores INT,
  FOREIGN KEY (nContribuinte_Professores) REFERENCES Professores (nContribuinte)
);

-- Tabela Organismo_financiador
CREATE TABLE Organismo_financiador (
  identificação INT PRIMARY KEY,
  nome VARCHAR(255)
);

```

## DML

-- Inserção de dados na tabela Estudantes
INSERT INTO Estudantes (nContribuinte, plano_de_curso, nome, dataNascimentoEst, número_Departamento)
VALUES (12345, 'Plano A', 'João', '2000-01-01', 1),
       (67890, 'Plano B', 'Maria', '1999-05-10', 2);

-- Inserção de dados na tabela Projetos
INSERT INTO Projetos (número_Projeto, orçamentos, dtFinal, dtInicio, número_nContribuinte_Professores, identificação_OrganismoFinanciador)
VALUES (1, 10000.00, '2023-12-31', '2023-01-01', 12345, 1),
       (2, 5000.00, '2024-06-30', '2024-01-01', 67890, 2);

-- Inserção de dados na tabela Professores
INSERT INTO Professores (nContribuinte, dataNascimento, nome, especialidade, posto)
VALUES (12345, '1975-03-15', 'Professor A', 'Matemática', 'Titular'),
       (67890, '1980-07-20', 'Professor B', 'Física', 'Adjunto');

-- Inserção de dados na tabela Departamento
INSERT INTO Departamento (número_Departamento, nome, escritório, nContribuinte_Professores)
VALUES (1, 'Departamento A', 'Escritório A', 12345),
       (2, 'Departamento B', 'Escritório B', 67890);

--


---
[< Previous](rebd04.md) | [^ Main](https://github.com/JoseMSoares/TCM22-SIBD-G04)
:--- | :---: | ---: 