<template>
    <div>
   <section>
       <h1 class="title is-1">
          Register
        </h1>
     <b-field label="Name">
       <b-input v-model="request.name"/> </b-input>
      </b-field>

      <b-field label="Roll number">
       <b-input v-model="request.reg_no"  maxlength="9" minlength="9"/> </b-input>
      </b-field>

      <b-field label="Email">
       <b-input type="email" v-model="request.email"/> </b-input>
      </b-field>

      <b-field label="Phone">
       <b-input v-model="request.ph_no" maxlength="10" minlength="10" /> </b-input>
      </b-field>

      <b-field label="Address">
       <b-input v-model="request.address" /> </b-input>
       </b-field>

      <b-field label="Password">
       <b-input v-model ="request.password" type="password" maxlength="16"/> </b-input>
       </b-field>

      <b-field label="Confirm Password" :type="{'is-danger': !passwordSame}"> </b-input>
       <b-input v-model="repeatpassword" type="password" maxlength="16"/> </b-input>
       </b-field>

     <a href = "/home_page"><b-button type="is-link" v-on="redirect"> Signup </b-button> </a>
      
   </section>
   </div>
</template>

<script>
export default {
  data() {
    return {
      repeatpassword: '',
      errormssg: '',
      signupFailed: false,
      request:{
        name: '',
        reg_no:'',
        email: '',
        ph_no: '',
        password: '',
        address: ''
      },
      response:{
        success:false,
        message:''
      }
    }
  },
  computed:{
    passwordSame(){
      return this.request.password===this.repeatpassword
    }
  },
  methods: {
    async signup() {
      if(this.request.name=== ''){
      this.errormssg=="Name can't be empty"
      this.signupFailed=true
      return
    }else if(this.request.email===''){
      this.errormssg=="Email can't be empty"
      this.signupFailed=true
    }else if(this.request.reg_no=== ''){
      this.errormssg=="userid can't be empty"
      this.signupFailed=true
      return
    }else if(this.request.password=== ''){
      this.errormssg=="Password can't be empty"
      this.signupFailed=true
      return
    }else if(!this.passwordSame){
      this.errormssg=="Please Renter the password"
      this.signupFailed=true
      return
    }else {
      this.errormssg==""
      this.signupFailed=true
    }
    
    }
  }
};
</script>