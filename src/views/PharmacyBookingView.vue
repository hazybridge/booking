<script setup>
import { supabase } from '../lib/supabaseClient'

async function submit(e) {
  console.log('e', e)
  const { data, error } = await supabase.auth.signInWithOtp({
    email: 'reidsherman@gmail.com',
    options: {
      emailRedirectTo: 'http://localhost:5173/user'
    }
  })
  console.log('data', data)
}
</script>

<template>
  <main>
    <input placeholder="name" />
    <input placeholder="email" />
    <button @click="submit">submit</button>
  </main>
</template>
