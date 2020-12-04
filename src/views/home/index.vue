<template>
  <div class="home">
    <div class="home-answer">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          :label="`第${index+1}题`"
          :name="`No${index+1}`"
          v-for="(item, index) in questionsData"
          :disabled="tabDisabled"
          :key="index"
        >
          <h1 class="answer-subject">题目： {{item.subject}}</h1>
          <el-radio-group v-model="answer" size="small">
            <el-radio
              :label="index"
              border
              v-for="(option,index ) in item.options"
              :key="index"
            >{{index+1}}、{{option.answer}}</el-radio>
          </el-radio-group>
          <div class="answer-btn">
            <el-button @click="back(index)" :disabled="index==0">上一题</el-button>
            <el-button @click="next(index+2)" :disabled="index==4">下一题</el-button>
            <el-button @click="submit(index+1)">提交</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      questionsData: [], //题目数据
      activeName: "No1",
      tabDisabled: true,
      answer: ""
    };
  },
  created() {
    // console.log(this.$store.getters.stuInfo);
    // console.log(this.$store.state.questions.questions);
    console.log(this.questionBank);
    this.questionsFormat();
  },
  computed: {
    ...mapGetters(["stuInfo", "questionBank"])
  },
  methods: {
    questionsFormat() {
      //初始化题目
      for (let i = 0; i < 5; i++) {
        let randomNum = Math.floor(Math.random() * this.questionBank.total); //生成随机数
        console.log(randomNum);
        this.questionsData.push(this.questionBank.questions[randomNum]);
      }
      console.log(this.questionsData);
    },
    handleClick() {},
    back(index) {
      console.log(index);
      this.activeName = `No${index}`;
    },
    next(index) {
      this.activeName = `No${index}`;
    },
    submit(index) {
      this.$confirm(`是否要提交?当前进度${index}/5`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "提交成功！"
          });
          this.$router.push({ path: "/result" });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消提交！"
          });
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  .home-answer {
    height: 100%;
    width: 100%;
    padding: 100px;
    .answer-subject {
      font-size: 18px;
    }
    .answer-option {
      margin-left: 50px;
      margin-top: 20px;
    }
  }
}
</style>