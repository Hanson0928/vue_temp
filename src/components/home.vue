<template>
  <div>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
import { Tabbar, TabItem } from "mint-ui";

export default {
  name: "home",
  data() {
    return {
      selected: ""
    };
  },
  created(){
  
  },
  mounted() {
  },
  components: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
