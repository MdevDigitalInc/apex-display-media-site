<template lang="pug">
  .apex-free-quote-form
    .apex-close-form
      apex-close-btn(styleType='red' v-on:toggle='closeForm')
    .apex-free-quote-heading.flex.flex-row.flex-wrap
      .apex-column-form.heading(v-if='!formSent')
        h2.u-bold
          |Free Quote
        p
          |Tell us what you are looking to accomplish. Not sure where to start?
          |Let our team assess your location and business goals to provide
          |expert advice on signage installations and content strategies.

    .apex-free-quote-form-container.flex.flex-row.flex-wrap
      .apex-column-form
        template(v-if='!formSent')
          form(id='contact_form' v-on:submit.prevent="onSubmit")
            .apex-form-group
              input(type='text' data-required name="name" id='name' v-model="name")
              label(for='name' :class='{active: name }') Name*
            .apex-form-group
              input(type='text' data-required name='company_name' id='company_name' v-model='companyName')
              label(for='company_name' :class='{active: companyName }') Company*
            .apex-form-group
              input(type='tel' name='phone' id='phone' v-model='phone')
              label(for='phone' :class='{active: phone }') Phone Number
            .apex-form-group
              input(type='email' data-required name='email' id='email' v-model='email')
              label(for='email' :class='{active: email }') Email*
            .apex-form-group
              textarea(name='message' data-required id='message' v-model='message') {{$t("contact.fields.message.label")}}
              label(for='message' :class='{active: message }') Tell us about your project*
            input(type='text' name='mdev-catchall' style='display: none' v-model="honeypot")
            .apex-form-group.flex.flex-row-rev.flex-wrap
              input(type='submit' class='apex-base-btn apex-black-btn' value='Contact Me' @click='onSubmit')
        template(v-else)
          h2.u-bold
            |Thank You
          p.thankyou-p( v-html="thankyou")
          img.thank-you( :src="loadImage('icons/icon-post-submit-white.svg')" alt="Thank you for submitting" )

</template>

<script>
  import axios from 'axios';

  import ApexCloseBtn from './apex-close-btn.vue';

  export default {
    name: 'ApexFreeQuoteForm',
    data (){
      return {
        name: null,
        companyName: null,
        phone: null,
        email: null,
        message: null,
        honeypot: null,
        formSent: true,
        thankyou: 'Your form has been submitted, you will receive your free quote shortly regarding your free quote. In the meantime check out our latest projects on <a href="TODO"title="Instagram">Instagram</a> and <a href="TODO" title="Facebook">Facebook</a>'
      };
    },
     components: {
    'apex-close-btn' : ApexCloseBtn
    },
    methods: {
      onSubmit(){

        this.$validate.clearErrors();

        let requiredFields = document.querySelectorAll('[data-required]');
        let email = document.querySelectorAll('input[type="email"]');

        let emailValid  = this.$validate.validateEmail(email, this.$t("validation.errors.email"));
        let requiredValid = this.$validate.validateFields(requiredFields, this.$t("validation.errors.form"));

        const payload = {
          name: this.name,
          companyName: this.companyName,
          phone: this.phone,
          email: this.email,
          message: this.message,
          mdevCatchall: this.honeypot
        };

        if ( requiredValid && emailValid ) {

          axios.post('https://formbucket.com/f/buk_0ikMPvwdy6daPwiNoK02I22n', payload)
          .then(res => {
            this.formSent = true;
          })
          .catch(error => console.log(error));
        } else {
          console.log('validation errors');
        }
      },
      validateEmail(event) {
        // Clear errors
        this.$validate.clearErrors();
        // Load error message..
        let error = this.$t("validation.errors.email");
        // Email Regex with up to 7 trailing chars for .digital TLD
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,7})+$/.test(event.target.value)){
          alertify.warning(error);
          event.target.classList.add('apex-error');
        }
      },
      closeForm() {
        this.$emit('toggle', true);
      }
    }
  };
</script>

<style lang="scss">

.apex-column-form {
  width: 90%;
  margin: 0 auto;

  @media #{$laptop-up} {
    width: 85%;
    //padding-left: 9%;
  }

  @media #{$tablet-only} {
    width: 85%;
    margin: 0 auto;
  }

  @media #{$portrait} {
    width: 100%;
  }

  @media #{$portrait} {
    .apex-base-btn {
      width: 100%;
    }
  }
}

.apex-free-quote-form {
  background-color: $apex-red;
  position: relative;

  h2,
  p {
    color: $white;
  }

  h2 {
    font-size: 35px;
    line-height: 1.5;
    margin-bottom: 10px;

    @media #{$tablet-up} {
      font-size: 50px;
    }
  }

  p,
  p:last-of-type {
    font-size: 16px;

    @media #{$tablet-up} {
      font-size: 20px;
    }

    @media #{$laptop-up} {
      margin-bottom: 10px;
    }

    @media #{$laptop-only} {
      font-size: 16px;
    }
  }

  @media #{$laptop-up} {
    height: 100vh;
  }

  @media #{$portrait} {
    .apex-close-btn {
      transform: scale(1.2);
    }
  }
}

.apex-free-quote-form-container,
.apex-free-quote-heading {
  width: 90%;
  margin: 0 auto;

  .apex-column {
    padding-left: 10%;
  }
}

.apex-free-quote-heading {
  padding-top: 60px;

  @media #{$tablet-only} {
    padding-top: 92px;
  }

  @media #{$laptop-up} {
    background-position: 0 center;
    padding-top: 73px;
    width: 85%;
    order: 1;
  }

  @media #{$laptop-only} {
    padding-top: 24px;

    h2 {
      font-size: 30px;
    }
  }
}

p:last-of-type {
  margin-bottom: 20px;
}

.apex-close-form {
  position: absolute;
  right: 0;
  top: 0;
  display: block;

  @media #{$laptop-up} {
    display: none;
  }
}

.apex-column .heading {
  @media #{$portrait} {
    /* stylelint-disable */
    width: 100%!important;
    /* stylelint-enable */
  }

  @media #{$phone-only} {
    p:last-of-type {
      margin-bottom: 30px;
    }
  }
}

.thank-you {
  width: 30%;
  margin-top: 35px;
}

.thankyou-p {
  width: 80%;

  @media #{$portrait} {
    width: 100%;
  }
  a {
    text-decoration: underline;
  }
}
</style>
