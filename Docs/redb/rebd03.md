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
_(Apresentar o estudo da normalização das relações obtidas na secção anterior. Desnormalizar se necessário.)_

---
[< Previous](rebd02.md) | [^ Main](https://github.com/exemploTrabalho/reportSIBD/) | [Next >](rebd04.md)
:--- | :---: | ---: 