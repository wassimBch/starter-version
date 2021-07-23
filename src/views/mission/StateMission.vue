<template>
<div>
  <!--
   <b-card-body>
        <b-form-group
          label="Filter"
          label-cols-sm="2"
          label-align-sm="left"
          label-size="sm"
          label-for="filterInput"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filterInput"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            />
            <b-input-group-append>
              <b-button
                :disabled="!filter"
                @click="filter = ''"
              >
                Clear
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
    </b-card-body>
  -->
    <b-table-simple
      hover
      caption-top
      responsive
      class="rounded-bottom mb-0"
    >
      <b-thead head-variant="light">
        <b-tr>
          <b-th>
            ID
          </b-th>
          <b-th>
            State
          </b-th>
          <b-th>
            action
          </b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="a in APIData" :key="a.id">
          <b-td>{{a.id}}</b-td>
          <b-td>{{a.etat_mission}}</b-td>
          <b-td>
          
          </b-td>
        </b-tr>
      </b-tbody>
      <b-tfoot>
        <b-tr>
          <b-td
            colspan="11"
            variant="secondary"
            class="text-right"
          >
            Total Rows: <b></b>
          </b-td>
        </b-tr>
      </b-tfoot>
    </b-table-simple>
</div>
</template>

<script>
import {
  BTableSimple, BThead, BTr, BTh, BTd, BTbody, BTfoot,BCardBody,BFormGroup,BInputGroup,BInputGroupAppend
} from 'bootstrap-vue'
import {getAPI} from '@/axios-api'
export default {
  name : 'StateMission',
  data () {
      return {
          APIData: []
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
    },
    created () {
        getAPI.get('/mission/etat/',)
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