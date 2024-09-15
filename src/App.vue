<template>
  <main>
    <VHeader />

    <section class="grid justify-center py-5 px-5 md:px-0">
      <div class="md:w-[80dvw] lg:w-[70dvw] xl:w-[60dvw]">
        <VHero />
        <hr class="my-16 md:hidden">
        <AboutMe />
        <MySkills />
        <MyProjects />
        <MyExperience />
      </div>
    </section>
    <VFooter />
  </main>
</template>