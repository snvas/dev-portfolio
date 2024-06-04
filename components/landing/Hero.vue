<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="/assets/img/soraia2.png"
        alt="Soraia Novaes"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        Soraia Novaes
      </h1>
      <p class="text-lg mt-4 max-w-xl">
        Engenheira de Software pela 42 São Paulo.
        <wbr /> +10 anos de experiência gerenciando e desenvolvendo projetos de
        aplicações web com conhecimentos HTML 5, CSS 3, JavaScript,Tailwind,
        GIT, Docker e WordPress.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="https://wa.me/5511940062075"
          target="_blank"
          rel="noopener"
          >Entre em Contato</LandingLink
        >
        <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="https://github.com/snvas"
          target="_blank"
          >GitHub Repo</LandingLink
        >
      </div>
    </div>
  </main>
</template>
