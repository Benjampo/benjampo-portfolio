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
  data () {
    return {
      document: {}
    }
  },
  async fetch () {
    this.document = await this.$prismic.api.getSingle('about')
  }
}
</script>
