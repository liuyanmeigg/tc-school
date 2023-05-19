<template>
  <div class="footer">
    <!-- 加入Tshare，发现更多 -->
    <div class="find_more">
      <h2>加入Tshare，发现更多</h2>
      <div class="more_item">
        <div class="item">
          <img src="@/assets/img/shiwuzhaoling.png" alt="" />
          <div class="info">
            &nbsp;&nbsp;&nbsp;&nbsp;Tshare的失物招领通过校内的信息互动，帮助您更快的找到您所丢失的物品
          </div>
        </div>
        <div class="item">
          <img src="@/assets/img/aixin.png" alt="" />
          <div class="info">
            &nbsp;&nbsp;&nbsp;&nbsp;Tshare的失物招领通过校内的信息互动，帮助您更快的找到您所丢失的物品
          </div>
        </div>
        <div class="item">
          <img src="@/assets/img/pindan.png" alt="" />
          <div class="info">
            &nbsp;&nbsp;&nbsp;&nbsp;Tshare的失物招领通过校内的信息互动，帮助您更快的找到您所丢失的物品
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <div
        class="texts"
        style="line-height: 20px; font-size: 12px; width: 400px"
      >
        <p>互联网备案号：3215643215641345613号</p>
        <p>xxxxx业务经营许可证：12345345-575643123</p>
        <p>
          互联网违法和不良信息举报电话：0571-81683755 blxxjb@alibaba-inc.com
        </p>
        <p>联系我们：54651324534534567@qq.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  position: relative;
  height: 950px;
  padding-top: 70px;
  .find_more {
    text-align: center;
    h2 {
      font-weight: 400;
      letter-spacing: 4px;
      color: #212529;
    }
    .more_item {
      margin-top: 40px;
      display: flex;
      justify-content: center;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 40px;
        width: 400px;
        height: 450px;
        border: 2px solid #eee;
        margin-right: 30px;
        color: #9fa0a1;
        font-weight: 300;
        font-size: 25px;
        &:hover {
          animation: move 0.5s linear forwards;
          cursor: pointer;
        }
        img {
          width: 100px;
          height: 100px;
        }
        @keyframes move {
          0% {
            transform: scale(1);
          }

          100% {
            transform: scale(1.02);
            box-shadow: 0 0 10px 10px #eee;
          }
        }

        .info {
          margin-top: 60px;
          text-align: left;
        }
      }
    }
  }
  // 底部
  .bottom {
    position: absolute;
    text-align: center;
    background-color: #333333;
    height: 300px;
    bottom: 0;
    left: 0;
    right: 0;
    color: #aaa;
    font-weight: 300;
    .texts {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>