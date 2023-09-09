<template>
  <article class="flex font-body mx-auto min-h-screen w-11/12 relative items-center sm:bg-white sm:min-h-fit sm:rounded-[2rem] sm:max-w-[459px] sm:p-12 sm:block">
    <section class="-translate-y-24 sm:translate-y-0">
        <img
          src="../assets/images/icon-success.svg"
          alt="Success icon"
        />
        <div>
          <h1 class="font-bold my-4 mt-8 text-d-s-gray text-4xl sm:text-6xl">Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to
            <span class="font-bold">{{ email || "test@placeholder.com" }}</span
            >. Please open it and click the button inside to confirm your
            subscription
          </p>
        </div>
    </section>
    <button
      @click.prevent="$emit('dismissed')"
      class="bg-d-s-gray rounded-lg text-center text-white w-full p-4 bottom-8 absolute sm:bottom-auto sm:mt-8 sm:relative hover:bg-gradient-to-r hover:from-l-tomato hover:to-tomato"
    >
      Dismiss message
    </button>
  </article>
</template>

<script>
  export default {
    name: "SuccessComponent",
    props: ["email"],
  };
</script>
