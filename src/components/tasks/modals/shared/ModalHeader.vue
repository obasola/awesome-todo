<template>
<q-card-section class="row">
    <div class="text-h6">
        <slot></slot>
    </div>
    <q-space />
    <q-btn round color="secondary" icon="close" v-close-popup />
</q-card-section>
</template>

<script>
export default {

}
</script>

<style lang="css">
    
</style>
