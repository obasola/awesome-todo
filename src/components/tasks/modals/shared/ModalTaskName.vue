<template>
<div class="row q-mb-sm">
    <q-input ref="name" clearable outlined label="Desc" 
    :value="name" @input="$emit('update:name', $event)" class="col" 
    :rules="[val => !!val || 'Field is required']" autofocus
     @keyup.enter="prompt = false" />
</div>
</template>

<script>
export default {
    props: [
        'name'
    ]
}
</script>

<style lang="css">
    
</style>
