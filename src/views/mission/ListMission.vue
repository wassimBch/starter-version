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
            Mission title
          </b-th>
          <b-th>
            Start date
          </b-th>
          <b-th>
            End date
          </b-th>
          <b-th>
            Point of sale
          </b-th>
           <b-th>
            Mission type
          </b-th>
           <b-th>
            Mission state
          </b-th>
          <b-th>
            Car
          </b-th>
          <b-th>
            action
          </b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="a in APIData" :key="a.id">
          <b-td colspan="1">{{a.mission_title}}</b-td>
          <b-td>{{a.date_debut}}</b-td>
          <b-td>{{a.date_fin}}</b-td>
          <b-td>{{a.point_vente}}</b-td>
          <b-td>{{a.mission_type}}</b-td>
          <b-td>{{a.mission_etat}}</b-td>
          <b-td>{{a.vehic}}</b-td>
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
<!--
  <div class="container">
    <table border="1px">
      <thead class="table-dark">
        <tr>
          <th>Mission title</th>
          <th>Start date</th>
          <th>End date</th>
          <th>point of sale</th>
          <th>Mission type</th>
          <th>Mission state</th>
          <th>Car</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in APIData" :key="a.id">
          <td>{{a.mission_title}}</td>
          <td>{{a.date_debut}}</td>
          <td>{{a.date_fin}}</td>
          <td>{{a.point_vente}}</td>
          <td>{{a.mission_type}}</td>
          <td>{{a.mission_etat}}</td>
          <td>{{a.vehic}}</td>
          <td><button type="button">Details</button></td>
        </tr>
      </tbody>
    </table>    
  </div> 
  -->
</template>

<script>
import {
  BTableSimple, BThead, BTr, BTh, BTd, BTbody, BTfoot,BCardBody,BFormGroup,BInputGroup,BInputGroupAppend
} from 'bootstrap-vue'
import {getAPI} from '@/axios-api'
export default {
  name : 'ListMission',
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
        getAPI.get('/mission/',)
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