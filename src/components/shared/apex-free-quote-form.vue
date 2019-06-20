<template lang="pug">
  .apex-free-quote-form
    .apex-free-quote-heading.flex.flex-row.flex-wrap
      .apex-column
        h2.u-bold Free Quote
        p
          |Tell us what you are looking to accomplish. Not sure where to start?
          |Let our team assess your location and business goals to provide
          |expert advice on signage installations and content strategies.

    .apex-free-quote-form-container.flex.flex-row.flex-wrap
      .apex-column
        .apex-form-group
          input(type='text' name="name" id='name' v-model="name")
          label(for='name' :class='{active: name }') Name*
        .apex-form-group
          input(type='text' name='company_name' id='company_name' v-model='companyName')
          label(for='company_name' :class='{active: companyName }') Company*
        .apex-form-group
          input(type='tel' name='phone' id='phone' v-model='phone')
          label(for='phone' :class='{active: phone }') Phone Number
        .apex-form-group
          input(type='email' name='email' id='email' v-model='email')
          label(for='email' :class='{active: email }') Email*
        .apex-form-group
          textarea(name='message' id='message' v-model='message')
          label(for='message' :class='{active: message }') Message*
        .apex-form-group.flex.flex-row-rev.flex-wrap
          input(type='submit' class='apex-base-btn apex-black-btn' value='Contact Me')
</template>

<script>


  export default {
    name: 'ApexFreeQuoteForm',
    data (){
      return {
        name: null,
        companyName: null,
        phone: null,
        email: null,
        message: null
      };
    }
  };
</script>

<style lang="scss" scoped >

h2,
p {
  color: $white;
}

.apex-column {
  width: 95%;
}

.apex-free-quote-form {
  background-color: $apex-red;
  height: 100%;
}

.apex-free-quote-form-container,
.apex-free-quote-heading {
  width: 90%;
  margin: 0 auto;
  padding-left: 50px;
}

.apex-free-quote-heading {
  padding-top: 92px;
}

p:last-of-type {
  margin-bottom: 20px;
}




</style>