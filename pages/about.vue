<template>
  <div>
    <h1>{{ document.data.title }}</h1>
    <p>{{ document.data.description }}</p>
    <h2>{{ document.data.techtitle }}</h2>
    <ul>
      <li v-for="tech in document.data.techstack " :key="tech.id">
        {{ tech.tech }}
      </li>
    </ul>
    <h2>{{ document.data.toolstitle }}</h2>
    <ul>
      <li v-for="tool in document.data.tools " :key="tool.id">
        {{ tool.tool }}
      </li>
    </ul>
    <PrismicLink :field="document.data.resume">My Link</PrismicLink>
  </div>
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
