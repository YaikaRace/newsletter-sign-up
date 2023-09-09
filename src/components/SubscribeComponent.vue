<template>
  <article class="sm:bg-white sm:rounded-[2rem] sm:shadow-d-s-gray sm:min-w-[680px] sm:max-h-[620px] sm:max-w-[920px] sm:grid sm:p-8 sm:pr-0 sm:shadow-2xl sm:gap-14 sm:grid-cols-2 sm:items-center ">
    <img
      src="../assets/images/illustration-sign-up-mobile.svg"
      alt="Illustration sign up mobile"
      class="object-cover w-full max-h-96 sm:hidden"
    />
    <section>
      <div class="mx-auto mt-8 text-charcoal-gray w-11/12">
        <h1 class="font-bold text-d-s-gray mb-4 tracking-tight text-4xl sm:text-5xl">
          Stay updated!
        </h1>
        <div>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul class="mt-4 pl-8">
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
        </div>
      </div>
      <div class="mx-auto mt-8 w-11/12">
        <div class="font-bold text-sm text-d-s-gray w-full relative">
          <label for="email">Email address </label>
          <span
            class="text-tomato right-0 absolute"
            v-if="error"
            >Valid email required</span
          >
        </div>
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          placeholder="email@company.com"
          @input="error = false"
          class="border-gray rounded-lg outline-none border-[1px] mt-2 mb-6 w-full p-4 px-6 placeholder:text-gray hover:border-d-s-gray"
          :class="{
            'placeholder:text-tomato text-tomato border-tomato bg-t-tomato':
              error,
          }"
        />
        <button
          type="submit"
          class="bg-d-s-gray rounded-lg font-bold text-white text-center mb-8 w-full p-4 hover:bg-gradient-to-r hover:from-l-tomato hover:to-tomato hover:shadow-xl hover:shadow-t-tomato"
          @click.prevent="validateEmail()"
        >
          Subscribe to monthly newsletter
        </button>
      </div>
    </section>
    <img src="../assets/images/illustration-sign-up-desktop.svg"
    alt="Illustration sign up desktop"
    class="hidden relative sm:h-full sm:object-cover sm:right-0 sm:w-11/12 sm:inline">
  </article>
</template>

<style lang="postcss" scoped>
  li {
    @apply mb-2 pl-2 relative;
  }
  li::before {
    content: url("../assets/images/icon-list.svg");
    @apply h-full pr-2 -left-8 align-text-top absolute;
  }
</style>

<script>
  export default {
    name: "SubscribeComponent",
    data() {
      return {
        email: null,
        error: false,
      };
    },
    methods: {
      validateEmail() {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //eslint-disable-line
        let isEmailValid = regex.test(this.email);
        if (isEmailValid) {
          this.error = false;
          this.$emit("subscribed", this.email);
        } else {
          this.error = true;
        }
      },
    },
  };
</script>
