<template>
  <form>
    <h1 class = 'A'> <b>Owner Details </b></h1>
    Name : {{response.name}}
    </br>
    Email ID : {{response.email_id}}
    </br>
    Room Number : {{response.room_no}}
    </br>
    Phone Number : {{response.phone_no}}
  </form>
</template>

<script>
    export default {
        data() {
            return {
                response: {
                    name:'',
                    email_id: '',
                    room_no: '',
                    phone_no:''
                }
            }
        }
    }
</script>

<style>
    .A{
       font-size: 30px;
    }

</style>