**Relatório de Especificação da Informação**

<hr>

C1 - Introdução:

Descrição do Trabalho:

Para resolver este problema vamos criar um sistema de identificação que esteja conectado à base de dados central permitindo a boa organização e classificar os diferentes grupos de pessoas e estas mesmas numa dada universidade.

Inicialmente iremos criar categorias para classificar de acordo com a base de dados seguindo com o procedimento de criar o sistema de maneira a melhor. Para tal consideramos que cada professor tem um NIF, nome, idade, posto e uma especialidade de investigação.

Existem projetos com um número, um organismo financiador, uma data de início, uma data de final, e um orçamento.

Estudantes de pós-graduação têm um número de contribuinte, um nome, uma idade, e um plano de curso (ex. mestrado, doutoramento).

Cada projecto é gerido por um professor (o investigador principal do projecto).

Cada projecto tem a participação de um ou mais professores.

Os professores podem gerir e/ou trabalhar em vários projectos.

Cada projecto tem um ou mais estudantes de pós-graduação (conhecidos como os assistentes de investigação).

Sempre que um estudante de pós-graduação trabalha num projecto, terá que existir um professor a supervisionar esse trabalho. 

Os estudantes podem trabalhar em vários projetos com supervisores eventualmente diferentes.

Os departamentos têm um número, um nome, e um escritório principal.

Os departamentos são liderados por um professor.

Os professores podem trabalhar num ou mais departamentos. Associada a cada uma destas funções está uma percentagem do seu tempo.

Os estudantes de pós-graduação estão associados a um departamento no qual fazem o seu curso.

Cada estudante de pós-graduação tem um outro estudante mais velho que é o seu aconselhador.

Vamos portanto catalogar toda esta informação, de maneira a ficar melhor organizada e a ser possível a sua utilização noutros softwares e a sua própria consulta para qualquer interesse.

<hr>

Especificação de Requisitos:

Descrição dos requisitos para um sistema de informação de uma universidade que permite gerir os docentes e estudantes bem como as suas disciplinas, projetos e departamentos. Este sistema será utilizado pela universidade, mais especificamente os gestores do mesmo e qualquer chefe de departamento.

Descrição dos requisitos do utilizador:

Os tipos de utilizadores  do sistema de informação e as funcionalidade a queestes terão acesso são:

Developer - responsável por manter o sistema e atualizá-lo.

As suas funcionalidades são:

- Criar e manter o sistema
- Manter a base de dados relevante
- Criar e manter a interface do sistema para uso eficaz
- Criar e manter acesso codificado à plataforma (usuário e palavra-passe associada)

<hr>
<hr>

C2 - Esquema Conceptual:

**Modelo E/A**

<img title="Diagrama" alt="Diagrama" src="/Momento 2 - G04/Diagram1.png">

Neste esquema conceptual mostramos os conteudos que pertencem ao utilizador, o que este regista e assim como a informação toda pretendida.

Regras de Negócio adicionais:

Projetos só podem ter um número, gerido por um professor, um organismo financiador, uma data de início, uma data de final, e um orçamento.
Estudantes só podem ter um número de contribuinte
Departamentos só podem ter um número, nome, escritório e apenas gerido por um professor







