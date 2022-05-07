<template>
  <footer>
    <div class="wrapper">
      <div class="informations">
        <div class="navigation__left">
          <a href="mailto:contact@benjampo.ch">contact@benjampo.ch</a>
        </div>
        <div class="copyright">
          <NuxtLink to="/">
            <img class="logo" src="./../static/logo.svg" alt="logo">
          </NuxtLink>
          <span>&copy; Copyright {{ currentYear }}- Benjamin Porchet</span>
        </div>
        <div class="navigation__right">
          <div class="socials">
            <a target="_blank" href="https://github.com/Benjampo"><img src="./../static/icons/github.svg" alt="linkedin"></a>
            <a target="_blank" href="https://www.linkedin.com/in/benjamin-porchet-701ba1148/"><img src="./../static/icons/linkedin.svg" alt="github"></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
