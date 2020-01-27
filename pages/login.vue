<template>
  <section>
    <h1 class="title is-3">
          Login
    </h1>
    <form class="column is-one-third" @submit.prevent="login">
      <b-field label="Roll no">
        <b-input v-model="request.reg_no" maxlength="9" minlength="9" /> </b-input>
      </b-field>

      <b-field label="Password" type="password">
        <b-input v-model="request.password" type="password"  maxlength="18"/> </b-input>
      </b-field>

      <button class="button is-primary">
              Login
      </button>
      <b-notification
        class="login-notification"
        type="is-warning"
        :active.sync="loginFailed"
        >
        Login failed. Please check your password or roll no.
      </b-notification>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loginFailed: false,
      request:{
        reg_no: '',
        password: ''
      },
      response:{
        success: true,
        message: '',
        reg_no: ''
      }
    };
  },
  methods: {
    async login() {
      const json = await this.$api.login(this.response)
      if(json.success) {
        this.loginFailed = false
        this.$router.push('/home_page')
      } else {
        this.loginFailed = true
      }
    }
  }
};
</script>