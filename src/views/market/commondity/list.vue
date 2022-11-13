<!--因为所有的页面都需要有这个标签，才能起到效果，所以我们也要写这个标签和div块-->
<template>						
  <div class="app-container">
      <!--1：：：这里的代码是筛选表单，用于筛选数据-->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <!--这里用v-model绑定后，就可以直接将这里的姓名等条件传给data，直接查询-->
        <el-input v-model="teacherQuery.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="教师等级">
        <el-select v-model="teacherQuery.level" placeholder="教师等级">
          <el-option label="高级教师" value=1></el-option>
          <el-option label="首席教师" value=2></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="加入时间">
        <el-date-picker
          v-model="teacherQuery.begin"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getList()">查询</el-button>

      </el-form-item>
  </el-form>

  <el-upload
      class="upload-demo"
      ref="upload"
      :action="BASE_API+'/serviceedu/edu-teacher/write'"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false"
      :limit="1"
      style="margin-right:50%;float:right"
      >
      <el-button slot="trigger" size="small" type="primary">选择excel</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">导入excel数据</el-button>
      <div slot="tip" class="el-upload__tip" style="padding-left:15px;padding-top:3px;float:right">只能上传一个jpg/png文件（新用户数据不能重复），且不超过500kb</div>
    </el-upload>
  <!--1.5:::这里是删除按钮-->
  
  <!--2：：：这里的代码是表格，显示查询数据-->
  
    
  <el-button
        size="mini"
        type="warning"
        plain
        width="80"
        
        @click="handleEdit(scope.$index, scope.row)" >删除</el-button>
  <el-button
        size="mini"
        type="primary"
        plain
        width="80"
        @click="readExcel()" >导出</el-button>

  
 

  <!-- 表格 -->
    
    <el-table
      ref="multipleTable" 
      :data="list"                  
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">      <!--注意这里有一个data属性，用来给到表格中的数据，data的json集合需要与各个表头的prop对应-->
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      
      <el-table-column
        prop="id"
        label="id"
        width="80"
        :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="80">
      </el-table-column>
      <el-table-column
        label="头像"
        width="120">
        <template slot-scope="scope">
          <!-- <img :src="scope.row.avatar"> -->
          <img :src="scope.row.avatar" height="80px" width="80px">
        </template>
      </el-table-column>
      <el-table-column
        prop="intro"
        label="简介"
        width="200"
        :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column
        prop="level"
        label="头衔"
        width="120">
        <template slot-scope="scope">
          {{scope.row.level===1?"高级教师":"首席教师"}}
        </template>
      </el-table-column>
      <el-table-column
        prop="career"
        label="职业"
        width="120">
      </el-table-column>
      <el-table-column
        prop="sort"
        label="排序"
        width="120">
      </el-table-column>
      <el-table-column
        prop="gmtCreate"
        label="创建时间"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="gmtModified"
        label="更新时间"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        label="操作"
        width="200">
        <template slot-scope="scope">
          <router-link
        :to="'/teacher/update/'+scope.row.id">
            <el-button
            size="mini"
            type="success"
            plain>编辑</el-button>
          </router-link>
        </template>
      </el-table-column>
      
    </el-table>

    

    

    <!--3:::分页用:layout表示了选择显示多少样式-->
    <el-pagination
      background
      layout="prev, pager, next"
      :current-page="this.page"
      :page-size="this.limit"
      :total="this.total"
      @current-change="getList"
      >
    </el-pagination>
  </div>
</template>
<script>
import commondity from '@/api/commondity'
export default {
  
}
</script>