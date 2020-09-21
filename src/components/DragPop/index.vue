<!-- 可拖动弹出框 -->
<template>
  <el-dialog
    v-el-drag-dialog
    :visible.sync="dialogSetting.visible"
    :title="dialogSetting.title"
    :width="dialogSetting.width"
    :custom-class="dialogSetting.className"
    :close-on-click-modal="false"
    :append-to-body="true"
    :before-close="dialogClose"
  >
    <!-- 自定义 dialog header -->
    <slot slot="title" name="header" />

    <slot name="content" />

    <!-- 自定义 dialog footer -->
    <slot slot="footer" name="footer">
      <el-button @click="dialogClose">
        {{
          dialogSetting.footerBtnText.close
        }}
      </el-button>
      <el-button type="primary" @click="dialogAffirm">
        {{
          dialogSetting.footerBtnText.affirm
        }}
      </el-button>
    </slot>
  </el-dialog>
</template>

<script>
import elDragDialog from '@/directive/el-drag-dialog'

export default {
  directives: { elDragDialog },
  props: {
    // popSetting弹出框默认设置
    dialogSetting: {
      type: Object,
      default: () => ({
        title: '提示',
        width: '50%',
        visible: false,
        className: '',
        footerBtnText: {
          close: '取消',
          affirm: '完成'
        }
      })
    }
  },

  methods: {
    // 关闭弹出框
    dialogClose() {
      this.$emit('dialogClose')
    },
    // dialogAffirm 点击确认
    dialogAffirm() {
      this.$emit('dialogAffirm')
    }
  }
}
</script>

