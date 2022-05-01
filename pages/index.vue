<template>
  <main class="home">
    <div class="wrapper">
      <section class="headline">
        <div class="wrapper">
          <div class="headline__icons">
            <transition name="fade">
              <Icon v-rellax="{ speed: -3}" pic="coffee" />
            </transition>
              <Icon v-rellax="{ speed: 5}" pic="light" />
              <Icon v-rellax="{ speed: -1}" pic="megaphone" />
          </div>
          <div v-rellax="rellax" class="headline__content">
            <span>{{ document.data.headline }}</span>
            <h1> {{ document.data.pageTitle }} </h1>
            <span>{{ document.data.Subline }}</span>
          </div>
        </div>
      </section>
      <section class="projects">
        <div class="wrapper">
          <ul>
            <li v-for="project in projects.results" :key="project.uid">
              <NuxtLink :to="project.uid">
                <span > {{ project.data.title }} </span>
                <PrismicImage :field="project.data.image" />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </section>
      <section class="partners">
        <div class="wrapper">
          <Icon pic="pin" />
          <h2> {{ document.data.trustTitle }} </h2>
          <div class="partners__container">
            <ul>
              <li  v-for="partner in document.data.partners" :key="partner.id">
                <PrismicLink target="_blank" :field="partner.website">
                  <PrismicImage :field="partner.image" />
                </PrismicLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div class="button__container">
        <NuxtLink class="button" to="/contact">Me contacter</NuxtLink>
      </div>
    </div>
  </main>
</template>
<script>
import Icon from '@/components/Icon'

export default {
  name: 'IndexMain',
  components: { Icon },
  data () {
    return {
      rellax: {
        speed: 2
      }
    }
  },
  async asyncData ({ $prismic, params, error }) {
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
<style>
.fade-enter-active,
.fade-leave-active {
  transition: transform 2s ease;
}

.fade-enter-from,
.fade-leave-to {

  transform: translate(300);
}
</style>
