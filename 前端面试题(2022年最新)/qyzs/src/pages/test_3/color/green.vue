<template>
  <div class="green" @click.stop.self="dianji" @dblclick.self="bianji1">
    <span>{{ num }}</span>
    <red></red>
  </div>
</template>

<script>
import red from "./red.vue";
export default {
  name: "green",
  components: {
    red,
  },
  data() {
    return {
      num: 0,
    };
  },
  mounted() {
    this.$bus.$on("greenadd", this.addgreen);
  },
  methods: {
    dianji() {
      console.log("green");
      this.$bus.$emit("redadd", 'green');
    },
    bianji1(){
      this.$bus.$emit("blueadd", 'green');

    },
    addgreen(color) {
        console.log(color)
      switch (color) {
        case 'blue':
            this.num+=2
          break;
        case 'red':
            this.num+=1
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
</style>