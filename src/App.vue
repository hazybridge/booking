<script setup>
import { ref, onMounted } from 'vue'

import { RouterView } from 'vue-router'
import { supabase } from './lib/supabaseClient'
const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
  console.log('data', data)
}
onMounted(() => {
  getCountries()
})
</script>

<template>
  <RouterView />
</template>
