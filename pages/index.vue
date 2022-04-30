<template>
  <main>
    <section class="headline">
      <div class="wrapper">
        <div class="headline__icons">
          <Icon pic="coffee" :rellax="{speed: -5}" />
          <Icon pic="light" :rellax="{speed: -5}" />
          <Icon pic="megaphone" :rellax="{speed: -5}" />
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
            <NuxtLink :to="project.uid">
              <span> {{ project.data.title }} </span>
              <PrismicImage :field="project.data.image" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>
    <section class="partners">
      <div class="wrapper">
        <Icon pic="pin" :rellax="{speed: -5}" />
        <h2> {{ document.data.trustTitle }} </h2>
        <div class="partners__container">
          <ul>
            <li v-for="partner in document.data.partners" :key="partner.id">
              <PrismicLink target="_blank" :field="partner.website">
                <PrismicImage :field="partner.image" />
              </PrismicLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <NuxtLink to="/contact">Me contacter</NuxtLink>
  </main>
</template>
<script>
import Icon from '@/components/Icon'

export default {
  name: 'IndexMain',
  components: { Icon },

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
  },
  mounted () {
    const gsap = this.$gsap
    gsap.from('.icon', { scale: 0, stagger: 0.05, ease: 'power2.easeOut' })
  }

}
</script>
