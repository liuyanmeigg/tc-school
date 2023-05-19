<template>
  <div class="containter">
    <div class="top_wrap">
      <!-- 大背景图片 -->
      <el-image
        class="big_bg"
        src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
      />
      <!-- <embed
        id="clip_img"
        src=""
        type="image/svg+xml"
      /> -->
      <!-- 登录页面 -->
      <div class="top" ref="loginDiv">
        <div class="login_wrap">
          <img class="logo" src="@/assets/img/logo.png" />
          <div class="login_btn_wrap" ref="btn">
            <div class="login" @click="login">登录</div>
            <div class="login">注册</div>
          </div>
        </div>
      </div>

      <!-- 简介部分 -->
      <div class="introduce_wrap">
        <h1 class="name">Tshare</h1>
        <h3>高效率的问答，</h3>
        <h3>高质量的资源分享，出类拔萃的校园助手</h3>
        <div class="join_us">加入我们</div>
      </div>
      <!-- 白板部分 -->
      <div class="web_type">
        <h3>Tshare 致力于为师生提供</h3>
        <div class="trait">
          <span>方便</span>
          <span>快捷</span>
          <span>高效</span>
          <span>高质量</span>
        </div>
        <h4>的校园服务网站</h4>
      </div>
    </div>
    <!-- 图片内容区域 -->
    <div class="home">
      <!-- <div class="content-item">内容1</div> -->
      <div
        class="activebg fisrtbg"
        id="pic1"
        v-bind:style="{
          'background-position-x': positionX,
          'background-position-y': positionY1 + 'px'
        }"
      ></div>
      <div class="content-item">内容2</div>
      <div
        class="activebg secondbg"
        id="pic2"
        v-bind:style="{
          'background-position-x': positionX,
          'background-position-y': positionY2 + 'px'
        }"
      ></div>
      <div class="content-item">内容3</div>
      <div
        class="activebg thirdbg"
        id="pic3"
        v-bind:style="{
          'background-position-x': positionX,
          'background-position-y': positionY3 + 'px'
        }"
      ></div>
      <div class="content-item">内容4</div>
      <div
        class="activebg fourbg"
        id="pic4"
        v-bind:style="{
          'background-position-x': positionX,
          'background-position-y': positionY4 + 'px'
        }"
      ></div>
      <div class="foot">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/footer/index.vue';
export default {
  components: { Footer },
  data() {
    return {
      ratio: 0.05,
      positionX: '50%',
      positionY1: 30,
      positionY2: 100,
      positionY3: 150,
      positionY4: 200,

      Y1: 0,
      Y2: 0,
      Y3: 0,
      Y4: 0,
      titlePositon: 'static',
      titleColor: 'transparent',
      titleBorder: '0'
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.onload = () => {
      let pic1 = document.getElementById('pic1');
      let pic2 = document.getElementById('pic2');
      let pic3 = document.getElementById('pic3');
      let pic4 = document.getElementById('pic4');
      this.positionY1 = this.Y1 = pic1.offsetTop * this.ratio;
      this.positionY2 = this.Y2 = pic2.offsetTop * this.ratio;
      this.positionY3 = this.Y3 = pic3.offsetTop * this.ratio;
      this.positionY4 = this.Y4 = pic4.offsetTop * this.ratio;
    };
  },
  methods: {
    handleScroll() {
      //获取滚动时的高度
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.positionY1 = this.Y1 - scrollTop * this.ratio;
      this.positionY2 = this.Y2 - scrollTop * this.ratio;
      this.positionY3 = this.Y3 - scrollTop * this.ratio;
      this.positionY4 = this.Y4 - scrollTop * this.ratio;

      if (scrollTop > 900) {
        this.titlePositon = 'fixed';
        this.titleColor = '#fff';
        this.titleBorder = '1px solid #e5e5e5';
      } else {
        this.titlePositon = 'static';
        this.titleColor = 'transparent';
        this.titleBorder = '0';
      }
      console.log(scrollTop, 'scrollTop');
      // console.log(scrollTop)
      if (scrollTop > 300) {
        //滚动大于0的时候要做的操作
        this.$refs.loginDiv.style =
          'background:white;  box-shadow:#aaa 0px 0px 10px;';
        this.$refs.btn.style = 'color:black;';
      } else {
        this.$refs.loginDiv.style = '';
        this.$refs.btn.style = '';
      }
    },
    login() {
      this.$router.push('/home');
    }
  }
};
</script>

<style lang="less" scoped>
.containter {
  .top_wrap {
    position: relative;
    // position: absolute;
    // top: 0;
    .big_bg {
      width: 100%;
      height: 800px;
      z-index: -10;
      //   position: absolute;
      //   top: 0;
      //   right: 0;
      //   left: 0;
    }
    // 登录页面
    .top {
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      right: 0;
      .login_wrap {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin: auto;
        align-items: center;
        .logo {
          width: 150px;
          height: 60px;
        }
        .login_btn_wrap {
          display: flex;
          color: #fff;
          .login {
            text-decoration: none;
            font-size: 25px;
            width: 85px;
            height: 53px;
            text-align: center;
            line-height: 53px;
          }
          .login:hover {
            // background: rgba(253, 252, 252, 0.2);
            background: rgba(154, 205, 250, 0.2);
            cursor: pointer;
            border-radius: 10px;
          }
        }
      }
    }

    // 简介部分
    .introduce_wrap {
      text-align: right;
      color: #bbb;
      position: absolute;
      top: 30%;
      left: 55%;
      h3 {
        font-size: 30px;
      }

      //   “加入我们”按钮
      .join_us {
        position: absolute;
        right: 0;
        margin-top: 20px;
        text-align: center;
        width: 150px;
        height: 60px;
        line-height: 60px;
        border-radius: 10px;
        border: 1px solid #bbb;
        box-shadow: 10px #bbb inset;
        cursor: pointer;
      }
      .join_us:hover {
        background: rgba(253, 252, 252, 0.2);
        color: #000;
        box-shadow: darkgrey 0px 0px 20px 5px;
      }
    }
    // 白板部分
    .web_type {
      text-align: center;
      height: 290px;
      .trait {
        margin: 30px 0;
        span {
          font-size: 40px;
          color: #3399ff;
          font-weight: 300;
          padding: 0 20px;
        }
        span:nth-child(n + 2)::before {
          content: '';
          display: inline-block;
          position: relative;
          top: 2px;
          left: -20px;
          width: 2px;
          height: 35px;
          background-color: #3399ff;
        }
      }
      h4 {
        font-weight: 400;
      }
    }
  }
  //   图片内容区域
  .home {
    height: 100%;
  }

  .content-item {
    background-color: #fff;
    width: 100%;
    line-height: 400px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
  }

  .activebg {
    position: relative;
    width: 100%;
    height: 600px;
    background: #fff;
    background-attachment: fixed;
    background-position: center 0;
    background-repeat: no-repeat;
  }
  .fisrtbg {
    background-image: url(@/assets/img/3_learn.jpg);
    background-size: 100% 960px;
  }
  .secondbg {
    background-image: url(@/assets/img/7_learn.jpg);
    background-size: 100% 960px;
  }
  .thirdbg {
    background-image: url(@/assets/img/5_learn.jpg);
    background-size: 100% 960px;
  }
  .fourbg {
    background-image: url(@/assets/img/9_learn.jpg);
    background-size: 100% 960px;
  }
}
</style>