<template>
  <div>
    <div class="form">
      <form @submit.prevent="onSubmitLogin">
        <div class="form-block">
          <div class="text-field__wrapper">
            <label for="name" class="label"> Name </label>
            <div class="text-field">
              <input
                id="name"
                ref="login"
                v-model.trim="name"
                required
                autocomplete="off"
                type="text"
                class="text-field__input"
                :class="{ invalid: nameValid }"
                pattern="[a-zA-Z]+"
                @input="validName"
                @focus="validName"
              />
              <div v-show="nameValid" class="error">
                <img
                  class="error-icon"
                  src="~/assets/img/error.svg"
                  alt="error icon"
                />
                <span class="error-text">{{
                  name === ''
                    ? 'Enter your name'
                    : 'The name must contain only letters'
                }}</span>
              </div>
            </div>
          </div>
          <div class="text-field__wrapper">
            <label for="password" class="label"> Password </label>
            <div class="text-field">
              <input
                id="password"
                ref="password"
                v-model.trim="password"
                required
                autocomplete="off"
                type="password"
                class="text-field__input"
                :class="{ invalid: passwordValid }"
                pattern="^[0-9]+$"
                @input="validPassword"
                @focus="validPassword"
              />
              <div v-show="passwordValid" class="error">
                <img
                  class="error-icon"
                  src="~/assets/img/error.svg"
                  alt="error icon"
                />
                <span class="error-text">{{
                  !password
                    ? 'Enter your password'
                    : 'Password must contain only numbers'
                }}</span>
              </div>
            </div>
          </div>
          <button class="form-btn" type="submit">login</button>
          <a class="forgot" href="">Forgot Password</a>
        </div>

        <button type="button" class="register">Register now</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      name: '',
      nameValid: null,
      password: '',
      passwordValid: null,
    }
  },

  methods: {
    ...mapActions({ userLogin: 'users/userLogin' }),
    validName() {
      const { login } = this.$refs
      login.validity.valid ? (this.nameValid = false) : (this.nameValid = true)
    },
    validPassword() {
      const { password } = this.$refs
      password.validity.valid
        ? (this.passwordValid = false)
        : (this.passwordValid = true)
    },
    onSubmitLogin() {
      const standartName = this.name.toLowerCase()
      const formData = { name: standartName, password: this.password }
      this.userLogin(formData)
      this.$emit('submit-form')
      this.name = ''
      this.password = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  width: 481px;
  padding-top: 40px;

  box-sizing: border-box;
  background-color: var(--primary-white);
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 1024px) {
    width: 290px;
  }

  &-block {
    padding-left: 30px;
    padding-right: 30px;
    margin-bottom: 23px;

    @media screen and (max-width: 1024px) {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  &-btn {
    margin-bottom: 20px;
    width: 421px;
    height: 53px;
    background-color: #0076c0;
    text-transform: uppercase;
    font-size: 25px;
    line-height: 1.16;
    color: var(--primary-white);
    border: unset;

    @media screen and (max-width: 1024px) {
      width: 260px;
    }

    &:hover,
    &:focus {
      border: 2px solid #0076c0;
      background-color: var(--primary-white);
      color: #0076c0;
    }
  }

  .forgot {
    font-size: 20px;
    line-height: 1.15;
    color: #056dae;
    text-align: center;
    display: block;
  }

  .register {
    width: 100%;
    padding-top: 17px;
    padding-bottom: 17px;
    border: unset;
    background-color: #f6f6f6;
    font-size: 25px;
    line-height: 1.16;
  }
}
.label {
  margin-bottom: 7px;
  margin-left: 1px;
  display: block;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.16;
}

.text-field {
  position: relative;

  &__wrapper {
    margin-bottom: 40px;
  }
  &__input {
    padding: 16px 15px;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.16;
    cursor: pointer;
    background-color: var(--primary-white);
    width: 421px;
    height: 53px;
    border: 1px solid #9a9a9a;

    @media screen and (max-width: 1024px) {
      width: 260px;
    }

    &:hover,
    &:focus {
      outline: none;
      border: 1px solid #101010;
    }

    // &:invalid {
    //   border: 1px solid #d60000;
    // }
    // &:valid {
    //   border: 1px solid #9a9a9a;
    // }
  }

  .error {
    position: absolute;
    left: 0;
    top: 58px;
    display: flex;
    align-items: center;

    &-icon {
      width: 11px;
      height: 11px;
      margin-right: 10px;
    }

    &-text {
      font-size: 16px;
      line-height: 1.19;

      color: #d60000;
    }
  }
  .invalid {
    border: 1px solid #d60000;
  }
}
</style>
