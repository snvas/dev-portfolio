<script setup>
const features = [

	{
    title: "Libft",
    description:
      "Este é o primeiro projeto como estudante da 42 e o trabalho é recodificar algumas funções da biblioteca padrão C, bem como algumas outras funções utilitárias que serão usadas durante todo o curso.",
    icon: "https://game.42sp.org.br/static/assets/achievements/libftm.png",
	path: "https://github.com/snvas/42course_libft"
  },
  {
    title: "Get Next Line",
    description:
      "Seja um arquivo, stdin ou até mesmo uma conexão de rede, você sempre precisará de uma forma de ler o conteúdo linha por linha. Este projeto trata de programar uma função que retorna uma linha lido de um descritor de arquivo.",
    icon: "https://game.42sp.org.br/static/assets/achievements/get_next_linem.png",
	path: "https://github.com/snvas/42course_get_next_line"
  },
  {
    title: "Printf",
    description:
      "ft_printf é um projeto que pede para criarmos a nossa própria versão da função printf(). Na linguagem de programação C, a função printf() é usada para imprimir os (valores de caractere, string, float, inteiro, octal e hexadecimal) na tela de saída, retornando o número de caracteres escritos.",
    icon: "https://game.42sp.org.br/static/assets/achievements/ft_printfm.png",
	path: "https://github.com/snvas/42course_printf"
  },
  {
    title: "Born2beroot",
    description:
      "Born2beroot é um projeto que exige a criação de uma máquina virtual com servidor SSH, regras de firewall e como bônus uma instalação de Wordpress e um serviço como FTP ou DNS. O Sistema Operacional pode ser Debian ou CentOS e um script de monitoramento com informações do sistema operacional deve ser executado a cada 10 minutos.",
    icon: "https://game.42sp.org.br/static/assets/achievements/born2berootm.png",
	path: "https://soraianovaes.com.br"
  },
  {
    title: "So_long",
    description:
      "SoLong é um projeto que exige a criação de um jogo 2D muito pequeno. Ele foi construído para fazer você trabalhar com texturas, sprites e alguns elementos de jogabilidade muito básicos usando MinilibX, uma API de programação X-Window (X11R6) simples em C, projetada para estudantes, adequada para iniciantes em X.",
    icon: "https://game.42sp.org.br/static/assets/achievements/so_longe.png",
	path: "https://github.com/snvas/42course_so_long"
  },
  {
    title: "Pipex",
    description:
      "Pipex é um projeto que exige que criemos um programa que simule o comportamento do shell pipe, recebendo um arquivo ou lendo do STDIN e redirecionando para uma sequência de comandos que serão gravados no arquivo de saída. ",
    icon: "https://game.42sp.org.br/static/assets/achievements/pipexe.png",
	path: "https://github.com/snvas/42course_pipex"
  },
  {
    title: "Push Swap",
    description:
       "Este projeto envolve a classificação de dados em uma pilha, com um conjunto limitado de instruções e o menor número de movimentos. Para que isso aconteça, você terá que manipular vários algoritmos de classificação e escolher a(s) solução(ões) mais apropriada(s) para classificação otimizada de dados.",
    icon: "https://game.42sp.org.br/static/assets/achievements/push_swape.png",
	path: "https://github.com/snvas/42course_push_swap"
  },
  {
    title: "Minishell",
    description:
      "O objetivo deste projeto é criar um shell simples, lidando com processos e file descriptors. Simplificando, um shell é a camada mais externa de comunicação entre o usuário e o sistema operacional. Permitindo-nos navegar e executar tarefas em linguagem legível por humanos.",
    icon: "https://game.42sp.org.br/static/assets/achievements/minishelle.png",
	path: "https://github.com/HcDuller/42_minishell"
  },
  {
    title: "Philosopher",
    description:
      "Philosophers é um projeto que exige que resolvamos o problema do Jantar dos Filósofos usando threads, processos e mutex. A parte obrigatória deve ser resolvida usando threads e mutex. A solução foi implementada por meio de uma thread de monitoramento, que verifica se algum filósofo morreu e avisa os demais para pararem (locking mutex).",
    icon: "https://game.42sp.org.br/static/assets/achievements/philosopherse.png",
	path: "https://github.com/snvas/42course_philosophers"
  },
  {
    title: "NetPratice",
    description:
      "NetPractice é um projeto que exige a configuração de redes de pequena escala. Numa rede, os dispositivos precisam se comunicar. Para isso foram criados protocolos e modelos de comunicação. Entre eles, está o modelo TCP/IP. TCP/IP é um conjunto de protocolos de comunicação. O nome vem de dois protocolos TCP (Transmission Control Protocol) e IP (Internet Protocol). Tem como objetivo padronizar todas as comunicações em rede, especialmente as comunicações na web.",
    icon: "https://game.42sp.org.br/static/assets/achievements/netpracticee.png",
	path: "https://github.com/snvas/42course_netpratice"
  },
  {
    title: "Cub3D",
    description:
      "Cub3D é um projeto de equipe que nos pede para criar um motor de jogo 3D com miniLibX. Este projeto é inspirado no mundialmente famoso jogo Wolfenstein 3D dos anos 90, que foi o primeiro FPS de todos os tempos. O objetivo deste projeto é aprofundar-se nos conceitos matemáticos por trás do algoritmo de projeção de raios, como cálculo de distâncias, altura, localização de sprites e campo de visão para criar uma projeção usando principalmente trigonometria.",
    icon: "https://game.42sp.org.br/static/assets/achievements/cub3de.png",
	path: "https://github.com/hde-oliv-42/cub3D"
  },
  {
    title: "CPP",
    description:
      "CPP é o nome do mini pool C++ em 42, um conjunto de várias listas de exercícios que vão desde conceitos básicos de orientação a objetos, como polimorfismo e herança, até modelos C++. C++ (dito C plus plus) é uma linguagem de computador orientada a objetos criada pelo notável cientista da computação Bjorne Stroustrop como parte da evolução da família de linguagens C. Ele foi desenvolvido como uma melhoria multiplataforma de C para fornecer aos desenvolvedores um maior grau de controle sobre a memória e os recursos do sistema.",
    icon: "https://game.42sp.org.br/static/assets/achievements/cppe.png",
	path: "https://github.com/snvas/cpp-module00"
  },
  {
    title: "Ft_containers",
    description:
      "Ft_containers é um projeto que requer a reimplementação de alguns dos principais contêineres da biblioteca de modelos padrão C++ (C++ STL Containers). Os containers a serem implementados incluindo bônus são o vetor, mapa, conjunto e pilha. Também precisamos implementar os iteradores quando disponíveis, iterator_traits e reverse_iterator.",
    icon: "https://game.42sp.org.br/static/assets/achievements/ft_containersm.png",
	path: "https://github.com/snvas/ft_containers_entrega"
  },
  {
    title: "Inception",
    description:
      "Inception é um projeto que exige a construção de uma infraestrutura de serviços utilizando Docker, orquestrada pelo Docker Compose. Na parte obrigatória, um container com nginx e somente ele deve estar acessível pela porta 443, expondo os serviços da rede docker interna para acesso público. O serviço nginx se conecta ao contêiner wordpress executando php-fpm que armazena os dados em um serviço mariadb na rede. Os dados do site wordpress e mariadb devem ser persistidos cada um em seu próprio volume.",
    icon: "https://game.42sp.org.br/static/assets/achievements/inceptionm.png",
	path: "https://github.com/snvas/inception"
  },
  {
    title: "Webserv",
    description:
      "Webserv é um projeto de grupo que exige a construção de um servidor HTTP usando I/O Multiplexing construída sobre um loop de eventos. Na parte obrigatória, iniciamos o servidor lendo um arquivo de configuração que pode ser baseado em Nginx, contendo informações como nome do host (ip/porta), nome do servidor, arquivo de índice, listagem de diretórios, redirecionamento de URL, localização (caminho do vhost) e alguns outros configurações.",
    icon: "https://game.42sp.org.br/static/assets/achievements/webserve.png",
	path: "https://github.com/snvas/42course_webserver"
  },
  {
    title: "Ft_Transcendence",
    description: "ft_transcendence é um projeto de equipe que exige a construção de uma plataforma online para jogar Pong. O backend deve ser construído em NestJS, o frontend em qualquer framework TypeScript de sua preferência e o banco de dados deve ser PostgreSQL. Para o frontend a opção escolhida foi o Svelte, devido ao seu desempenho e extensa documentação. No geral, a plataforma deve contar com sistema de classificação, canais de chat, mensagens privadas, edição de perfil, visualização do status dos usuários e adição de outros membros como amigos. O objetivo principal é jogar uma implementação do Pong, como se fosse 1972. Deveria haver algumas opções de personalização, como mapas personalizados ou power-ups, mas o usuário ainda deveria ser capaz de jogar a versão original. Finalmente, a estrutura do servidor deve ser conteinerizada usando docker e disponível com uma única chamada de: docker-compose up --build.", 
    icon: "https://game.42sp.org.br/static/assets/achievements/ft_transcendencee.png",
	path: "https://github.com/snvas/42course_fttranscendence"
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0" id="projects">
	<h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
		Projetos desenvolvidos na 42 São Paulo</h2>
    <p class="text-lg mt-4">
		Em minha formação pela École 42, desenvolvi um conjunto diversificado de projetos que atravessaram as fronteiras tradicionais da ciência da computação, enfrentando desde a reconstrução de funções de bibliotecas padrão até o desenvolvimento de aplicações complexas e sistemas integrados. Cada projeto foi cuidadosamente projetado para não apenas reforçar competências técnicas em linguagens como C e C++, mas também para instigar a resolução de problemas complexos, otimização de processos e a integração de múltiplas tecnologias. Esta experiência prática proporcionou uma compreensão profunda das exigências e nuances da programação de alto nível e do desenvolvimento de sistemas, preparando-me para enfrentar desafios tecnológicos complexos com soluções inovadoras e eficazes.
    </p class="text-lg mt-4">
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
		<a :href="item.path" class="hover:scale-125 transition-all">
      <div class="mt p-2 w-36 h-36 shrink-0">
        <img :src="item.icon"/>
	</div>
</a>
      <div>
       
		<h3 class="font-semibold text-lg"> <a :href="item.path" class="item-title">{{ item.title }}</a></h3>
        <p class="mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
  <UCard class="w-3/4 mx-auto mt-20 dark:bg-transparent">
	<template #header>
		<h2 class="text-2xl lg:text-3xl font-bold lg:tracking-tight">
		Habilidades adquiridas na 42</h2>
    </template>
  <div class="container flex flex-col gap-2">
		<p class="text-xl font-bold">Fundamentos de Programação:</p>
		<ul class="item-ul">
			<li>Aprofundamento no entendimento das linguagens C e C++.</li>
			<li>Recodificação de funções da biblioteca padrão e criação de funções utilitárias (Libft).</li>
		</ul>
		<p class="text-xl font-bold">Técnicas Avançadas de Programação:</p>
		<ul class="item-ul">
			<li>Desenvolvimento de algoritmos complexos para classificação otimizada de dados (Push Swap).</li>
			<li>Manipulação de múltiplas estruturas de dados e eficiência algorítmica.</li>
		</ul>
		<p class="text-xl font-bold"> Engenharia de Software:</p>
		<ul class="item-ul">
			<li>Construção de aplicações completas, como servidores HTTP e plataformas de jogos.</li>
			<li>Implementação de metodologias de software, como I/O Multiplexing (Webserv).</li>
		</ul>
		<p class="text-xl font-bold">Desenvolvimento Web e Aplicações em Rede:</p>
		<ul class="item-ul">
			<li>Programação de interfaces e aplicações web utilizando HTML, CSS, JavaScript, e frameworks modernos como Svelte (ft_transcendence).</li>
			<li>Configuração e gerenciamento de redes, entendimento profundo de TCP/IP (NetPractice).</li>
		</ul>
		<p class="text-xl font-bold">Gerenciamento de Sistemas e Infraestrutura:</p>
		<ul class="item-ul">
			<li>Criação e gestão de máquinas virtuais, servidores SSH, e regras de firewall (Born2beroot).</li>
			<li>Utilização de Docker para construção de infraestruturas de serviços e orquestração com Docker Compose (Inception).</li>
		</ul>
		<p class="text-xl font-bold">Desenvolvimento de Jogos e Gráficos Computacionais:</p>
		<ul class="item-ul">
			<li>Desenvolvimento de jogos 2D e entendimento de gráficos computacionais usando bibliotecas como MiniLibX (So_long, Cub3D).</li>
		</ul>
		<p class="text-xl font-bold">Multithreading e Concorrência:</p>
		<ul class="item-ul">
			<li>Gestão de múltiplos threads e processos, utilizando mutexes para resolver problemas de concorrência e sincronização, como o problema do Jantar dos Filósofos (Philosopher).</li>
		</ul>
		<p class="text-xl font-bold">Design de Software e Arquitetura de Sistemas:</p>
		<ul class="item-ul">
			<li>Implementação de arquiteturas de software robustas e design de sistemas complexos, como a criação de uma versão própria da função printf e a reimplementação de contêineres STL em C++.</li>
		</ul>
  </div>
  </UCard>
</template>