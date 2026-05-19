# E1 — Proposta e Definição do Projeto

> **Disciplina:** Teoria dos Grafos  
> **Prazo:** 16 de março de 2026  
> **Peso:** 10% da nota final  

---

## Identificação do Grupo

| Campo | Preenchimento |
|-------|---------------|
| Nome do projeto |linkgraph |
| Integrante 1 | julia emily leonardo barbosa — 39325041 |
| Domínio de aplicação | ex.: rede social profissional|

---

## 1. Contexto e Motivação

> Descreva o problema do mundo real que será abordado. Por que ele é relevante?  
> *Orientação: 2 a 3 parágrafos. Seja específico — evite generalizações.*

<!-- O LinkGraph surge como uma resposta à dificuldade de estabelecer conexões profissionais significativas em plataformas de networking massivas. Em redes saturadas, profissionais em início de carreira ou estudantes frequentemente enfrentam barreiras para alcançar mentores ou especialistas.

O sistema atuará como um "GPS de networking", com o propósito específico de calcular caminhos mínimos de conexão entre dois usuários específicos na rede. Outras funcionalidades, como detecção de comunidades ou identificação de figuras centrais de nichos, ficam fora do escopo desta entrega inicial..-->

---

## 2. Objetivo Geral

> O que o sistema deve ser capaz de fazer ao final?  
> *Orientação: 1 frase clara e objetiva. Ex.: "O sistema deve calcular a rota de menor custo entre dois pontos em um mapa urbano."*

<!--Desenvolver um sistema computacional capaz de carregar, processar e analisar uma rede social profissional sintética, identificando caminhos de conexão mais curtos e sugerindo interações baseadas na estrutura da rede. -->

---

## 3. Objetivos Específicos

> Desmembre o objetivo geral em metas mensuráveis.  
> *Orientação: liste entre 3 e 5 itens. Cada item deve ser verificável — use verbos como "implementar", "calcular", "exibir", "carregar".*

<---
-M1: Implementar um módulo de infraestrutura para leitura e carga de dados sintéticos (fictícios) de usuários e conexões a partir de arquivos no formato JSON.

M2: Implementar o algoritmo de Dijkstra para calcular de forma precisa o menor caminho (grau de separação) entre dois usuários quaisquer na rede.

M3: Desenvolver um gerador de grafos que utilize o modelo Erdős–Rényi para validar o desempenho e a escalabilidade do sistema com até 10.000 vértices.

M4: Criar uma interface de linha de comando (CLI) com saída textual limpa (em formato de lista estruturada) que permita ao usuário consultar sugestões de conexões e visualizar os caminhos calculados.
---
--->
## 4. Público-Alvo / Caso de Uso Principal

> Para quem ou em qual cenário o sistema seria utilizado?  
> *Orientação: descreva um cenário concreto de uso. Ex.: "Um entregador de aplicativo que precisa otimizar a sequência de entregas em um bairro."*

<!-- A modelagem em grafo é a abordagem mais adequada porque as relações humanas são estruturadas como redes de conexões. Diferente de bancos de dados relacionais tradicionais, que enfrentam perda de performance em consultas de muitos níveis (múltiplos JOINs custosos), a Teoria dos Grafos utiliza listas de adjacência para percorrer conexões em tempo reduzido.

Como a rede social é esparsa (cada usuário conhece apenas uma fração minúscula do total), a lista de adjacência garante economia extrema de memória. Para que o Algoritmo de Dijkstra produza resultados com significado real, os pesos das arestas serão definidos por uma métrica objetiva de Esforço de Conexão, calculada da seguinte forma no arquivo JSON:

Peso 1: Usuários que pertencem à mesma empresa ou faculdade (conexão forte).

Peso 3: Usuários que possuem áreas de atuação correlatas.

Peso 5: Usuários de áreas completamente distintas (conexão fraca). -->

---

## 5. Justificativa Técnica — Por que Grafos?

> Por que a modelagem em grafo é a abordagem mais adequada para este problema?  
> *Orientação: explique quais elementos do problema mapeiam naturalmente para vértices e arestas. Mencione se há pesos, direção, ou restrições que reforçam a escolha.*

<!-- A modelagem em grafo é a abordagem mais adequada porque as relações humanas são inerentemente redes, não tabelas estáticas. Diferente de bancos de dados relacionais tradicionais (SQL), onde descobrir conexões de terceiro ou quarto nível exigiria múltiplos "joins" custosos que degradam a performance, a Teoria dos Grafos utiliza estruturas otimizadas como a Lista de Adjacência. Esta representação é ideal para redes sociais, que são tipicamente "esparsas" (onde cada usuário conhece apenas uma fração minúscula do total de pessoas), permitindo economizar memória e processar buscas em milissegundos.

Além disso, a aplicação do algoritmo de Dijkstra permite que o sistema não apenas encontre qualquer caminho, mas o caminho de menor custo, considerando "pesos" nas arestas que podem representar a força do vínculo ou a afinidade entre os profissionais. O uso de defaultdict(list) na implementação em Python garante que o sistema seja resiliente a erros de inserção e capaz de escalar dinamicamente conforme novos usuários (vértices) e interações (arestas) são adicionados à plataforma, mantendo a integridade da topologia da rede. -->

---

## 6. Tipo de Grafo

> Especifique as características do grafo que o problema requer.

| Característica | Escolha | Justificativa breve |
|----------------|---------|---------------------|
| Dirigido ou não-dirigido | | nao dirigido | Se duas pessoas possuem um vínculo profissional, a conexão é mútua (ambos são vizinhos).

| Ponderado ou não-ponderado | | ponderado | O peso pode representar o nível de interação ou afinidade entre os usuários.

| Conectado / bipartido / geral | | geral | O grafo pode ser desconexo (usuários novos sem amigos) e conter ciclos complexos.

| Representação interna pretendida | lista de adjacência / matriz       |lista de adjacencia | Mais eficiente para percorrer vizinhos em redes esparsas e economizar memória.

---

## 7. Diagrama Conceitual

> Insira aqui ao menos uma figura que ilustre o domínio do problema.  
> *Pode ser uma imagem exportada do Draw.io, Excalidraw, foto de esboço à mão etc.*  

<!--  O diagrama ilustra a rede profissional LinkGraph centrada no usuário ('voce'). As arestas não-dirigidas representam conexões mútuas, enquanto os pesos indicam a 'distância' ou 'custo' da interação (ex.: frequência de contato ou afinidade), base para o cálculo de caminhos mínimos pelo algoritmo de Dijkstra  -->

**Legenda:** 

---

## Checklist de Entrega

Antes de submeter, confirme:
# E1 — Proposta e Definição do Projeto

> **Disciplina:** Teoria dos Grafos  
> **Prazo:** 16 de março de 2026  
> **Peso:** 10% da nota final  

---

## Identificação do Grupo

| Campo | Preenchimento |
|-------|---------------|
| Nome do projeto |linkgraph |
| Integrante 1 | julia emily  — guilherme
| Domínio de aplicação | ex.: rede social profissional|

---

## 1. Contexto e Motivação

> Descreva o problema do mundo real que será abordado. Por que ele é relevante?  
> *Orientação: 2 a 3 parágrafos. Seja específico — evite generalizações.*

<!-- O LinkGraph surge como uma resposta à dificuldade de estabelecer conexões profissionais significativas em plataformas de networking massivas. Em redes saturadas, profissionais em início de carreira ou estudantes frequentemente enfrentam barreiras para alcançar mentores ou especialistas.

O sistema atuará como um "GPS de networking", com o propósito específico de calcular caminhos mínimos de conexão entre dois usuários específicos na rede. Outras funcionalidades, como detecção de comunidades ou identificação de figuras centrais de nichos, ficam fora do escopo desta entrega inicial..-->

---

## 2. Objetivo Geral

> O que o sistema deve ser capaz de fazer ao final?  
> *Orientação: 1 frase clara e objetiva. Ex.: "O sistema deve calcular a rota de menor custo entre dois pontos em um mapa urbano."*

<!--Desenvolver um sistema computacional capaz de carregar, processar e analisar uma rede social profissional sintética, identificando caminhos de conexão mais curtos e sugerindo interações baseadas na estrutura da rede. -->

---

## 3. Objetivos Específicos

> Desmembre o objetivo geral em metas mensuráveis.  
> *Orientação: liste entre 3 e 5 itens. Cada item deve ser verificável — use verbos como "implementar", "calcular", "exibir", "carregar".*

<---
-M1: Implementar um módulo de infraestrutura para leitura e carga de dados sintéticos (fictícios) de usuários e conexões a partir de arquivos no formato JSON.

M2: Implementar o algoritmo de Dijkstra para calcular de forma precisa o menor caminho (grau de separação) entre dois usuários quaisquer na rede.

M3: Desenvolver um gerador de grafos que utilize o modelo Erdős–Rényi para validar o desempenho e a escalabilidade do sistema com até 10.000 vértices.

M4: Criar uma interface de linha de comando (CLI) com saída textual limpa (em formato de lista estruturada) que permita ao usuário consultar sugestões de conexões e visualizar os caminhos calculados.
---
--->
## 4. Público-Alvo / Caso de Uso Principal

> Para quem ou em qual cenário o sistema seria utilizado?  
> *Orientação: descreva um cenário concreto de uso. Ex.: "Um entregador de aplicativo que precisa otimizar a sequência de entregas em um bairro."*

<!-- A modelagem em grafo é a abordagem mais adequada porque as relações humanas são estruturadas como redes de conexões. Diferente de bancos de dados relacionais tradicionais, que enfrentam perda de performance em consultas de muitos níveis (múltiplos JOINs custosos), a Teoria dos Grafos utiliza listas de adjacência para percorrer conexões em tempo reduzido.

Como a rede social é esparsa (cada usuário conhece apenas uma fração minúscula do total), a lista de adjacência garante economia extrema de memória. Para que o Algoritmo de Dijkstra produza resultados com significado real, os pesos das arestas serão definidos por uma métrica objetiva de Esforço de Conexão, calculada da seguinte forma no arquivo JSON:

Peso 1: Usuários que pertencem à mesma empresa ou faculdade (conexão forte).

Peso 3: Usuários que possuem áreas de atuação correlatas.

Peso 5: Usuários de áreas completamente distintas (conexão fraca). -->

---

## 5. Justificativa Técnica — Por que Grafos?

> Por que a modelagem em grafo é a abordagem mais adequada para este problema?  
> *Orientação: explique quais elementos do problema mapeiam naturalmente para vértices e arestas. Mencione se há pesos, direção, ou restrições que reforçam a escolha.*

<!-- A modelagem em grafo é a abordagem mais adequada porque as relações humanas são inerentemente redes, não tabelas estáticas. Diferente de bancos de dados relacionais tradicionais (SQL), onde descobrir conexões de terceiro ou quarto nível exigiria múltiplos "joins" custosos que degradam a performance, a Teoria dos Grafos utiliza estruturas otimizadas como a Lista de Adjacência. Esta representação é ideal para redes sociais, que são tipicamente "esparsas" (onde cada usuário conhece apenas uma fração minúscula do total de pessoas), permitindo economizar memória e processar buscas em milissegundos.

Além disso, a aplicação do algoritmo de Dijkstra permite que o sistema não apenas encontre qualquer caminho, mas o caminho de menor custo, considerando "pesos" nas arestas que podem representar a força do vínculo ou a afinidade entre os profissionais. O uso de defaultdict(list) na implementação em Python garante que o sistema seja resiliente a erros de inserção e capaz de escalar dinamicamente conforme novos usuários (vértices) e interações (arestas) são adicionados à plataforma, mantendo a integridade da topologia da rede. -->

---

## 6. Tipo de Grafo

> Especifique as características do grafo que o problema requer.

| Característica | Escolha | Justificativa breve |
|----------------|---------|---------------------|
| Dirigido ou não-dirigido | | nao dirigido | Se duas pessoas possuem um vínculo profissional, a conexão é mútua (ambos são vizinhos).

| Ponderado ou não-ponderado | | ponderado | O peso pode representar o nível de interação ou afinidade entre os usuários.

| Conectado / bipartido / geral | | geral | O grafo pode ser desconexo (usuários novos sem amigos) e conter ciclos complexos.

| Representação interna pretendida | lista de adjacência / matriz       |lista de adjacencia | Mais eficiente para percorrer vizinhos em redes esparsas e economizar memória.

---

## 7. Diagrama Conceitual

> Insira aqui ao menos uma figura que ilustre o domínio do problema.  
> *Pode ser uma imagem exportada do Draw.io, Excalidraw, foto de esboço à mão etc.*  

<!--  O diagrama ilustra a rede profissional LinkGraph centrada no usuário ('voce'). As arestas não-dirigidas representam conexões mútuas, enquanto os pesos indicam a 'distância' ou 'custo' da interação (ex.: frequência de contato ou afinidade), base para o cálculo de caminhos mínimos pelo algoritmo de Dijkstra  -->

**Legenda:** 

---

## Checklist de Entrega

Antes de submeter, confirme:

- [ x ] Texto entre 300 e 600 palavras (seções 1 a 5)
- [ x ] Todos os campos da tabela de identificação preenchidos
- [ x ] Tipo de grafo especificado com justificativa
- [ x ] Diagrama presente e referenciado no texto
- [ x ] Arquivo nomeado como `E1_NomeGrupo_Grafos.docx` (versão Word) ou PR aberto (versão GitHub)

---

*Teoria dos Grafos — Profa. Dra. Andréa Ono Sakai*

- [ x ] Texto entre 300 e 600 palavras (seções 1 a 5)
- [ x ] Todos os campos da tabela de identificação preenchidos
- [ x ] Tipo de grafo especificado com justificativa
- [ x ] Diagrama presente e referenciado no texto
- [ x ] Arquivo nomeado como `E1_NomeGrupo_Grafos.docx` (versão Word) ou PR aberto (versão GitHub)

---

*Teoria dos Grafos — Profa. Dra. Andréa Ono Sakai*
