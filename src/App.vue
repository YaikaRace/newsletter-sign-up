<template>
  <main class="font-body min-h-screen min-w-screen sm:bg-charcoal-gray sm:flex sm:justify-center sm:items-center">
    <success-component
      v-if="email"
      @dismissed="email = null"
      :email="email"
    />
    <subscribe-component
      v-else
      @subscribed="(v) => (email = v)"
    />
  </main>
  <footer class="text-xs text-center sm:bg-charcoal-gray sm:text-white">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" class="text-tomato">Frontend Mentor</a>. 
    Coded by <a href="https://www.frontendmentor.io/profile/YaikaRace" target="_blank" class="text-tomato">Yahir (Yaika Race)</a>.
  </footer>
</template>

<script>
  import SubscribeComponent from "./components/SubscribeComponent.vue";
  import SuccessComponent from "./components/SuccessComponent.vue";

  export default {
    name: "App",
    components: {
      SubscribeComponent,
      SuccessComponent,
    },
    data() {
      return {
        email: null,
      };
    },
  };
</script>
