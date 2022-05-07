<template>
  <Header>
    <div class="wrapper">
      <div class="navigation">
        <div class="navigation__left">
          <NuxtLink to="/">
            <img class="logo" src="./../static/logo.svg" alt="logo">
          </NuxtLink>
          <ColorModePicker />
        </div>
        <nav>
          <ul>
            <li>
              <NuxtLink to="/projects">
                work
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">
                about
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact">
                contact
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="navigation__right">
          <div class="socials">
            <a target="_blank" href="https://github.com/Benjampo"><img src="./../static/icons/github.svg" alt="linkedin"></a>
            <a target="_blank" href="https://www.linkedin.com/in/benjamin-porchet-701ba1148/"><img src="./../static/icons/linkedin.svg" alt="github"></a>
          </div>
          <div class="languages">
            <p>Francais</p>
          </div>
        </div>
      </div>
    </div>
  </Header>
</template>
<script>
import ColorModePicker from '@/components/ColorModePicker'

export default {
  components: {
    ColorModePicker
  }
}
</script>
