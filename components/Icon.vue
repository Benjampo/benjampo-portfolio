<template>
  <img class="icon" :src="getImgUrl" alt="pic">
</template>
<script>
export default {
  name: 'IconSvg',
  props: ['pic'],
  data () {
    return {
      color: 'light',
      rellax: {
        speed: 3
      }
    }
  },
  computed: {
    getImgUrl () {
      return require('./../static/3d_assets/' + this.color + '/' + this.pic + '.svg')
    }

  }
}
</script>
