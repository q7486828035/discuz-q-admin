<template>
  <div class="login-container"
       @keyup.enter.native="handleLogin">
    <top-color v-show="false"></top-color>
    <div class="login-weaper animated bounceInDown">
      <div class="login-left">
        <div class="login-time">
          {{time}}
        </div>
        <img class="img"
             src="img/bg/logo.png"
             alt="">
        <p class="title">{{ $t('login.info') }}</p>
      </div>
      <div class="login-border">
        <div class="login-main">
          <h4 class="login-title">
            Discuz！Q管理后台
<!--            <top-lang></top-lang>-->
          </h4>
          <userLogin v-if="activeName==='user'"/>
          <thirdLogin v-else-if="activeName==='third'"/>

            <codeLogin v-else-if="activeName==='code'"/>
          <!--
           <faceLogin v-else-if="activeName==='face'"></faceLogin>
         -->
          <div class="login-menu">
            <a href="#"
               @click.stop="activeName='user'">{{ $t('login.userLogin') }}</a>
            <a href="#"
               @click.stop="activeName='code'" v-if="loginOpen.qcloud.qcloud_sms">{{ $t('login.phoneLogin') }}</a>
<!--            <a href="#"
               @click.stop="activeName='face'">{{ $t('login.faceLogin') }}</a>-->
            <a href="#"
               @click.stop="activeName='third'" v-if="loginOpen.passport.offiaccount_close">{{ $t('login.thirdLogin') }}</a>
          </div>
        </div>
      </div>
    </div>
    <div style="bottom: 10px;position: fixed;text-align: center;width: 100%;color: #000;">
      <p><a href="https://work100.com.cn" target="_blank">work100提供技术支持</a> 当前版本：{{v}}</p>
      <p>Copyright © 2020 work100.com.cn 版权所有</p>
    </div>
  </div>
</template>
<script>
import userLogin from "./userlogin";
import codeLogin from "./codelogin";
import thirdLogin from "./thirdlogin";
import faceLogin from "./facelogin";
import { mapGetters } from "vuex";
import { dateFormat } from "@/util/date";
import topLang from "@/page/index/top/top-lang";
import topColor from "@/page/index/top/top-color";
import {queryForum} from "@/api/site";
import {dataFormatter} from "@/util/tools";
import {setLocal} from "@/util/store";
export default {
  name: "login",
  components: {
    userLogin,
    codeLogin,
    thirdLogin,
    faceLogin,
    topLang,
    topColor
  },
  data () {
    return {
      time: "",
      activeName: "user",
      v: '1.0.0',
      loginOpen: {
        qcloud: {qcloud_sms: false},
        passport: {offiaccount_close: false},
      }
    };
  },
  created () {
    this.getTime();
    queryForum().then(res => {
      this.loginOpen = dataFormatter(res)
      setLocal('formData', this.loginOpen)
    })
    setInterval(() => {
      this.getTime();
    }, 1000);
  },
  mounted () { },
  computed: {
    ...mapGetters(["website"])
  },
  props: [],
  methods: {
    getTime () {
      this.time = dateFormat(new Date());
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/login.scss";
</style>
