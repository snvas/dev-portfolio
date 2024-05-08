<script setup>
const logos = [
  {
    name: "simple-icons:html5",
    title: "Html 5",
  },
  {
    name: "simple-icons:css3",
    title: "CSS 3",
  },
  {
    name: "simple-icons:javascript",
    title: "Javascript",
  },
  {
    name: "simple-icons:wordpress",
    title: "Wordpress",
  },
  {
    name: "simple-icons:vuedotjs",
    title: "Vue.js",
  },
  {
    name: "simple-icons:nuxtdotjs",
    title: "Nuxt.js",
  },
  {
    name: "simple-icons:svelte",
    title: "Svelte",
  },
  {
    name: "simple-icons:tailwindcss",
    title: "Tailwind CSS",
  },
  {
    name: "simple-icons:bootstrap",
    title: "Bootstrap",
  },
  {
    name: "simple-icons:c",
    title: "C",
  },
  {
    name: "simple-icons:cplusplus",
    title: "C++",
  },
  {
    name: "simple-icons:docker",
    title: "Docker",
  },
  {
    name: "simple-icons:vercel",
    title: "Vercel",
  },
  {
    name: "simple-icons:github",
    title: "Github",
  },
  {
    name: "simple-icons:cloudflarepages",
    title: "Cloudflare Pages",
  },
  {
    name: "simple-icons:amazonaws",
    title: "Amazon AWS",
  },
];
</script>

<template>
  <div class="mt-24 md:w-5/6 mx-auto">
    <h2 class="text-center text-slate-500">
      Experiência em desenvolvimento com as seguintes tecnologias
    </h2>
    <div
      class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap"
    >
      <div v-for="item of logos" class="flex gap-4 items-start">
        <button :title="item.title">
          <Icon class="h-8 md:h-14" :name="item.name" size="48" />
        </button>
      </div>
    </div>
  </div>
</template>
