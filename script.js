const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Depois de sair da escola, você se depara com uma nova tecnologia: um chat que pode responder a todas as suas perguntas e ainda criar imagens e áudios extremamente realistas. Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Isso é um pouco assustador!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é fantástico e inovador!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Com a descoberta dessa tecnologia chamada Inteligência Artificial, a sua professora de tecnologia decide que o próximo projeto da aula será sobre o uso da IA. No final da aula, ela pede um trabalho sobre como a IA pode ser aplicada em sala de aula. Qual é a sua abordagem?",
        alternativas: [
            {
                texto: "Utilizo uma ferramenta de pesquisa que usa IA para encontrar informações e apresento-as de forma clara e compreensível.",
                afirmacao: "afirmação"
            },
            {
                texto: "Escrevo o trabalho com base nas discussões com colegas, pesquisas na internet e meu próprio conhecimento sobre o tema.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após a conclusão do trabalho, a professora organiza um debate para entender a pesquisa e a escrita dos alunos. Durante o debate, o impacto da IA no futuro do trabalho é discutido. Como você se posiciona?",
        alternativas: [
            {
                texto: "Argumento que a IA pode abrir novas oportunidades de emprego e aprimorar habilidades humanas.",
                afirmacao: "afirmação"
            },
            {
                texto: "Expresso preocupação com o potencial de perda de empregos devido às máquinas e defendo a necessidade de proteger os trabalhadores.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "No final da discussão, você precisa criar uma imagem no computador que reflita sua visão sobre a IA. O que você faz?",
        alternativas: [
            {
                texto: "Crio a imagem usando um programa de design simples como o Paint.",
                afirmacao: "afirmação"
            },
            {
                texto: "Utilizo um gerador de imagens baseado em IA para criar a imagem.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você está trabalhando em um projeto de biologia em grupo que deve ser entregue na próxima semana. O grupo está um pouco atrasado e um dos membros usou a IA para gerar o trabalho, mas o resultado é idêntico ao texto gerado pelo chat. O que você faz?",
        alternativas: [
            {
                texto: "Considero que usar o texto gerado pela IA é aceitável e não vejo problema em entregar o trabalho dessa forma.",
                afirmacao: "afirmação"
            },
            {
                texto: "Embora a IA seja avançada, é importante revisar o trabalho e adicionar nossas próprias ideias e análises para garantir a qualidade.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal.trim();
    caixaAlternativas.textContent = "";
}

mostraPergunta();

