<template>
  <div class="py-24 sm:py-32">
    <h2
      class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center pb-10"
    >
      Websites
    </h2>
    <div class="grid grid-cols-3 auto-cols-max gap-10">
     
        <div v-for="website in websites" :key="website.name" class="rounded shadow-lg">
			<a :href="website.link">
          <img class="w-full" :src="website.imageUrl" :alt="website.name" /></a>
          <div class="px-6 py-4">
            <h3
              class="text-base font-semibold leading-7 tracking-tight text-gray-900"
            >
              {{ website.name }}
            </h3>
            <p class="text-sm font-semibold leading-6 text-indigo-600">
              {{ website.stack }}
            </p>
          </div>
       
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const websites = ref([
  {
    name: "Criador de Aulas",
    stack: "SvelteKit",
    imageUrl: "https://empreendelab.com.br/criadoraulas.png",
	link: "https://criadordeaulas.com.br"
  },
  {
    name: "AB Tester",
    stack: "SvelteKit",
    imageUrl: "https://empreendelab.com.br/abtester.png",
	link: "https://abtester.com.br"
  },
  {
    name: "Propagandas em Revistas",
    stack: "SvelteKit",
    imageUrl: "https://empreendelab.com.br/propagandaemrevista.png",
	link: "https://propagandasemrevistas.com.br"
  },
  
  {
    name: "Treinamento de Equipes",
    stack: "SvelteKit",
    imageUrl: "https://empreendelab.com.br/treinamentoequipes.png",
	link: "https://treinamentodeequipes.com.br"
  },
  {
    name: "EmpreendeLab",
    stack: "SvelteKit",
    imageUrl: "https://empreendelab.com.br/empreendelab.png",
	link: "https://empreendelab.com.br"
  },
  {
    name: "Desafio do Código",
    stack: "Wordpress",
    imageUrl: "https://empreendelab.com.br/desafiocodigo.png",
	link: "https://desafiodocodigo.com.br"
  },
  {
    name: "My Trips",
    stack: "Next.js",
    imageUrl: "https://empreendelab.com.br/mytrips.png",
	link: "https://my-trips.soraianovaes.com.br"
  },
 
  
  {
    name: "CodeCamp",
    stack: "Jekyll, Ruby on Rails",
    imageUrl: "https://empreendelab.com.br/codecamp.png",
	link: "https://codecamp.com.br"
  },
  {
    name: "Soraia Novaes",
    stack: "Bootstrap",
    imageUrl: "https://empreendelab.com.br/soraianovaes.png",
	link: "https://soraianovaes.com.br"
  },
  /*
{
    name: "Tecnologias para Educação",
    stack: "Google Sites",
    imageUrl: "https://empreendelab.com.br/ebook.png",
	link: "https://sites.google.com/view/edtecnova/"
  },
  */
]);
</script>
