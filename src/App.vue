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
