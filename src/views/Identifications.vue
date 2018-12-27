<template>
  <el-container style="height:100%">
    <el-aside class="navigation">
      <Navigation />
    </el-aside>
    <el-container>
      <el-header>
        <Tabs />
      </el-header>
      <el-main>
        <Info v-for="(collection, index) in collections" :key="index" :collection="collection" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Tabs from '@/components/Tabs.vue'
import Info from '@/components/Info.vue'
import { convertTimeStampToDataTime } from '@/utils/format'
// import { fetchList } from '@/api/collections'

export default {
  name: 'identification',
  components: {
    Navigation, Tabs, Info
  },
  data () {
    return {
      collections: []
    }
  },
  created () {
    // const collections = fetchList()
    // this.collections = collections
    this.collections = [{
      pics: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545743485332&di=4e4e1a8f5fd0f6a0872c106b9ab46549&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F14ce36d3d539b600d3924a1feb50352ac65cb73e.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545743485332&di=8d21233984e0fb95dd6b8ef9b218a99e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F69c1e587729088bf34d7bd5fa6b56d78c572334d42b1-Jk8qA5_fw658'],
      name: '清代龙椅',
      id: '123456',
      contactPhone: '18705182194',
      createTime: convertTimeStampToDataTime('2018-12-24T11:12:51.566Z', 'yyyy/MM/dd hh:mm'),
      description: '描述描述描述描述描述描述描述描述描述描述描述描述,喵喵喵喵喵喵喵喵喵喵喵喵,喵喵喵喵',
      state: 1
    }]
  },
  methods: {

  }
}
</script>

<style scoped>
.navigation {
  background-color: #d7d7d7;
  text-align: center;
  line-height: 200px;
  height: 100%;
}
</style>
