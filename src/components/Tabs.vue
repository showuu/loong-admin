<template>
  <el-row>
    <el-col :span="12">
      <el-radio-group v-model="state" @change="filterByState">
        <el-radio-button v-for="item of states" :key="item.code" :label="item.code">{{ item.desc }}</el-radio-button>
      </el-radio-group>
    </el-col>
    <el-col :span="6">
      <el-autocomplete v-model="searchText" :fetch-suggestions="querySearchAsync" placeholder="搜索" @select="filterByIdOrName"></el-autocomplete>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      state: 0,
      states: [
        { code: 0, desc: '全部' },
        { code: 1, desc: '待受理' },
        { code: 2, desc: '已受理' },
        { code: 10, desc: '已完成' },
        { code: 5, desc: '待定' }
      ],
      searchText: ''
    }
  },
  methods: {
    filterByState (value) {
      console.log('当前选中的状态code为:%s', value)
    },
    filterByIdOrName (value) {
      console.log(value)
    },
    querySearchAsync (queryString, cb) {
      console.log(queryString)
      cb()
    }
  }
}
</script>

<style scoped>
</style>
