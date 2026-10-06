const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
   {
       enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia. Qual é o seu primeiro pensamento?",
       alternativas: [
           {
               texto: "Isso é assustador!",
               afirmacoes: [
                   "Você ficou preocupado com os possíveis riscos da Inteligência Artificial.",
                   "Você percebeu que uma tecnologia tão poderosa precisa ser usada com responsabilidade."
               ]
           },
           {
               texto: "Isso é maravilhoso!",
               afirmacoes: [
                   "Você ficou animado com as possibilidades da Inteligência Artificial.",
                   "Você teve curiosidade para aprender mais sobre essa nova tecnologia.",
                   "Você imaginou como a IA poderia ajudar as pessoas no futuro."
               ]
           }
       ]
   },


   {
       enunciado: "A professora pediu que você escrevesse um trabalho sobre o uso da IA em sala de aula. Qual atitude você toma?",
       alternativas: [
           {
               texto: "Utilizar uma ferramenta de busca que usa IA para encontrar informações relevantes.",
               afirmacoes: [
                   "Você decidiu usar a IA como ferramenta de pesquisa.",
                   "Você utilizou a tecnologia para entender melhor o assunto.",
                   "Você conferiu as informações antes de colocá-las no trabalho."
               ]
           },
           {
               texto: "Escrever o trabalho com base em pesquisas, conversas e conhecimentos próprios.",
               afirmacoes: [
                   "Você preferiu realizar pesquisas de forma independente.",
                   "Você utilizou seus próprios conhecimentos para construir o trabalho."
               ]
           }
       ]
   },


   {
       enunciado: "Como a Inteligência Artificial pode impactar o trabalho do futuro?",
       alternativas: [
           {
               texto: "A IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
               afirmacoes: [
                   "Você acredita que a IA pode criar novas oportunidades de emprego.",
                   "Você acredita que a tecnologia pode ajudar as pessoas a desenvolver novas habilidades."
               ]
           },
           {
               texto: "É importante proteger as pessoas que podem perder seus empregos para máquinas.",
               afirmacoes: [
                   "Você se preocupou com os trabalhadores que podem perder seus empregos.",
                   "Você defendeu a importância de preparar as pessoas para as mudanças.",
                   "Você acredita que a inovação deve vir acompanhada de responsabilidade social."
               ]
           }
       ]
   },


   {
       enunciado: "Você precisa criar uma imagem que represente o que pensa sobre IA. E agora?",
       alternativas: [
           {
               texto: "Criar uma imagem utilizando uma plataforma de design, como o Paint.",
               afirmacoes: [
                   "Você escolheu criar a imagem manualmente.",
                   "Você valorizou sua própria criatividade e suas habilidades de desenho."
               ]
           },
           {
               texto: "Criar uma imagem utilizando um gerador de imagens de IA.",
               afirmacoes: [
                   "Você utilizou a IA para transformar sua ideia em uma imagem.",
                   "Você percebeu que a IA pode ajudar no processo criativo.",
                   "Você revisou o resultado para garantir que ele representasse sua ideia."
               ]
           }
       ]
   },


   {
       enunciado: "O trabalho de biologia ficou totalmente igual ao texto produzido pelo chat. O que você faz?",
       alternativas: [
           {
               texto: "Utilizar o texto inteiro, pois escrever comandos também é uma forma de contribuir.",
               afirmacoes: [
                   "Você aceitou utilizar o texto pronto produzido pelo chat.",
                   "Você percebeu que seria importante verificar se as informações estavam corretas."
               ]
           },
           {
               texto: "Revisar o trabalho e contribuir com as perspectivas pessoais do grupo.",
               afirmacoes: [
                   "Você defendeu a revisão do trabalho antes da entrega.",
                   "Você percebeu que as máquinas também podem cometer erros.",
                   "Você valorizou a contribuição e o conhecimento de todos os integrantes do grupo."
               ]
           }
       ]
   }
];




let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPergunta() {
   if(atual >= perguntas.length){
       mostraResultado();
       return;
   }
   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";
   mostraAlternativas();
}


function mostraAlternativas(){
   for(const alternativa of perguntaAtual.alternativas){
       const botaoAlternativas = document.createElement("button");
       botaoAlternativas.textContent = alternativa.texto;
       botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
       caixaAlternativas.appendChild(botaoAlternativas);
   }
}


function respostaSelecionada(opcaoSelecionada){
   const afirmacoes = opcaoSelecionada.afirmacao;
   historiaFinal += afirmacoes + " ";
   atual++;
   mostraPergunta();
}


function mostraResultado(){
   caixaPerguntas.textContent = "Em 2049...";
   textoResultado.textContent = historiaFinal;
   caixaAlternativas.textContent = "";
}


function respostaSelecionada(opcaoSelecionada){
   const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
   historiaFinal += afirmacoes + " ";
   atual++;
   mostraPergunta();
}
const botaoJogarNovamente = document.querySelector(".novamente-btn");
function mostraResultado() {
        caixaPerguntas.textContent = "Em 2049...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
        botaoJogarNovamente.addEventListener("click", jogaNovamente());
}
const nomes = ["Fernanda", "Giuliana", "Maria Eduarda", "Marcelo", "Amanda","Gustavo", "Gabriel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
const escola = "Alura Start";

console.log(`Eu estudo na ${escola}`);
{
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
                {
                        texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                        afirmacao: [
                                "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes.",
                                "Ainda acha que os meios de desenho tradicionais são mais eficazes para a criatividade, por isso vem estimulando pessoas em suas redes sociais a fazer pintura em aquarela."
                        ],
                },
                {
                        texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                        afirmacao: [
                                "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!",
                                "Compartilhou artes em redes sociais como forma de ensinar como se comunicar através da arte.",
                                "Percebeu que muitas pessoas têm dificuldade em expressar suas ideias desenhando e acha que a IA é capaz de empoderar essas pessoas a tirarem ideias do papel."
                        ],
                },
        ]
}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    if (opcaoSelecionada.proxima != undefined) {
        atual = opcaoSelecionada.proxima;
    } else {
        mostraResultado();
        return;
    }
    mostraPergunta();
}
