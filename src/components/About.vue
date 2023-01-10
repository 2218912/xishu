<template>
  <div>
    <Paging>
        <ZuoZhe slot="about"></ZuoZhe>
    </Paging>
  </div>
</template>

<script>
import Paging from '../components/Paging.vue'
import ZuoZhe from '../components/ZuoZhe.vue'

export default {

    components:{
        Paging,ZuoZhe
    }
}
</script>

<style>

</style>