<template>
<q-card-actions align="right" class="text-primary">
    <q-btn round 
      color="primary" label="Save" 
      type="submit"  @click="$emit('submit', $event)"/>
</q-card-actions>
</template>

<script>
export default {

}
</script>
