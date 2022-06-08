<template>
  <div id="main_manage" style="height: 100%; width: 100%">
    <div class="navigate">
      <img src="../../statics/img/logo.png" />
      <div class="nav">
        <router-link tag="div" to="/test_1">
          <span>测试一</span>
        </router-link>
        <router-link tag="div" to="/test_2">
          <span>测试二</span>
        </router-link>
        <div>
          <span><span>其他 ^</span></span>
          <dl>
            <dt>
              <router-link tag="div" to="/test_3">
                <span>测试三</span>
              </router-link>
            </dt>
            <dt>
              <router-link tag="div" to="/test_4">
                <span>测试四</span>
              </router-link>
            </dt>
            <dt>
              <router-link tag="div" to="/test_5">
                <span>测试五</span>
              </router-link>
            </dt>
          </dl>
        </div>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//按照如图所示的样式和顺序，完善路由配置
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style scoped>
.navigate {
  position: relative;
  z-index: 999;
  background-color: rgb(45, 49, 58);
}
.nav {
  width: 100%;
  display: flex;
  justify-content: center;
}
.nav div {
  display: block;
  width: 150px;
  height: 100px;
}
.nav div span {
  line-height: 100px;
  text-align: center;
  display: block;
  color: white;
  cursor: pointer;
}
.nav div:last-child:hover {
  background: rgb(200, 159, 103);
}
.nav div:last-child:hover dl {
  background-color: rgb(45, 49, 58);
  display: block;
}
.nav div:last-child:hover dl dt:hover {
  background: rgb(200, 159, 103);
}

dl {
  width: 150px;
  display: none;
  margin-top: 0px;
  text-align: center;
}
</style>