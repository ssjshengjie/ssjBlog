<template>
  <div class="index">
    <el-row>
      <el-col :span="8" v-for="item in list" :key="item.id" class="index-card">
        <el-card :body-style="{ padding: '0px' }">
          <img v-if="loading=0" src="../assets/image/loading.gif" alt="等待数据加载" />
          <img v-if="item.url!=null" :src="item.url" class="image" />
          <img v-else src="../assets/image/noimage.jpg" class="image" />
          <div style="padding:5px;border-top: 1px solid #cccc;display:flex;flex-flow: column;">
            <div style="margin-bottom:10px">
              <span>{{item.title}}</span>
            </div>
            <div class="index-tags">
                <!-- v-for="tag in item.tags"
                :key="tag.id"
                :style="'background:'+tag.color" -->
              <div class="index-tags-item"
              >{{item.type}}</div>
            </div>
           <!--  <div class="el-icon-date">{{item.date}}</div> -->
            <div class="bottom clearfix"></div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="index-page">
 <!--      <el-pagination
        @current-change="handleSizeChange"
        @prev-click="ChangePagePrev"
        @next-click="ChangePageNext"
        layout="prev, pager, next"
        :total="count"
      ></el-pagination> -->
      <el-pagination
        @current-change="handleCurrentChange" 
        :current-page.sync="nowpage"
        page-size.sync="pagesize"
        layout="prev, pager, next"
        :total="count"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowpage: 1,
      pagesizeStart: 0,
      pagesizeEnd:9,
      currentpage:1,
      count: 1,
      list: []
    };
  },
  created() {
    this.getBlogData();
  },
  methods: {
      /* /api/api/article/page?&nowpage=${this.nowpage}&pagesize=${this.pagesize} */
    /* getBlogData() {
      fetch(
        `/api`
      )
        .then((response) => response.json())
        .then((data) => {
          this.list = data.pagelist.rows;
          this.count = data.pagelist.count;
        });
      this.loading = 1;
    }, */
     getBlogData() {
      fetch(
        `http://47.92.39.166:3000/getArticles`
      ).then((response) => response.json())
        .then((data) => {    
           this.list = data.data.slice(this.pagesizeStart,this.pagesizeEnd)  //利用sclie 实现前端分页
           this.count =  data.data.length;  
        });
    },
/*     handleSizeChange(val) {
      console.log(1111111111)
      this.nowpage = val;
      this.currentpage=1
    }, */
    handleCurrentChange(val) {
        this.nowpage=val
        /* 初始化 条数 */
        this.pagesizeEnd=9
        /* 把前端分页的参数 重新计算 */
        this.pagesizeStart=this.pagesizeEnd*val-this.pagesizeEnd
        this.pagesizeEnd=this.pagesizeEnd*val
        this.getBlogData()
    },
  },
};
</script>

<style lang="scss">
.index {
  height: 100%;
  cursor: pointer;
  .index-card {
    flex: 1;
    width: 30%;
    height: 350px;
    margin: 20px;
    text-align: center;
    .index-tags {
      /*  margin-top: 15px; */
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .index-tags-item {
        min-width: 80px;
        height: 30px;
        line-height: 30px;
        margin: 5px;
        border-radius: 3px;
        background: powderblue;
      }
    }
  }
  .index-card :hover {
    span {
      color: #1685a9;
    }
  }
  .index-page {
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    margin-top: 30px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    min-height: 270px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }
}
</style>