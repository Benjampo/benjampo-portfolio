<template>
  <div class="wrapper">
    <div>
      <h1>Projet</h1>
      <span>Made for Greubel Forsey while working at maven</span>
      <img src="" alt="">
    </div>
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet ut enim, nibh praesent neque tempor, magna sit ac.
        Quam magna auctor praesent et eu vulputate. Velit ut at potenti habitant nulla adipiscing hendrerit eget. Nec consectetur
        diam mi diam dictum nec aliquet tortor quam. Congue feugiat placerat et morbi auctor phasellus. Ultricies fermentum a posuere cras
        integer enim purus, volutpat consectetur. Viverra et cursus justo augue venenatis vulputate dictumst. Fringilla malesuada enim pellentesque p
        orta tincidunt. Lorem at laoreet porttitor cras eget parturient nunc.
      </p>
      <h2>did</h2>
      <ul>
      </ul>
      <h2>tech</h2>
      <ul>
      </ul>
    </div>
    <a href="#">see website</a>
  </div>
</template>
<script>
export default {
  name: 'ProjectPage',
  async asyncData ({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID('project', params.uid)
    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }

}

</script>
