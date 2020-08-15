<template>
  <div class="blog" @click="handleScroll">
    <!-- 头部----------------------------------------->
    <div class="blog-header" v-show="NavBlogBarFixed=true">
      <!-- 博客LOGO -->
      <div class="blog-header-nav">
        <div class="blog-nav-index">
          <div class="v-blog-nav-index">
            <span class="el-icon-house"></span>
            <span class="item-text">
              <router-link to="index">首页</router-link>
            </span>
          </div>
        </div>
        <div class="blog-nav-file">
          <div class="v-blog-nav-file">
            <span class="el-icon-collection"></span>
            <span class="item-text">
              <router-link to="file">归档</router-link>
            </span>
          </div>
        </div>
        <div class="blog-nav-link">
          <div class="v-blog-nav-link">
            <span class="el-icon-link"></span>
            <span class="item-text">
              <router-link to="link">链接</router-link>
            </span>
          </div>
        </div>
        <div class="blog-nav-about">
          <div class="v-blog-nav-about">
            <span class="el-icon-copy-document"></span>
            <span class="item-text">
              <router-link to="about">关于</router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
    <nav class="blog-header-nav-hiddn" v-show="NavBlogBarFixed=false">
      <!-- 博客LOGO -->
      <div class="bblog-header-nav-left">
        <div class="bblog-header-nav-left-img">ssjのblog</div>
      </div>
      <div class="bblog-header-nav-right">
        <div class="blog-nav-index">
          <div class="v-blog-nav-index">
            <span class="el-icon-s-home"></span>
            <span class="item-text">
              <router-link to="index">首页</router-link>
            </span>
          </div>
        </div>
        <div class="blog-nav-file">
          <div class="v-blog-nav-file">
            <span class="el-icon-s-order"></span>
            <span class="item-text">
              <router-link to="file">归档</router-link>
            </span>
          </div>
        </div>
        <div class="blog-nav-link">
          <div class="v-blog-nav-link">
            <span class="el-icon-s-promotion"></span>
            <span class="item-text">
              <router-link to="link">链接</router-link>
            </span>
          </div>
        </div>
        <div class="blog-nav-about">
          <div class="v-blog-nav-about">
            <span class="el-icon-collection"></span>
            <span class="item-text">
              <router-link to="about">关于</router-link>
            </span>
          </div>
        </div>
      </div>
    </nav>
    <!-- 中间部分---------------------------------- -->
    <div class="blog-content">
      <div class="blog-content-left"></div>
      <div class="blog-content-middle">
        <router-view></router-view>
      </div>
      <div class="blog-content-right">
        <content-right></content-right>
      </div>
    </div>

    <!-- 尾部-------------------------------------- -->
    <Footer />
    <!--     <div class="returnTop"> 
    </div>-->
  </div>
</template>

<script>
// @ is an alias to /src
import ContentRight from "../components/ContentRight";
import Footer from "../components/Fotter";
export default {
  name: "Home",
  components: { ContentRight, Footer },
  data() {
    return {
      NavBlogBarFixed: true,
    };
  },

  mounted() {
    /* 监听导航头部 */
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    /* 固定导航至顶部 */
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      scrollTop > 500 ? (this.NavBlogBarFixed = true):(this.NavBlogBarFixed = false);
    },
  },
};
</script>
<style lang="scss" scoped>
/* 取消link的默认激活颜色和下划线 */
.router-link-active {
  text-decoration: none;
  color: #828282;
}
a {
  text-decoration: none;
  color: #828282;
}
/* ------------------------------------------------------ */
.blog {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  /* 头部 */
  .blog-header {
    flex: 1 1 auto;
    display: flex;
    height: 750px;
    width: 100%;
    border-bottom: 1px solid #cccccc;
    .blog-header-nav {
      display: flex;
      flex: 1;
      position: relative;
      top: 75%;
      left: 40%;
      .blog-nav-index,
      .blog-nav-file,
      .blog-nav-link,
      .blog-nav-about {
        width: 80px;
        height: 36px;
        border: 1px solid #cccc;
        border-radius: 10em;
        background: #cccc;
        margin: 10px;
        text-align: center;
        line-height: 36px;
      }
    }
  }
  .blog-header-nav-hiddn{
    display: none;
    display: flex;
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #dcdfe6;
    background: rgba(255, 254, 153, 0.1);
    cursor: pointer;
    /* 导航左边 */
    .bblog-header-nav-left {
      flex: 2;
      .bblog-header-nav-left-img {
        padding-left: 240px;
      }
    }
    /* 导航右边 */
    .bblog-header-nav-right {
      flex: 4;
      display: flex;
      align-items: center;
      /*   justify-content: center; */
      .blog-nav-index,
      .blog-nav-file,
      .blog-nav-link,
      .blog-nav-about {
        color: #828282;
        font-size: 18px;
        padding-left: 80px;
        /* 鼠标移动伪元素 */
        .v-blog-nav-index:hover,
        .v-blog-nav-file:hover,
        .v-blog-nav-link:hover,
        .v-blog-nav-about:hover {
          height: 30px;
          line-height: 40px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(64, 158, 255, 0.89);
          .item-text:hover {
            color: rgba(64, 158, 255, 0.89);
          }
        }
      }
    }
  }

  /* 中间部分 */
  .blog-content {
    width: 100%;
    height: auto;
    min-height: 75vh;
    display: flex;
    /* 中间左侧 */
    .blog-content-left {
      flex: 0 0 15%;
    }
    /* 中间右侧 */
    .blog-content-right {
      flex: 0 0 20%;
    }
    /* 中间主体 */
    .blog-content-middle {
      flex: 1 1 auto;
      display: flex;
    }
  }
}
</style>
