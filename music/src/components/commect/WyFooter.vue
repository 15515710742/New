<template>
  <div class="cell bgGray cs3 border-top">
    <div class="  contentB cs3">
      <div class="text-about">
        <ul class="about">
          <li class="li-item">
            <a href="#">关于网易</a>
          </li>
          <li class="li-item"></li>
          <li class="li-item">|</li>
          <li class="li-item"></li>
          <li class="li-item">
              <a href="#">客户服务</a>
          </li>
          <li class="li-item"></li>
          <li class="li-item">|</li>
          <li class="li-item"></li>
          <li class="li-item">
              <a href="#">服务条款</a>
          </li>
          <li class="li-item"></li>
          <li class="li-item">|</li>
          <li class="li-item">
              <a href="#">网站导航</a>
          </li>
          <li class="li-item"></li>
          <li class="li-item">|</li>
          <li class="li-item"></li>
          <li class="li-item">
              <a href="#">意见反馈</a>
          </li>
        </ul>
        <!-- 版权 -->
        <div class="text">
          <span class="text-one">网易公司版权所有©1997-2018</span>
          <span>杭州乐读科技有限公司运营：</span>
          <a href="#">浙网文[2018]3506-263号</a>
        </div>
        <!-- 电话 邮箱 -->
        <div class="text">
          <span class="text-one">违法和不良信息举报电话：0571-89853516</span>
          <span> 举报邮箱：</span>
          <a href="#">cloudmusicservice@163.com</a>
        </div>
      </div>
      <!-- 图标 -->
      <div class="img">
        <div class="foot_enter-zimeiti img-one"></div>
        <div class="foot_enter-zanshang img-one"></div>
        <div class="foot_enter-music img-one"></div>
        <div class="foot_enter-singer img-one"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "login",
    data: function () {
      return {

      }
    },
    components: {

    }
  }
</script>
<style scoped>
  .about{
    display: flex;
    list-style: none;
  }
  .text-about{
    margin-top: 15px;
  }
  .li-item{
    padding: 2px;
    color: #B2B2B2;
  }
  .text,a{
    margin-top: 5px;
    color: #666666;
  }
  .text-one{
    padding-right:  25px;
  }
  .img{
    width: 350px; 
    justify-content: center;
    display: flex;
    padding: 35px;
  }
  .img-one{
    padding: 5px;
  }
</style>