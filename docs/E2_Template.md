# E2 — Design Técnico, Arquitetura e Backlog

> **Disciplina:** Teoria dos Grafos  
> [cite_start]**Prazo:** 13 de abril de 2026 [cite: 3]
> [cite_start]**Peso:** 20% da nota final [cite: 3]

---

## Identificação do Grupo

| Campo | Preenchimento |
|-------|---------------|
| Nome do projeto | LinkGraph - Networking Optimizer |
| Repositório GitHub | https://github.com/Juliaemmyy/linkgraph_grupo6_ |
| Integrante 1 | Julia Emily Leonardo Barbosa — 39325041 |
| Integrante 2 | Guilherme — RA |

---

## 1. Algoritmos Escolhidos

### 1.1 Algoritmo Principal

| Campo | Resposta |
|-------|----------|
| Nome do algoritmo | [cite_start]Algoritmo de Dijkstra  |
| Categoria | [cite_start]Guloso (Greedy) [cite: 18] |
| Complexidade de tempo | [cite_start]$O((V + E) \log V)$ [cite: 18] |
| Complexidade de espaço | [cite_start]$O(V + E)$ [cite: 18] |
| Problema que resolve | [cite_start]Encontra o caminho mais curto entre dois nós em um grafo ponderado. [cite: 19] |

[cite_start]**Por que este algoritmo foi escolhido?** O LinkGraph precisa calcular o "menor esforço" entre dois profissionais em uma rede[cite: 6]. [cite_start]Como o projeto utiliza pesos diferentes para medir a afinidade (ex: 1 para mesma empresa, 5 para áreas distintas), o Dijkstra é o algoritmo ideal, pois garante o caminho com a menor soma total de pesos, sendo muito mais preciso que uma busca cega[cite: 13, 19].

[cite_start]**Alternativa descartada e motivo:** [cite: 20]

| Algoritmo alternativo | Motivo da exclusão |
|----------------------|-------------------|
| BFS (Busca em Largura) | O BFS assume que todas as conexões têm o mesmo peso. No LinkGraph, isso ignoraria a lógica de afinidade profissional e entregaria caminhos menos relevantes. |

[cite_start]**Limitações no contexto do problema:** [cite: 21]  
O algoritmo de Dijkstra não suporta arestas com pesos negativos. No entanto, para o domínio de redes profissionais, essa limitação é irrelevante, pois a afinidade entre pessoas é sempre representada por valores positivos.

[cite_start]**Referência bibliográfica:** [cite: 22, 24]  
CORMEN, T. H. et al. **Algoritmos: teoria e prática**. 3. ed. Rio de Janeiro: Elsevier, 2012.

---

## 2. Arquitetura em Camadas

[cite_start]![Diagrama de arquitetura](./docs/arquitetura_e2.png) [cite: 25]

### [cite_start]Descrição das camadas [cite: 25]

| Camada | Responsabilidade | Artefatos principais |
|--------|-----------------|----------------------|
| Apresentação (UI/CLI) | [cite_start]Interação direta com o usuário via terminal (entrada de IDs e exibição de resultados). [cite: 26] | `main.py`, `cli_handler.py` |
| Aplicação (Service) | [cite_start]Orquestração do fluxo de dados e execução das regras de negócio do sistema. [cite: 27] | `networking_service.py` |
| Domínio (Core) | [cite_start]Contém as estruturas de dados fundamentais (Grafo, Nós) e a lógica pura do algoritmo. [cite: 28] | `graph.py`, `node.py`, `dijkstra.py` |
| Infraestrutura (I/O) | [cite_start]Responsável pela leitura e escrita de arquivos físicos (JSON) e persistência. [cite: 29] | `json_reader.py`, `usuarios.json` |

---

## [cite_start]3. Estrutura de Diretórios [cite: 30, 31]