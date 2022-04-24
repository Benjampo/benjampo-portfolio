<template>
  <div>
    <ul>
      <li v-for="project in projects.results" :key="project.uid">
        <span> {{ project.data.title }} </span>
        <PrismicImage :field="project.data.image" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'IndexMain',
  data () {
    return {
      projects: {}
    }
  },
  async fetch () {
    this.projects = await this.$prismic.api.query(
      this.$prismic.predicates.at('document.type', 'project')
    )
    console.log(this.projects)
  }
}
</script>
