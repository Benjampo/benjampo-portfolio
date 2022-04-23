<template>
  <Header>
    <ColorModePicker />
    <div class="wrapper">
      <nav>
        <ul>
          <li>
            <NuxtLink to="/work">
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
