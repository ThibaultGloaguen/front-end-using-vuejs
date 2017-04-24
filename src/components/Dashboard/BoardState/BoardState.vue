<template>
  <div class="col-md-6">
    <div class="panel panel-default">
      <div class="panel-heading">{{tableParent.type}} | {{tableParent.occ}}</div>
      <div class="panel-body">
          <div class="row">
            <div class="col-md-6">Sortie</div>
            <div class="col-md-6">Etat</div>
          </div>
          <div class="row" style="border:solid 1px lightgrey;" v-for="element,counter in tableParent.etat_voies">
            <div class="col-md-6"  style="border-right:solid 1px lightgrey;">{{++counter}}</div>
            <div class="col-md-6"  v-if="element" style="background: green" ref="etat" >{{element}}</div>
            <div class="col-md-6"  v-else style="background: red" ref="etat" >{{element}}</div>
          </div>
      </div>
    </div>

  </div>
</template>



<script>
  export default {
    name: 'BoardState',
    props : {
        tableParent : Object,
    },
    data () {
      return {
        counter: 0,
      }
    },
    mounted: function () {
    },
  }
</script>
