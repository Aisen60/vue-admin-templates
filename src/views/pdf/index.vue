<template>
  <div class="app-container">
    <aside style="margin-top:15px;">
      可以使用 window.print() 这个方法来实现pdf导出
    </aside>
    <router-link target="_blank" to="/pdf/download">
      <el-button type="primary">
        Click to download PDF
      </el-button>
    </router-link>
  </div>
</template>

