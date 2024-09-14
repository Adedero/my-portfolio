<script setup>
const years = new Date().getFullYear() - 2020;
</script>

<template>
  <section id="about-me" class="">
    <SectionHeader text="About Me" />
    <div class="mt-4">

      <p>Hi, it's me again!</p>
      <p>
        {{ years }} years ago when the COVID-19 pandemic left everyone stuck indoors for months, I decided to pick up
        web development as a skill. I was two years into my B.Tech degree in Computer Science and I felt I hadn't learnt
        enough &mdash; I craved for something more.
      </p>

      <br>

      <p>
        My journey in the field of web development has been an amazing one. Sometimes, I feel overwhelmed because
        there's so much more to learn and unpack. But I have come to a level where I am quite confident in myself and my
        abilities as a web developer. Whether I'm architecting smooth front-end interactions or building rock-solid
        back-end systems, I
        thrive on finding elegant solutions to complex problems. I love getting into the details, whether it's
        optimizing
        database queries, refining UI/UX, or ensuring a bulletproof security setup with features like two-factor
        authentication.
      </p>

      <br>


      <p>
        My toolkit spans frameworks like Vue, React, Nuxt.js, and Node.js, but my real skill lies in bringing it all
        together — creating applications that are as performant as they are polished. I build with scalability in mind,
        without losing sight of the small touches that make software intuitive and delightful to use.
      </p>

      <br>

      <p>
        But let's be honest — life isn't all about code. When I'm not developing, you'll find me composing classical music
        (because creativity flows in more ways than one) or writing stories that dive into the imagination. My love for
        both code and art gives me a unique perspective, making my work as much about craft as it is about engineering.
      </p>

      <br>

      <p>
        Let's build something amazing &mdash; both in code and beyond!
      </p>
    </div>
  </section>
</template>