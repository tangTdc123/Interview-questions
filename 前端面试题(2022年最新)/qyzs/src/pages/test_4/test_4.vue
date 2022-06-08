<template>
  <div class="test-content test4">
    <div class="left-require">
      <div>
        <img class="" src="../../statics/img/table-list.jpg" alt="" />
        <h2>
          在右侧空白区域完成如图所示的表格,表格数据见参数table_data，不得使用其他插件或组件（包括elementUI）
        </h2>
        <h2>表格数据查询，根据查询条件筛选数组中的值，实现搜索功能</h2>
        <h2>性别列下拉筛选功能实现</h2>
        <h2>入学时间和毕业时间排序功能实现</h2>
        <h2 style="color: red">
          确认完成所有测试后需使用webpack将代码打包到文件夹dist
        </h2>
      </div>
    </div>

    <div class="right-content">
      <!--代码区域-->
      <div class="search">
        <span>姓名：</span
        ><input
          type="text"
          placeholder="请输入姓名模糊查询"
          v-model="searchName"
        />
        <span>电话号码：</span
        ><input
          type="text"
          placeholder="请输入电话号码查询"
          v-model="searchNumber"
        />

        <button @click="clear">清除</button>
        <button @click="search">查询</button>
      </div>

      <table border="1">
        <tr>
          <th>姓名</th>
          <th>电话号码</th>
          <th>
            <span>性别∨</span>
            <dl>
              <dt @click="mansort">男</dt>
              <dt @click="womensort">女</dt>
            </dl>
          </th>

          <th>身份证号码</th>
          <th @click="enterTimesort" style="cursor: pointer">入学时间⇅</th>
          <th @click="leaveTimesort" style="cursor: pointer">毕业时间⇅</th>
        </tr>
        <tr v-for="(table, index) in table_data" :key="index">
          <td>{{ table.name }}</td>
          <td>{{ table.phone }}</td>
          <td>{{ table.sex }}</td>
          <td>{{ table.id }}</td>
          <td>{{ table.start_date }}</td>
          <td>{{ table.end_date }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
//表格数据查询，根据查询条件筛选数组中的值，实现搜索功能
//下拉筛选功能实现
//排序功能实现
export default {
  name: "test_4",
  data() {
    return {
      searchName: "",
      searchNumber: "",
      entersort: 1,
      leavesort: 1,
      //表格数据
      table_data1: [],
      table_data: [
        {
          name: "张三",
          phone: "15222222222",
          sex: "male",
          id: "510000000000000000",
          start_date: "2018-12-14 09:00",
          end_date: "2022-12-14 09:00",
        },
        {
          name: "李四",
          phone: "15221232222",
          sex: "male",
          id: "510000000000000001",
          start_date: "2018-12-14 15:00",
          end_date: "2022-12-14 16:00",
        },
        {
          name: "韩梅梅",
          phone: "15222224562",
          sex: "female",
          id: "51000000004500000",
          start_date: "2020-12-14 09:00",
          end_date: "2024-12-14 09:00",
        },
        {
          name: "李雷",
          phone: "15222662222",
          sex: "male",
          id: "510000067000000000",
          start_date: "2017-12-14 09:00",
          end_date: "2020-12-14 09:00",
        },
        {
          name: "王雪",
          phone: "17822222222",
          sex: "female",
          id: "515400004500000000",
          start_date: "2016-12-14 09:00",
          end_date: "2019-12-14 09:00",
        },
      ],
    };
  },
  mounted() {
    this.table_data1 = this.table_data;
  },
  methods: {
    enterTimesort() {
      let that = this;
      this.table_data.sort(function (a, b) {
        if (that.entersort == 1) {
          return a.start_date < b.start_date ? 1 : -1;
        } else {
          return b.start_date - a.start_date ? 1 : -1;
        }
      });

      that.entersort == 1 ? (that.entersort = 0) : (that.entersort = 1);
    },
    leaveTimesort() {
      let that = this;
      this.table_data.sort(function (a, b) {
        if (that.leavesort == 1) {
          return a.end_date < b.end_date ? 1 : -1;
        } else {
          return b.end_date - a.end_date ? 1 : -1;
        }
      });

      that.leavesort == 1 ? (that.leavesort = 0) : (that.leavesort = 1);
    },
    mansort() {
      let arry = this.table_data1.filter((element) => {
        return element.sex == "male";
      });
      this.table_data = arry;
    },
    womensort() {
      let arry = this.table_data1.filter((element) => {
        return element.sex == "female";
      });
      this.table_data = arry;
    },
    search() {
      if (this.searchName && this.searchNumber) {
        console.log("1");
        let arry = this.table_data1.filter((element) => {
          return element.name.indexOf(this.searchName) != -1;
        });
        let arry1 = arry.filter((element) => {
          return element.phone.indexOf(this.searchNumber) != -1;
        });
        this.table_data = arry1;
      } else {
        if (this.searchName) {
          console.log("2");
          let arry = this.table_data1.filter((element) => {
            return element.name.indexOf(this.searchName) != -1;
          });
          this.table_data = arry;
        } else {
          console.log("3");
          let arry = this.table_data1.filter((element) => {
            return element.phone.indexOf(this.searchNumber) != -1;
          });
          this.table_data = arry;
        }
      }
    },
    clear(){
        this.table_data = this.table_data1
        this.searchName=''
        this.searchNumber=''
    }
  },
};
</script>

<style scoped>
.right-content table {
  position: relative;
  width: 700px;
}
.right-content table tr th,
.right-content table tr,
.right-content table tr td {
  border: none;
  height: 47px;
}
.right-content table tr dl {
  width: 56px;
  height: 49px;
  background: rgb(238, 226, 209);
  position: absolute;
  top: 49.5;
  left: 173px;
  display: none;
}
.right-content table tr dl dt {
  width: 56px;
  height: 24px;
  text-align: center;
}
.right-content table tr th:nth-child(3):hover dl {
  display: block;
}
.right-content table tr dl dt:hover {
  background: gray;
  cursor: pointer;
}
.right-content table tr:nth-child(odd) {
  background: rgb(255, 255, 255);
}
.right-content table tr:nth-child(even) {
  background: rgb(249, 245, 240);
}
.right-content table tr:first-child {
  background: rgb(238, 226, 209);
}
.right-content button {
  background: white;
  width: 60px;
  height: 30px;
  border-radius: 5px;
}
.right-content button:first-of-type {
  color: orange;
  margin-left: 90px;
  margin-right: 30px;
  border-color: orange;
}
.right-content button:last-of-type {
  background: rgb(216, 167, 100);
}
.search {
  margin: 10px 0;
}
</style>