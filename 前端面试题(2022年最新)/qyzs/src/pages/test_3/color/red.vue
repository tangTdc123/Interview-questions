<template>
  <div class="red" @click.stop="dianji" @dblclick="bianji1">
    <span>{{ num }}</span>
  </div>
</template>

<script>
export default {
  name: "red",
  data() {
    return {
      num: 0,
    };
  },
  mounted() {
    this.$bus.$on("redadd", this.addred);
  },
  methods: {
    dianji() {
      console.log("red");
    },
    bianji1(){
      this.$bus.$emit("greenadd", 'red');

    },
    addred(color) {
      switch (color) {
        case 'blue':
          this.num +=4;
          break;
        case 'green':
          this.num +=2;
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