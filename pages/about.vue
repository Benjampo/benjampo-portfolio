<template>
  <main class="about">
    <div class="wrapper">
      <div class="about__image">
        <img src="./../static/character.png" alt="character">
      </div>
      <div class="about__content">
        <div class="about__content__text">
          <h1>{{ document.data.title }}</h1>
          <p>{{ document.data.description }}</p>
        </div>
        <div class="about__content__blocks">
          <div class="about__content__blocks__tech">
            <h2>{{ document.data.techtitle }}</h2>
            <ul>
              <li v-for="tech in document.data.techstack " :key="tech.id">
                <PrismicLink target="_blank" :field="tech.link">{{ tech.title }}</PrismicLink>
              </li>
            </ul>
          </div>
          <div class="about__content__blocks__tools">
            <h2>{{ document.data.toolstitle }}</h2>
            <ul>
              <li v-for="tool in document.data.tools " :key="tool.id">
                <PrismicLink target="_blank" :field="tool.link">
                  <PrismicImage :field="tool.tool" />
                </PrismicLink>
              </li>
            </ul>
          </div>
        </div>
        <PrismicLink target="_blank" :field="document.data.resumelink"> {{ document.data.resumetitle}} </PrismicLink>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'AboutPage',
  async asyncData ({ $prismic, error }) {
    const document = await $prismic.api.getSingle('about')
    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
