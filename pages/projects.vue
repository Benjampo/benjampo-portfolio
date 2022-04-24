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
  async asyncData ({ $prismic, error }) {
    const projects = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'project')
    )
    if (projects) {
      return { projects }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
