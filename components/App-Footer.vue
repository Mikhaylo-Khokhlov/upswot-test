<template>
  <footer class="footer">
    <div class="footer-top">
      <img class="footer-top-logo" src="~assets/img/logo.svg" alt="logo" />
      <div class="footer-top-block">
        <a
          v-for="item in links"
          :key="item.id"
          class="footer-top-link"
          :href="item.link"
          >{{ item.link }}</a
        >
      </div>
    </div>
    <p class="footer-copy">
      Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal
      Opportunity Lender.
    </p>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      links: [
        { id: 1, link: 'Terms & Conditions' },
        { id: 2, link: 'Privacy' },
        { id: 3, link: 'Notice at Collection' },
        { id: 4, link: 'CA Privacy Hub' },
        { id: 5, link: 'Contact Us' },
        { id: 6, link: 'Sitemap' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  padding: 30px 377px;
  background-color: var(--primary-color);
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    padding: 30px 15px;
  }
  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    padding: 30px 15px;
  }

  @media screen and (min-width: 1440px) {
    padding: 30px 200px;
  }

  &-top {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    margin-bottom: 60px;

    @media screen and (max-width: 1024px) {
      display: block;
    }

    ::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      left: 0;
      top: 65px;

      background-color: var(--primary-white);
    }

    &-logo {
      width: 56px;
      height: 35px;
      margin: 0;

      @media screen and (max-width: 1024px) {
        display: block;
        margin-bottom: 50px;
      }
    }

    &-link {
      font-weight: 500;
      font-size: 16px;
      line-height: 1.6;
      color: var(--primary-white);

      &:not(:last-child) {
        margin-right: 20px;
      }
    }

    &-block {
      margin-left: auto;
    }
  }

  &-copy {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.6;
    color: var(--primary-white);
  }
}
</style>
