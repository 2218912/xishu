<template>
  <div>
    <Paging>
        <ZuoZhe slot="about"></ZuoZhe>
        <Theme slot="about"/>
    </Paging>
  </div>
</template>

<script>
import Paging from '../my-page/Paging.vue'
import ZuoZhe from '../about-page/ZuoZhe.vue'
import Theme from '../theme-btn/Theme.vue'

export default {

    components:{
        Paging,ZuoZhe,Theme
    }
}
</script>

<style>

</style>