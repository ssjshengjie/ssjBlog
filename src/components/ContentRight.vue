<template>
  <div class="content_right">
    <div class="content_right_top">
      <div class="right_top_one"></div>
      <div class="right_top_two">
        <div class="right_title"></div>
        <div class="right_span">
          流星白羽光出匣,一剑无痕雪漫山
          <br />
          <i>blog as ssj</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

};
</script>

<style lang="scss">
.content_right {
    cursor: pointer;
  width: 100%;
  height: 100%;
  .content_right_top {
    width: 280px;
    height: 210px;
    margin-left: 10px;
    margin-top: 50px;
    border: 1px solid #cccccc;
    border-radius: 3px;
    .right_top_one {
      width: 100%;
      height: 95px;
      background: url("../assets/image/right_top.jpg");
      background-size: 100% 100%;
    }
    .right_top_two {
      width: 100%;
      height: 115px;
      .right_title {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid #cccc;
        position: relative;
        top: -50px;
        left: 20px;
        background: url("../assets/image/taibai.jpg");
        background-size: 100% 100%;
        transition: all 1s linear;
      }
      /* 鼠标移动到头像上，动画效果 */
      .right_title:hover {
        animation: right_title_animation .8s forwards;
        @keyframes right_title_animation{
          0% {
            transform: rotate(0);
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); 
          }
           50% {
            transform: rotate(180deg);
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); 
          } 
          100% {
            transform: rotate(360deg);
          }
        }
      }
      .right_span {
        position: relative;
        top: -50px;
        left: 30px;
      }
    }
  }
}
</style>