<template>
  <b-card-code title="Add Car">
    <div class="demo-vertical-spacing">
        <b-form-input placeholder="Registered" />
    </div><br>
    <div class="demo-vertical-spacing">
        <b-form-input placeholder="Chassis number" />
    </div><br>
    <div class="demo-vertical-spacing">
        <b-form-input placeholder="Purchase value" />
    </div><br>
    <div class="demo-vertical-spacing">
        <b-form-input placeholder="Description" />
    </div><br>
    <div>
      <b-form-select 
        v-model="selected"
        :options="options"
      />
    </div><br>
   <!-- <div>
      <select v-model="car">
         <option v-for="a in mod">{{ mod }}</option>
      </select>
    </div>
   -->
  </b-card-code> 
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BInputGroup, BFormInput, BInputGroupPrepend, BInputGroupAppend, BFormGroup, BFormTextarea,BFormSelect,BCardText ,
} from 'bootstrap-vue'
import {getAPI} from '@/axios-api'
export default {
  name : 'ModelCars',
  data () {
      return {
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Simple Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true },
        ],
      }
    },
  components: {
    BCardCode,
    BFormTextarea,
    BInputGroup,
    BFormGroup,
    BFormInput,
    BInputGroupPrepend,
    BInputGroupAppend,
    BFormSelect,
    BCardText,
    },
    created () {
        getAPI.get('/vehicule/',)
          .then(response => {
            console.log('vehicule API has recieved data')
            this.APIData = response.data
          })
          .catch(err => {
            console.log(err)
          })
    }
}

</script>

<style>
th, td {
  padding: 5px;
  text-align: center;
}
</style>