<template>
<div>
  <h3>add user</h3>
</div>
</template>

<script>
import {
  BTableSimple, BThead, BTr, BTh, BTd, BTbody, BTfoot,BCardBody,BFormGroup,BInputGroup,BInputGroupAppend,BButton
} from 'bootstrap-vue'
import {getAPI} from '@/axios-api'
import axios from 'axios'
export default {
  name : 'ListUsers',
  data () {
      return {
          User: []
        }
    },
  components: {
    BTableSimple,
    BThead,
    BTr,
    BTh,
    BTd,
    BTbody,
    BTfoot,
    BCardBody,
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BButton,
    },
    
}

</script>

<style>
th, td {
  padding: 5px;
  text-align: center;
}
pb-3 {
  padding: spacer !important;
}
</style>