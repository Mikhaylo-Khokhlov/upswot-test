<template>
  <div class="container">
    <app-header />
    <main>
      <Nuxt />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/App-Header'
import AppFooter from '~/components/App-Footer'

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      fixed: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>
