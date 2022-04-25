<template>
  <footer>
    <div class="wrapper">
      <a href="mailto:contact@benjampo.ch">contact@benjampo.ch</a>
      <div class="copyright">
        <NuxtLink to="/">
          <img class="logo" src="./../static/logo.svg" alt="logo">
        </NuxtLink>
        <span>&copy; Copyright {{ currentYear }}- Benjamin Porchet</span>
      </div>

      <ul>
        <li>
          linkedin
        </li>
        <li>
          github
        </li>
      </ul>
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
