<template>
  <main class="project">
    <div class="wrapper">
      <NuxtLink class="back" to="/">back</NuxtLink>
      <div class="project__presentation">
        <h1>{{ document.data.title }}</h1>
        <span>{{ document.data.headline }} <PrismicLink target="_blank" :field="document.data.partnerlink"> {{ document.data.partner }} </PrismicLink></span>
      </div>
      <div class="project__content">
        <PrismicImage :field="document.data.image" />
        <div class="project__content__text">
          <p>
            {{ document.data.description }}
          </p>
          <div class="project__content__lists">
            <div class="project__content__lists__item">
              <h2>{{ document.data['tasks-title'] }}</h2>
              <ul>
                <li v-for="task in document.data.tasks" :key="task.uid">
                  <span> {{ task.task }} </span>
                </li>
              </ul>
            </div>
            <div class="project__content__lists__item">
              <h2>{{ document.data.techstacktitle }}</h2>
              <ul>
                <li class="tech" v-for="tech in document.data.techstack" :key="tech.uid">
                  <PrismicLink target="_blank" :field="tech.link">{{ tech.title }}</PrismicLink>
                </li>
              </ul>
            </div>
          </div>
          <PrismicLink class="project__content__text__link" target="_blank" :field="document.data.link">See website</PrismicLink>
        </div>
      </div>
    </div>
  </main>
</template>
<script>

export default {
  name: 'ProjectPage',
  async asyncData ({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID('project', params.uid)
    console.log(document.data)
    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }

}

</script>
