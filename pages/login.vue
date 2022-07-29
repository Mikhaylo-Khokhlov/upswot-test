<template>
  <div class="login">
    <div class="login-hero">
      <img class="login-hero-logo" src="~assets/img/logo.svg" alt="logo" />
    </div>
    <div class="login-bg">
      <h1 class="login-bg-title">Welcome to <br />Business Analytics Online</h1>
    </div>
    <div class="login-desc">
      <div class="login-desc-info">
        <p class="login-desc-info-title">
          <span class="login-desc-info-title-bold">Business Analytics</span> — a
          new, convenient tool for managing and forecasting your business
          performance, which will help analyze your own finances and cash flows,
          visualize your reporting, business processes, KPI's
        </p>
        <div class="sub" v-for="item in listDescData" :key="item.id">
          <img class="sub-icon" :src="item.src" alt="check" />
          <div>
            <h2 class="sub-title">{{ item.title }}</h2>
            <p class="sub-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    <MainForm v-if="isLogin" class="login-form" @submit-form="verifyUser" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MainForm from '~/components/Main-Form'

export default {
  name: 'LoginPage',
  components: { MainForm },
  data() {
    return {
      listDescData: [
        {
          id: 1,
          title: 'Interactive Reporting',
          src: `${require(`~/assets/img/check.svg`)}`,
          desc: 'In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.',
        },
        {
          id: 2,
          title: 'Automated data updates',
          src: `${require(`~/assets/img/check.svg`)}`,
          desc: 'The application automatically updates and structures the data in just 60 seconds, saving you time and money.',
        },
        {
          id: 3,
          title: 'Data Security',
          src: `${require(`~/assets/img/check.svg`)}`,
          desc: 'The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.',
        },
      ],
    }
  },
  watch: {
    getLoginError(val) {
      if (val) {
        alert('User is not found. Check the entered data.')
      }
    },
  },

  computed: {
    ...mapGetters({
      getUser: 'users/getUser',
      getLoginError: 'users/getLoginError',
    }),
    isLogin() {
      if (localStorage.user) {
        return false
      } else {
        return true
      }
    },
  },

  methods: {
    verifyUser() {
      if (this.getUser.name) {
        this.$router.push('/todo')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  &-bg {
    padding-top: 215px;
    padding-left: 371px;
    padding-bottom: 70px;
    background-image: url('~/assets/img/bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    box-sizing: border-box;

    @media screen and (max-width: 1024px) {
      padding-left: 15px;
      padding-top: 15px;
      padding-bottom: 0;
    }
    @media screen and (min-width: 1440px) {
      padding-top: 160px;
      padding-left: 200px;
    }

    &-title {
      font-size: 55px;
      font-weight: 400;
      line-height: 1.6;
      color: var(--primary-white);

      @media screen and (max-width: 1024px) {
        font-size: 20px;
      }
    }
  }

  &-desc {
    padding-left: 380px;
    padding-top: 40px;
    padding-bottom: 40px;

    @media screen and (max-width: 1024px) {
      padding-left: 15px;
      padding-top: 500px;
    }
    @media screen and (min-width: 1440px) {
      padding-left: 200px;
    }

    &-info {
      max-width: 664px;

      &-title {
        margin-bottom: 15px;
        font-size: 16px;
        line-height: 1.6;
        color: var(--primary-color);

        &-bold {
          font-weight: 500;
        }
      }
    }
  }

  .sub {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
    display: flex;

    &-icon {
      margin-right: 15px;
      margin-top: 4px;
      width: 23px;
      height: 17px;
    }

    &-title {
      margin-bottom: 10px;
      font-weight: 500;
      font-size: 16px;
      line-height: 1.6;
    }

    &-desc {
      font-size: 14px;
      line-height: 1.6;
    }
  }

  &-form {
    position: absolute;
    left: 1067px;
    top: 424px;
    transform: none;

    @media screen and (max-width: 1024px) {
      left: 50%;
      top: 245px;
      transform: translateX(-50%);
    }
    @media screen and (min-width: 1440px) {
      left: 920px;
      top: 300px;
    }
  }

  &-hero {
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 377px;
    padding-right: 0;
    background: linear-gradient(180deg, #00a9e7 0%, #005b9f 100%);

    @media screen and (max-width: 1024px) {
      padding-left: 15px;
      padding-right: 15px;
    }

    &-logo {
      width: 103px;
      height: 66px;
      margin: 0;

      @media screen and (max-width: 1024px) {
        padding-left: 15px;
        margin: 0 auto;
      }
    }
  }
}
</style>
