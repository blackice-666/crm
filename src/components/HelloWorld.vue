<template>
  <div class="hello">
    <el-container>
      <!-- 左侧选择菜单 -->
      <el-aside width="200px">
        <el-col :span="12">
          <el-menu
            :default-active="this.$router.path"
            router
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="5" disabled>
              <!-- <i class="el-icon-setting"></i> -->
              <span slot="title">CRM管理系统</span>
            </el-menu-item>
            <el-menu-item index="7">
              <i class="el-icon-s-data"></i>
              <span slot="title">销售总览</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/Input">添加用户</el-menu-item>
                <el-menu-item index="/Main">用户列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">订单管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">添加用户</el-menu-item>
                <el-menu-item index="1-2">用户列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">合同管理</span>
            </el-menu-item>
            <el-menu-item index="Main" >
              <i class="el-icon-user-solid"></i>
              <span slot="title">员工管理</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-setting"></i>
              <span slot="title">资源管理</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-container>
        <!-- 头部导航 -->
        <el-header>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="crm" name="first" >crm</el-tab-pane>
            <el-tab-pane label="工作处理" name="second">工作处理</el-tab-pane>
            <el-tab-pane label="官网" name="third">官网</el-tab-pane>
            <el-tab-pane label="用户" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </el-header>
        <!-- 显示内容 -->
        <el-main>
          <router-view></router-view>
        </el-main>
        <!-- 底部 -->
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Input from "./Input";
import Main from "./Main";
export default {
  name: "HelloWorld",
  data() {
    return {
      activeName: "first"
    };
  },
  components: {
    Input,
    Main
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    toinput() {}
  }
};
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 600px;
  border-right: 1px solid #ccc;
  .el-col-12 {
    width: 100%;
    .el-menu-item,
    .el-submenu__title {
      // height: 80px;
      // line-height: 80px;
      min-width: 0px;
    }
  }

  .el-menu {
    border-right: none;
  }
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 80px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>