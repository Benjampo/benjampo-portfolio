<template>
  <div>
    <ColorModePicker />
    <section class="headline">
      <span>{{ document.data.headline }}</span>
      <h1>{{ document.data.pageTitle }}</h1>
      <span>{{ document.data.Subline }}</span>
    </section>
    <section class="projects">
      <ul>
        <li v-for="project in projects.results" :key="project.uid">
          <span> {{ project.data.title }} </span>
          <PrismicImage :field="project.data.image" />

        </li>
      </ul>
    </section>
    <section class="partners">
      <h2> {{ document.data.trustTitle }} </h2>
      <div class="partners__container">
        <ul>
          <li v-for="partner in document.data.partners" :key="partner.id">
            <PrismicImage :field="partner.image" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'IndexMain',
  data () {
    return {
      document: {},
      projects: {}
    }
  },
  async fetch () {
    this.document = await this.$prismic.api.getSingle('hompage')
    this.projects = await this.$prismic.api.query(
      this.$prismic.predicates.at('document.type', 'project')
    )
    console.log(this.document)
    console.log(this.projects.results)
  }
}
</script>
