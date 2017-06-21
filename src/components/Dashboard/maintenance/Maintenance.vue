<template>
  <div class="maintenance">
    <div class="col-md-12">
        <div class="row">
            <div class="col-md-6" v-for="item in table.stats">
                <div class="panel panel-default">
                    <div class="panel-heading">{{item.composant}}</div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-2">actuel</div>
                            <div class="col-md-2">moy 5min</div>
                            <div class="col-md-2">moy 1J</div>
                            <div class="col-md-2">moy 1h</div>
                            <div class="col-md-2">moy 7j</div>
                            <div class="col-md-2">moy 31j</div>    
                        </div>
                        <div class="row">
                            <div class="col-md-2">{{item.actuel}}</div>
                            <div class="col-md-2">{{item.moy5min}}</div>
                            <div class="col-md-2">{{item.moy1h}}</div>    
                            <div class="col-md-2">{{item.moy1j}}</div>
                            <div class="col-md-2">{{item.moy7j}}</div>
                            <div class="col-md-2">{{item.moy31j}}</div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>



<script>
  import axios from 'axios'
  export default {
    name: 'maintenance',
    data () {
      return {
          table : {}
      }
    },
    methods : {

    },
    mounted: function () {
      axios.get('cgi/stat_maintenance')
        .then((response) => {
          this.table = response.data;
        }).then((error) => {
          this.errorFromServer = error
      })
    },
  }
</script>
