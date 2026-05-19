# E2 — Design Técnico, Arquitetura e Backlog

> **Disciplina:** Teoria dos Grafos  
> **Prazo:** 13 de abril de 2026  
> **Peso:** 20% da nota final  

---

## Identificação do Grupo

| Campo | Preenchimento |
|-------|---------------|
| Nome do projeto | linkgraph |
| Repositório GitHub | |
| Integrante 1 | julia emily leonardo barbosa — 39325041 |
| Integrante 2 | guilherme — RA |


---

## 1. Algoritmos Escolhidos

### 1.1 Algoritmo Principal

| Campo | Resposta |
|-------|----------|
| Nome do algoritmo | algoritmo de dijkstra |
| Categoria | guloso (greedy)|
| Complexidade de tempo | O(V+E)log V) |
| Complexidade de espaço | O(V+E ) |
| Problema que resolve | Caminho mínimo em grafos ponderados com pesos não-negativos. |

**Por que este algoritmo foi escolhido?**

<!-- O LinkGraph precisa calcular o "menor esforço" entre dois profissionais. Como definimos pesos diferentes para afinidade (1 para mesma empresa, 5 para áreas distintas), o Dijkstra garante o caminho com a menor soma total de pesos, sendo mais preciso que uma busca simples. -->

**Alternativa descartada e motivo:**

| Algoritmo alternativo | Motivo da exclusão |
|----------------------|-------------------|
| BFS (Busca em Largura) | O BFS assume que todas as conexões têm o mesmo peso (1). No nosso caso, ele ignoraria a "afinidade" profissional. |  |

**Limitações no contexto do problema:**

<!-- Não suporta pesos negativos (o que não é um problema para networking, pois não existe "distância negativa" entre pessoas). -->

**Referência bibliográfica:**

> <!-- CORMEN, T. H. et al. Algoritmos: teoria e prática. 3. ed. Rio de Janeiro: Elsevier, 2012. -->

---


## 2. Arquitetura em Camadas

> Insira o diagrama abaixo. Pode ser exportado do Draw.io, Excalidraw, etc.

![Diagrama de arquitetura](./docs/arquitetura_e2.png)

### Descrição das camadas

| Camada | Responsabilidade | Artefatos principais |
|--------|-----------------|----------------------|
| Apresentação (UI/CLI) | Interface de linha de comando para interação com o usuário | main.py, cli_handler.py |
| Aplicação (Service) | Orquestração das chamadas e lógica de negócio do sistema. | networking_service.py |
| Domínio (Core) | Estruturas de dados fundamentais do grafo. | graph.py, node.py, dijkstra.py |
| Infraestrutura (I/O) | Persistência e leitura dos dados em formato JSON. | json_reader.py, usuarios.json |

---

## 3. Estrutura de Diretórios

```
nome-do-projeto/
├── docs/
│   ├── README.md
│   └── E1_template.md
│   └── E2_template.md
├── src/
│   ├── core/
│   │   ├── graph.py          # ou .java, .ts…
│   │   └── edge.py
│   ├── algorithms/
│   │   └── algoritmo.py      # um arquivo por algoritmo
│   ├── io/
│   │   └── file_reader.py
│   └── main.py
├── tests/
│   ├── test_graph.py
│   └── test_algorithms.py
├── data/
└── requirements.txt          # ou pom.xml, package.json…
```

> **Justificativa de desvios** *(se houver)*: 

---

## 4. Definição do Dataset

**Formato de entrada aceito:**

<!--JSON contendo listas de vértices (usuários) e arestas (conexões com pesos)-->

**Exemplo de estrutura do arquivo de entrada:**

```json
{

  "vertices": [{"id": 1, "nome": "Julia"}, {"id": 2, "nome": "Mentor"}],
  "arestas": [
    { "origem": 1, "destino": 2, "peso": 1 }
  ]
}
}
```

**Estratégia de geração aleatória:**

| Parâmetro | Descrição |
|-----------|-----------|
| Número de vértices | configurável via argumento |
| Densidade | configurável (0.0 a 1.0) |
| Faixa de pesos | mín/máx configuráveis |

---

## 5. Backlog do Projeto

### 5.1 In-Scope — O que será implementado

| # | Funcionalidade | Prioridade | Critério de aceite |
|---|---------------|------------|-------------------|
| 1 | | Alta / Média / Baixa | Dado ___, quando ___, então ___ |


#,Funcionalidade,Prioridade,Critério de aceite 
1,Carregamento de JSON,Alta,"Dado um arquivo JSON válido, quando o sistema inicia, então os dados são carregados na lista de adjacência. "
2,Cálculo de Caminho Mínimo,Alta,"Dado dois IDs de usuários, quando solicitado o caminho, então o sistema retorna a lista de nomes e o custo total. "
3,Gerador de Grafos Aleatórios,Média,"Dado N=1000 vértices, quando executado o gerador, então um grafo conexo é criado para testes. "
4,Visualização de Conexões,Baixa,"Dado um usuário, quando consultado, então o sistema lista todos os seus vizinhos diretos."
5,Exportação de Relatório,Baixa,"Dado um caminho calculado, quando solicitado, então o sistema salva o resultado em um arquivo .txt."

### 5.2 Out-of-Scope — O que NÃO será feito

| Funcionalidade excluída | Motivo |
|------------------------|--------|
| Interface Gráfica (GUI) | O foco do projeto é o desempenho do algoritmo via CLI. |
| Integração Real com LinkedIn | Limitações de API e Termos de Uso da plataforma.  |
| Deletar usuários em tempo real | O dataset será estático para garantir a integridade dos cálculos de teste. |



## Checklist de Entrega

- [x ] Big-O de tempo e espaço declarados para cada algoritmo
- [x ] Ao menos 1 alternativa descartada com justificativa
- [x ] Diagrama de arquitetura com 4 camadas identificadas
- [x ] Referência bibliográfica para cada algoritmo (ABNT ou IEEE)
- [x ] Backlog com ≥ 5 itens In-Scope e ≥ 3 Out-of-Scope
- [x ] Ao menos 3 critérios de aceite no formato "dado / quando / então"
- [x ] Exemplo de estrutura de arquivo de entrada presente

---

*Teoria dos Grafos — Profa. Dra. Andréa Ono Sakai*
