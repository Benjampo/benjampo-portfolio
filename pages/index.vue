<template>
  <main>
    <section class="headline">
      <div class="wrapper">
        <div class="headline__icons">
          <img class="icon" src="./../static/3d_assets/megaphone.png" alt="megaphone">
          <img class="icon" src="./../static/3d_assets/light.png" alt="ampoule">
          <img class="icon" src="./../static/3d_assets/coffee.png" alt="coffee">
        </div>
        <div class="headline__content">
          <span>{{ document.data.headline }}</span>
          <h1>{{ document.data.pageTitle }}</h1>
          <span>{{ document.data.Subline }}</span>
        </div>
      </div>
    </section>
    <section class="projects">
      <div class="wrapper">
        <ul>
          <li v-for="project in projects.results" :key="project.uid">
            <span> {{ project.data.title }} </span>
            <PrismicImage :field="project.data.image" />
          </li>
        </ul>
      </div>
    </section>
    <section class="partners">
      <div class="wrapper">
        <img class="icon" src="./../static/3d_assets/heart.png" alt="heart">
        <h2> {{ document.data.trustTitle }} </h2>
        <div class="partners__container">
          <ul>
            <li v-for="partner in document.data.partners" :key="partner.id">
              <PrismicImage :field="partner.image" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>
<script>

export default {
  name: 'IndexMain',
  data () {
    return {
      rellax: {
        speed: 3
      }
    }
  },
  async asyncData ({ $prismic, error }) {
    const document = await $prismic.api.getSingle('hompage')
    const projects = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'project')
    )
    if (projects && document) {
      return { projects, document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }

}
</script>
