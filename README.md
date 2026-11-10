<h1 align="center">Conversor de Moeda</h1>

<p align="center">
  Converte valores em Real (BRL) para Dólar (USD) e Euro (EUR) direto no navegador.
</p>

<p align="center">
  <a href="https://pedrosmarques.github.io/conversor/">
    <img src="https://img.shields.io/badge/Acessar%20o%20projeto-online-0A66C2?style=for-the-badge" alt="Acessar o projeto">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=flat&logo=githubpages&logoColor=white" alt="GitHub Pages">
</p>

<!-- Para mostrar um print da tela, salve a imagem como preview.png na raiz do projeto e apague as marcações de comentário desta linha:
<p align="center"><img src="preview.png" alt="Tela do conversor" width="700"></p>
-->

---

## Sobre o projeto

Este conversor foi uma **atividade acadêmica do Senai**, feita para praticar os fundamentos de **JavaScript**: ler o que o usuário digita, tomar decisões no código e mostrar o resultado na tela sem recarregar a página.

O usuário digita um valor em reais, escolhe a moeda e clica em **Converter**. O resultado aparece logo abaixo, com duas casas decimais.

## Sobre a cotação

> **Atenção:** as cotações deste projeto são **valores fixos**, definidos no código no momento da atividade. Elas **não acompanham o mercado**, então o resultado pode ser diferente da cotação real de hoje.

| Moeda | Cotação usada no projeto |
|---|---|
| Dólar (USD) | R$ 5,10 |
| Euro (EUR) | R$ 5,91 |

A próxima evolução do projeto é **integrar uma API de câmbio** para buscar a cotação real e atualizada das duas moedas.

## O que pratiquei

- **Manipulação do DOM:** captura dos valores do formulário com `document.getElementById` e exibição do resultado na página
- **Estrutura de decisão:** uso de `switch` para aplicar a cotação certa conforme a moeda escolhida
- **Tratamento de números:** conversão do texto digitado com `parseFloat` e formatação com `toFixed(2)`
- **Eventos:** execução da conversão a partir do clique no botão
- **Layout com CSS:** tela dividida em duas colunas, com imagem e formulário
- **Deploy:** publicação gratuita com GitHub Pages

## Próximos passos

- [ ] Buscar a cotação em tempo real com uma API de câmbio (usando `fetch`)
- [ ] Mostrar a data e a hora da última atualização da cotação
- [ ] Validar o campo para não converter valores vazios ou negativos
- [ ] Formatar os valores no padrão de cada moeda com `Intl.NumberFormat`

## Como rodar localmente

Não precisa instalar nada.

```bash
git clone https://github.com/pedroSmarques/conversor.git
cd conversor
```

Depois, é só abrir o arquivo `index.html` no navegador.

## Estrutura

```
conversor/
├── index.html       # Estrutura da página e formulário
├── styles.css       # Estilo e layout
├── script.js        # Lógica da conversão
├── dinheiro.jpg     # Imagem do lado esquerdo da tela
└── iconeMoeda.png   # Ícone da aba do navegador
```

## Autor

**Pedro Henrique Marques**
Estudante de Análise e Desenvolvimento de Sistemas (Unisuam) e do Técnico em Desenvolvimento de Sistemas (Senai Firjan)

[LinkedIn](https://www.linkedin.com/in/pedrosmarquess/) · [GitHub](https://github.com/pedroSmarques)v
