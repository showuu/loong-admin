<template>
  <el-menu default-active="identifications" background-color="#949494" text-color="#fff" active-text-color="#FFA500">
    <el-menu-item index="identifications">
      <span>鉴定后台</span>
    </el-menu-item>
    <el-menu-item index="bills">
      <span>账单后台</span>
    </el-menu-item>
    <el-menu-item index="users">
      <span>用户后台</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
</style>
