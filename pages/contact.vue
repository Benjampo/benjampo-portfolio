<template>
  <main class="contact">
    <div class="wrapper">
      <div class="contact__title">
        <img class="icon" src="./../static/3d_assets/dark/chat.svg" alt="chat icon">
        <h1>{{ document.data.title }}</h1>
        <p>{{ document.data.headline }}</p>
      </div>
      <div class="contact__info">
        <h2><a href="mailto:contact@benjampo.ch">{{ document.data.email }}</a></h2>
        <p>{{ document.data.copy }}</p>
      </div>

    </div>
  </main>
</template>
<script>
export default {
  name: 'ContactPage',
  async asyncData ({ $prismic, error }) {
    const document = await $prismic.api.getSingle('contact')
    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
