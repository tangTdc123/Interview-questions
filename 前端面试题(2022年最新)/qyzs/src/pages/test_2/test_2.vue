<template>
  <div class="test-content">
    <div class="left-require">
      <div>
        <img src="../../statics/img/form-list.jpg" alt="" />
        <h2>
          1、在右侧空白区域按照图片所示完成表单(可使用elementui)，并添加表单验证，点击保存时如果验证通过，将表单数据保存到vuex中
        </h2>
        <h2>2、在右侧空白区域以键值对的形似显示保存到vuex的数据</h2>
        <h2>
          3、给首页的 "跳转表单按钮"
          添加点击事件，点击后可跳转到本页面，并读取上一次验证通过并保存到的vuex中的数据，显示到表单
        </h2>
        <h2>
          4、给身份证号码、电话号码添加正则验证，毕业时间需比入学时间晚3年
        </h2>
        <h2 style="color: red">
          确认完成所有测试后需使用webpack将代码打包到文件夹dist
        </h2>
      </div>
    </div>

    <div class="right-content">
      <!--代码区域-->
      <el-form ref="ruleForm" :model="form" label-width="100px" :rules="rule">
        <el-form-item label="学生名称" prop="name">
          <el-input v-model="form.name" style="width: 350px"></el-input>
        </el-form-item>
        <el-form-item label="身份证号码" prop="Idnumber">
          <el-input v-model="form.Idnumber" style="width: 350px"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="number">
          <el-input v-model="form.number" style="width: 350px"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="民族" prop="nation">
          <el-select v-model="form.nation" placeholder="请选择民族">
            <el-option label="汉族" value="hanzu"></el-option>
            <el-option label="藏族" value="zangzu"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="入学时间" prop="enterTime">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.enterTime"
              style="width: 100%"
              format="yyyy - MM - dd"
              value-format="yyyy-MM-dd"
              @change="dateChange()"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="毕业时间" prop="leaveTime">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.leaveTime"
              style="width: 100%"
              format="yyyy - MM - dd"
              value-format="yyyy-MM-dd"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="所选课程" prop="subeject">
          <el-checkbox-group v-model="form.subeject">
            <el-checkbox label="语文" name="yuwen"></el-checkbox>
            <el-checkbox label="数学" name="shuxue"></el-checkbox>
            <el-checkbox label="英语" name="yingyu"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="备注" prop="desc">
          <el-input
            type="textarea"
            v-model="form.desc"
            style="width: 350px"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="onSubmit('ruleForm')" style="background: rgb(200, 159, 103)"
            >提交</el-button
          >
          <el-button>清空</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
//测试一：
//1、按照图片完成表单，并添加表单验证，点击保存时如果验证通过，将表单数据保存到vuex中
//2、在右侧空白区域以键值对的形似显示保存到vuex的数据
//3、给首页的 "跳转表单按钮" 添加点击事件，点击后可跳转到本页面，并读取vuex中的数据，显示到表单
import { mapState } from "vuex";

export default {
  data() {
    var checkInt = (rule, value, callback) => {
      setTimeout(() => {
        if (!/(^[1-9]\d*$)/.test(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value.length != 18) {
            callback(new Error("请输入18位的身份证号码"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
        var checknumber = (rule, value, callback) => {
      setTimeout(() => {
        if (!/(^[1-9]\d*$)/.test(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value.length != 11) {
            callback(new Error("请输入11位的电话号码"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var checkage = (rule, value, callback) => {
      setTimeout(() => {
        if (!/(^[1-9]\d*$)/.test(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (0 == value || value > 150) {
            callback(new Error("请输入正确的年龄"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var checkname = (rule, value, callback) => {
      setTimeout(() => {
        if (
          !/^[a-zA-Z]+$/.test(value) &&
          !/^[\u4e00-\u9fa5]{0,}$/.test(value)
        ) {
          callback(new Error("请输入正确的姓名"));
        } else {
          if (value.length < 1 || value.length >= 5) {
            callback(new Error("请输入正确的姓名"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var checkhanzi = (rule, value, callback) => {
      setTimeout(() => {
        if (!/^[\u4e00-\u9fa5]{0,}$/.test(value)) {
          callback(new Error("请输入正确的地址"));
        } else {
          if (value.length < 6) {
            callback(new Error("请输入正确的地址"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      pickerOptions: {},
      form: {
        name: "",
        Idnumber: "",
        number: "",
        sex: "",
        nation: "",
        enterTime: "",
        leaveTime: "",
        subeject: [],
        desc: "",
      },
      rule: {
        Idnumber: [
          { required: true, message: "请输入身份证号码", trigger: "blur" },
          { validator: checkInt, trigger: "blur" },
        ],
        number: [
          { required: true, message: "请输入电话号码", trigger: "blur" },
          { validator: checknumber, trigger: "blur" },

        ],
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { validator: checkname, trigger: "blur" },
        ],
        age: [
          { required: true, message: "请输入年龄", trigger: "blur" },
          { validator: checkage, trigger: "blur" },
        ],
        enterTime: [
          {
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        leaveTime: [
          {
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],

        subeject: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个科目",
            trigger: "change",
          },
        ],
        sex: [{ required: true, message: "请选择活动资源", trigger: "change" }],
        nation: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
      },
    };
  },
  mounted() {
    if (this.vname != "") {
      this.form.name = this.vname;
      this.form.Idnumber = this.vIdnumber;
      this.form.number = this.vnumber;
      this.form.sex = this.vsex;
      this.form.nation = this.vnation;
      this.form.enterTime = this.venterTime;
      this.form.leaveTime = this.vleaveTime;
      this.form.subeject = this.vsubeject;
      this.form.desc = this.vdesc;

    }
  },
  computed: {
    ...mapState([
      "vname",
      "vIdnumber",
      "vnumber",
      "vsex",
      "vnation",
      "venterTime",
      "vleaveTime",
      "vsubeject",
      "vdesc",
    ]),
  },
  methods: {
    onSubmit(ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          this.$store.dispatch("addfrom", this.form);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    dateChange() {
      let _this = this;
      this.pickerOptions = {
        disabledDate(date) {
          return (
            date.getTime() < new Date(_this.form.enterTime).getTime() - 86400000
          );
        },
      };
      if (this.form.leaveTime) {
        let enterTimeText = new Date(this.form.enterTime).getTime();
        let leaveTimeText = new Date(this.form.leaveTime).getTime();
        if (enterTimeText > leaveTimeText) {
          this.form.leaveTime = "";
        }
      }
    },
  },
};
</script>

<style scoped>
.right-content .el-form .el-form-item {
  margin: 15px 0;
}
</style>