<template>
  <div class="components-container">
    <el-button @click="popSetting.visible = true">open</el-button>
    <drag-dialog :dialog-setting="popSetting" @dialogClose="dialogClose" @dialogAffirm="dialogAffirm">
      <template v-slot:header>
        <div>自定义header</div>
      </template>
      <template v-slot:content>
        内容
      </template>
    </drag-dialog>
  </div>
</template>

<script>
import DragDialog from '@/components/DragPop'

export default {
  name: 'DragDialogDemo',
  components: { DragDialog },
  data() {
    return {
      a: 1,
      popSetting: {
        title: '提示',
        width: '50%',
        visible: false,
        className: '',
        footerBtnText: {
          close: '取消',
          affirm: '完成'
        }
      }
    }
  },
  methods: {
    dialogClose() {
      this.popSetting.visible = false
    },
    dialogAffirm() {
      alert('点击了确定')
      this.popSetting.visible = true
    }
  }
}
</script>
