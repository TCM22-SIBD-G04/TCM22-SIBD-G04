# C3 : Normalização

## Relações

* Passo 1 – Entidades-tipo
Estudantes (nContribuinte, plano_de_curso, nome, dataNascimentoEst)

Projetos (orçamentos, dtFinal, dtIncio, número)

Professores (nContribuinte, dataNascimento, nome, especialidade, posto)

Departamento (nome, escritório, número)

Organismo financiador (identificação, nome)

<hr>

* Passo 2 –   associação 1:1
Estudantes (nContribuinte, plano_de_curso, nome, dataNascimentoEst)

Projetos (orçamentos, dtFinal, dtIncio, número #nContribuinte > Professores)

Professores (nContribuinte, dataNascimento, nome, especialidade, posto)

Departamento (nome, escritório, número)

Organismo financiador (identificação, nome)

<hr>

* Passo 3 –   associação 1:N
Estudantes (nContribuinte, plano_de_curso, nome, dataNascimentoEst, #número > Departamento)

Projetos (orçamentos, dtFinal, dtIncio, número #nContribuinte > Professores, #identificação > Organismo Financiador)

Professores (nContribuinte, dataNascimento, nome, especialidade, posto)

Departamento (nome, escritório, número, #nContribuinte > Professores)

Organismo financiador (identificação, nome)

<hr>

* Passo 4 –   associação N:M
Estudantes (nContribuinte, plano_de_curso, nome, dataNascimentoEst, #número > Departamento) 

Projetos (orçamentos, dtFinal, dtIncio, número #nContribuinte > Professores, #identificação > Organismo Financiador)

Professores (nContribuinte, dataNascimento, nome, especialidade, posto)

Departamento (nome, escritório, número, #nContribuinte > Professores)

Organismo financiador (identificação, nome)

Trabalham (#nContribuinte > Professor, #número > Departamento, percentagemTempo)

Tem ( #nContribuinte > Estudantes, #número > Projetos)

<hr>

* Resultado:
Estudantes (nContribuinte, plano_de_curso, nome, dataNascimentoEst, #número > Departamento) 

Projetos (orçamentos, dtFinal, dtIncio, número #nContribuinte > Professores, #identificação > Organismo Financiador)

Professores (nContribuinte, dataNascimento, nome, especialidade, posto)

Departamento (nome, escritório, número, #nContribuinte > Professores)

Organismo financiador (identificação, nome)

Trabalham (#nContribuinte > Professor, #número > Departamento, percentagemTempo)

Tem ( #nContribuinte > Estudantes, #número > Projetos)

<hr>

## Normalização do Esquema Relacional

* 1ª Forma Normal (1NF)
Verificamos que todos os atributos contêm valores atómicos e que não existem repetições de grupos de valores.

Não tendo atributos de multivalor, e sendo os valores destes atómicos, verificamos que está na 1NF

* 2ª Forma Normal (2NF)
Verificamos se todos os atributos que não sejam chaves dependem totalmente da chave primária

Uma vez que não existem dependências parciais, verificamos que está na 2NF

* 3ª Forma Normal (3NF)

Verificamos a existência de dependências transitivas e removemos qualquer dependência onde um atributo dependa de outro atributo não chave.

<img title="3NF" alt="3NF" src="/Docs/NORMALIZAÇÃO-01.jpg">

* Forma Normal de Boyce-Codd (BCNF)

A BCNF garante que todas as dependências funcionais são determinadas pela chave primária apenas.

No modelo atual, todas as dependências são determinadas pelas chaves primárias de cada tabela estando portanto na BCNF.

* 4ª Forma Normal (4NF)

Uma vez que não existem dependências de multivalor, verificamos que está na 4NF
---
[< Previous](rebd02.md) | [^ Main](https://github.com/exemploTrabalho/reportSIBD/) | [Next >](rebd04.md)
:--- | :---: | ---: 