<template>
  <el-row class="info">
    <el-col :span="5" class="imgs-region">
      <img v-for="(path, index) of collection.pics" :src="path" :key="index" alt="picture">
    </el-col>

    <el-col :span="8" class="texts-region">
      <p>{{ collection.name }}</p>
      <b>宝贝ID: {{ collection.id }}</b>
      <p>鉴宝人的电话: {{ collection.contactPhone }}</p>
      <p>{{ collection.createTime }}</p>
      <p>宝贝说明{{ collection.description }}</p>
    </el-col>

    <el-col :span="5" class="buttons-region">
      <el-button type="info" :disabled="isAuthenticated">受理</el-button>
      <el-button type="info" :disabled="!isAuthenticated">下载资料</el-button>
      <el-button type="info" :disabled="!isAuthenticated">待定</el-button>
    </el-col>

    <el-col :span=6 class="result-region">
      <el-upload class="img-uploader" :action="uploadUrl" :before-upload="beforeAvatarUpload">
        <img v-if="resultImageUrl" :src="resultImageUrl" class="img-uploader-img" alt="鉴定结果">
        <i v-else class="el-icon-plus img-uploader-icon"></i>
      </el-upload>
      <!-- <span>上传鉴定结果</span> -->
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    collection: { type: Object }
  },
  data () {
    return {
      uploadUrl: '',
      resultImageUrl: ''
    }
  },
  created () {
  },
  computed: {
    isAuthenticated () {
      return this.collection.state !== 1
    }
  },
  methods: {
    beforeAvatarUpload (file) {
      console.log(file)
    }
  }
}
</script>

<style>
img {
  border: 3px solid #8c939d;
  padding: 1px;
  margin: 5px;
  width: 60px;
  height: 40px;
}

.info {
  border: 1px solid black;
  display: flex;
  align-items: stretch;
  align-content: center;
  justify-content: space-around;
}

.imgs-region,
.result-region {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.texts-region {
  text-align: left;
}

.buttons-region {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-evenly;
}

.buttons-region .el-button {
  width: 90px;
  margin: 10px;
}
.result-region {
  border-left: 1px solid black;
}

.img-uploader .el-upload {
  border: 2px dashed #d9d9d9;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.img-uploader .el-upload:hover {
  border-color: #409eff;
}
.img-uploader-icon {
  font-size: 40px;
  color: #8c939d;
  width: 150px;
  height: 150px;
  line-height: 150px;
  text-align: center;
}
.img-uploader-icon.el-icon-plus {
  line-height: 150px;
}
.img-uploader-img {
  width: 150px;
  height: 150px;
  display: block;
}
</style>
