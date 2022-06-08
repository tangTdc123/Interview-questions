<template>
  <div class="blue" @click="dianji">
    <span>{{ num }}</span>
    <green></green>
  </div>
</template>

<script>
import green from "./green.vue";
export default {
  name: "blue",
  components: {
    green,
  },
  data() {
    return {
      num: 0,
    };
  },
  mounted() {
    this.$bus.$on("blueadd", this.addblue);
  },
  methods: {
    dianji() {
      console.log("blue");
      this.$bus.$emit("greenadd", 'blue');
      this.$bus.$emit("redadd", 'blue');
    },
    addblue() {
      this.num +=1;
    },
  },
};
</script>

<style scoped>
</style>