<template>
  <div>
    <section class="headline">
      <span>{{ document.data.headline }}</span>
      <h1>{{ document.data.pageTitle }}</h1>
      <span>{{ document.data.Subline }}</span>
    </section>
    <section class="projects">
      <ul>
        <li>
          product
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
      document: {}
    }
  },
  async fetch () {
    this.document = await this.$prismic.api.getSingle('hompage')
    console.log(this.document)
  }
}
</script>
