<script setup>
const features = [
  {
    title: "To-Do-List",
    description:
      "Um aplicativo para gerenciar tarefas diárias. Os usuários podem adicionar, remover e listar tarefas usando uma interface simples. As tarefas são adicionadas através de um campo de entrada e podem ser excluídas individualmente.",
    icon: "bx:list-ul",
	path: "/todolist"
  },
  {
    title: "Random Quote Generator",
    description:
      "Este projeto exibe uma citação aleatória de uma coleção pré-definida a cada vez que o usuário solicita uma nova citação. É útil para sites que desejam oferecer inspiração ou reflexão diária.",
    icon: "bx:refresh",
	path: "/randomquote"
  },
  {
    title: "Calculator",
    description:
      "Uma calculadora funcional que suporta operações básicas como adição, subtração, multiplicação e divisão. Este projeto demonstra a manipulação de eventos e o cálculo de expressões matemáticas.",
    icon: "bx:bxs-calculator",
	path: "/calculator"
  },
  {
    title: "Accordion UI",
    description:
      "Um componente de interface que permite expandir e retrair seções de conteúdo, ideal para FAQs ou para organizar informações detalhadas de forma compacta.",
    icon: "bx:expand-vertical",
	path: "/accordion"
  },
  {
    title: "Form Validation",
    description:
      "Um formulário que valida a entrada do usuário em tempo real, garantindo que todos os campos sejam preenchidos corretamente antes de permitir a submissão. Valida nomes, e-mails e senhas.",
    icon: "bx:bxs-check-square",
	path: "/form"
  },
  {
    title: "Password Generator",
    description:
      "Gera senhas aleatórias com base em critérios especificados pelo usuário, como comprimento e a inclusão de números ou símbolos. É útil para criar senhas fortes e seguras.",
    icon: "bx:bxs-check-shield",
	path: "/password"
  },
  {
    title: "Progress Steps",
    description:
       "Gera senhas aleatórias com base em critérios especificados pelo usuário, como comprimento e a inclusão de números ou símbolos. É útil para criar senhas fortes e seguras.",
    icon: "bx:bxs-skip-next-circle",
	path: "/steps"
  },
  {
    title: "Dad Joke Generator",
    description:
      "Utiliza uma API para buscar e exibir uma 'piada de pai' aleatória. Demonstração de como fazer chamadas de API e manipular respostas em uma aplicação web.",
    icon: "bx:bxs-game",
	path: "/dadjokes"
  },
  {
    title: "GitHub User Search",
    description:
      "Permite aos usuários buscar perfis no GitHub usando a API do GitHub. Exibe informações do perfil, incluindo repositórios, seguidores e mais.",
    icon: "bx:bxs-user",
	path: "/github"
  },
  {
    title: "Wikipedia Viewer",
    description:
      "Uma aplicação que permite aos usuários pesquisar artigos na Wikipedia e exibir resultados com links diretos para os artigos. Utiliza a API da Wikipedia para buscar e exibir dados.",
    icon: "bx:bxs-window-alt",
	path: "/wiki"
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0" id="projects">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
		Portfólio de projetos de desenvolvimento web com Vue.js    </h2>
    <p class="text-lg mt-4 text-slate-600">
		Esses projetos ilustram meu domínio em várias tecnologias essenciais da web, incluindo HTML, CSS, JavaScript, e o uso de APIs. Você encontrará desde aplicativos simples, como geradores de citações e listas de tarefas, até funcionalidades mais complexas, como validação de formulários e integração com APIs externas como a do GitHub e da Wikipedia.
    </p class="text-lg mt-4 text-slate-600">
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
       
		<h3 class="font-semibold text-lg"> <a :href="item.path" class="text-gray-500 hover:text-gray-900">{{ item.title }}</a></h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>