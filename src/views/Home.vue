<template>
  <div class="blog">
    <!-- 头部----------------------------------------->
    <div class="blog_header" id="searchBar">
      <nav class="blog_header_nav" :class="NavBlogBarFixed == true ? 'isFixed' : ''">
        <!-- 博客LOGO -->
        <div class="blog_header_nav_left">
          <div class="blog_header_nav_left_img">ssjのblog</div>
        </div>
        <div class="blog_header_nav_right">
          <div class="blog_nav_index">
            <div class="v_blog_nav_index">
              <span class="el-icon-s-home"></span>
              <span class="item-text">
                <router-link to="index">首页</router-link>
              </span>
            </div>
          </div>
          <div class="blog_nav_file">
            <div class="v_blog_nav_file">
              <span class="el-icon-s-order"></span>
              <span class="item-text">
                <router-link to="file">归档</router-link>
              </span>
            </div>
          </div>
          <div class="blog_nav_link">
            <div class="v_blog_nav_link">
              <span class="el-icon-s-promotion"></span>
              <span class="item-text">
                <router-link to="link">链接</router-link>
              </span>
            </div>
          </div>
          <div class="blog_nav_about">
            <div class="v_blog_nav_about">
              <span class="el-icon-collection"></span>
              <span class="item-text">
                <router-link to="about">关于</router-link>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- 中间部分---------------------------------- -->
    <div class="blog_content">
      <div class="blog_content_left"></div>
      <div class="blog_content_middle">
        <router-view></router-view>
      </div>
      <div class="blog_content_right">
        <content-right></content-right>
      </div>
    </div>

    <!-- 尾部-------------------------------------- -->
    <div class="blog_footer"></div>
<!--     <div class="returnTop"> 
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import ContentRight from "../components/ContentRight";
export default {
  name: "Home",
  components: { ContentRight },
  data() {
    return {
      NavBlogBarFixed: false,
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
      let offsetTop = document.querySelector("#searchBar").offsetTop;
      scrollTop > offsetTop
        ? (this.NavBlogBarFixed = true)
        : (this.NavBlogBarFixed = false);
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
  .blog_header {
    flex: 1 1 auto;
    background: #006699;
    height: 60px;
    display: flex;
    flex-flow: column;
    /* 固定头部 */
    .isFixed {
      position: fixed;
      top: 0;
      z-index: 999;
    }
    /* 头部导航 */
    .blog_header_nav {
      display: flex;
      width: 100%;
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #dcdfe6;
      background:#a4e2c6;
      cursor: pointer;
      /* 导航左边 */
      .blog_header_nav_left {
        flex: 2;
        .blog_header_nav_left_img {
          padding-left: 240px;
        }
      }
      /* 导航右边 */
      .blog_header_nav_right {
        flex: 4;
        display: flex;
        align-items: center;
        /*   justify-content: center; */
        .blog_nav_index,
        .blog_nav_file,
        .blog_nav_link,
        .blog_nav_about {
          color: #828282;
          font-size: 18px;
          padding-left: 80px;
          /* 鼠标移动伪元素 */
          .v_blog_nav_index:hover,
          .v_blog_nav_file:hover,
          .v_blog_nav_link:hover,
          .v_blog_nav_about:hover {
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
  }
  /* 中间部分 */
  .blog_content {
    width: 100%;
    height: auto;
    min-height: 75vh;
    /*  min-height: 80vh; */
    display: flex;
    /* 中间左侧 */
    .blog_content_left {
      flex: 0 0 15%;
      /*  background: #ff0; */
    }
    /* 中间右侧 */
    .blog_content_right {
      flex: 0 0 20%;
      /* background: #cccccc; */
    }
    /* 中间主体 */
    .blog_content_middle {
      flex: 1 1 auto;
      display: flex;
      /*height: 100%;*/
      /*  background: #00f; */
    }
  }
  /* 尾部 */
  .blog_footer {
    flex: 1 1 auto;
    background: black;
    height: 300px;
  }
  .returnTop {
    right: 38px;
    bottom: 20px;
    background: url('../assets/image/taibai.jpg');
     width: 300px;
    height: 200px;
    position: fixed;
  }
}
</style>
