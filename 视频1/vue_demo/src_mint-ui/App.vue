<template>
  <div>
      <mt-button type="primary" @click.native="handleClick" style="width: 100%">primary</mt-button>
  </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        methods: {
            handleClick() {
                Toast('提示信息')
            }
        }
    }
</script>

<style>

</style>
