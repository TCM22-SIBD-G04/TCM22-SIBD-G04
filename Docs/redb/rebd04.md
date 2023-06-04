# C4 : Esquema Relacional  <!-- omit in toc -->
_(Apresentar o esquema físico da Base de Dados. Para cada relação resultante, apresente a descrição da tabela correspondente usando o exemplo apresentado.)_

- [Relações](#relações)
  - [Tabela_Estudantes](#Tabela_Estudantes)
  - [Tabela_Projetos](#Tabela_Projetos)
  - [Tabela_Professores](#Tabela_Estudantes)
  - [Tabela_Departamento](#Tabela_Departamento)
  - [Tabela_Organismo_financiador](#Tabela_Organismo_financiador)
  
- [Vistas](#vistas)

## Relações

### Tabela_Estudantes:

#### COLUNAS <!-- omit in toc -->

| Atributos                     |
|-------------------------------|
| número_Projeto (PK)           |
| orçamentos                    |
| dtFinal                       |
| dtInicio                      |
| número_nContribuinte_Professores (FK)|
| identificação_OrganismoFinanciador (FK)|

* Restrições:

| Restrição                 | Descrição                                                           |
|---------------------------|----------------------------------------------------------------------|
| Chave Primária            | nContribuinte (deve ser único para cada estudante)                   |
| Unicidade (valores únicos) | nContribuinte (cada número de contribuinte deve ser único)           |
| Referencial (chaves estrangeiras) | número_Departamento (deve referenciar um número de departamento existente) |

### Tabela_Projetos:


#### COLUNAS <!-- omit in toc -->

| Atributos                     |
|-------------------------------|
| número_Projeto (PK)           |
| orçamentos                    |
| dtFinal                       |
| dtInicio                      |
| número_nContribuinte_Professores (FK)|
| identificação_OrganismoFinanciador (FK)|

* Restrições:

| Restrição                 | Descrição                                                           |
|---------------------------|----------------------------------------------------------------------|
| Chave Primária            | número_Projeto (deve ser único para cada projeto)                     |
| Unicidade (valores únicos) | número_Projeto (cada número de projeto deve ser único)                |
| Referencial (chaves estrangeiras) | número_nContribuinte_Professores (deve referenciar um número de contribuinte de professor existente) |
| Referencial (chaves estrangeiras) | identificação_OrganismoFinanciador (deve referenciar uma identificação de organismo financiador existente) |

### Tabela_Professores:


#### COLUNAS <!-- omit in toc -->

| Atributos              |
|------------------------|
| nContribuinte (PK)     |
| dataNascimento         |
| nome                   |
| especialidade          |
| posto                  |


* Restrições:

| Restrição                 | Descrição                                                           |
|---------------------------|----------------------------------------------------------------------|
| Chave Primária            | nContribuinte (deve ser único para cada professor)                    |
| Unicidade (valores únicos) | nContribuinte (cada número de contribuinte deve ser único)           |

### Tabela_Departamento:

#### COLUNAS <!-- omit in toc -->

| Atributos              |
|------------------------|
| número_Departamento (PK)|
| nome                   |
| escritório             |
| nContribuinte_Professores (FK)|


* Restrições:

| Restrição                 | Descrição                                                           |
|---------------------------|----------------------------------------------------------------------|
| Chave Primária            | número (deve ser único para cada departamento)                        |
| Unicidade (valores únicos) | número (cada número de departamento deve ser único)                   |
| Referencial (chaves estrangeiras) | nContribuinte_Professores (deve referenciar um número de contribuinte de professor existente) |



### Tabela_Organismo_financiador:

#### COLUNAS <!-- omit in toc -->

| Atributos              |
|------------------------|
| identificação (PK)     |
| nome                   |

* Restrições:

| Restrição                 | Descrição                                                           |
|---------------------------|----------------------------------------------------------------------|
| Chave Primária            | identificação (deve ser único para cada organismo financiador)        |
| Unicidade (valores únicos) | identificação (cada identificação de organismo financiador deve ser única) |

## Vistas

Vista 1: Vista que combina informações dos estudantes e projetos:
```sql
CREATE VIEW Estudantes_Projetos AS
SELECT e.nContribuinte, e.nome, e.plano_de_curso, p.numero_Projeto, p.orcamentos
FROM Estudantes e
JOIN Projetos p ON e.nContribuinte = p.numero_nContribuinte_Estudantes;
```

Vista 2: Vista que dispõe os professores e seus respectivos departamentos:
```sql
CREATE VIEW Professores_Departamentos AS
SELECT pr.nome AS professor_nome, pr.nContribuinte, d.nome AS departamento_nome
FROM Professores pr
JOIN Departamento d ON pr.nContribuinte = d.nContribuinte_Professores;
```

Vista 3: Vista que mostra informações dos projetos com os nomes dos organismo financiadores correspondentes:
```sql
CREATE VIEW Projetos_OrganismosFinanciadores AS
SELECT p.numero_Projeto, p.orcamentos, o.nome AS organismo_financiador_nome
FROM Projetos p
JOIN Organismo_financiador o ON p.identificacao_OrganismoFinanciador = o.identificacao;
```