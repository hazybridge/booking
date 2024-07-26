<script setup lang="ts">
import { ref } from 'vue'
const date = ref(new Date())

function selectDay(e) {
  console.log('e', e)
  date.value = e.date
}

// NOTE: different appointments may have different lengths available
// for example, if the patient knows they need a measles vaccination,
// this type of appt has a duration of 1hr

// so we need dynamically find 1 hr timeslots given the pharma's availability
//

const timeslots = [
  {
    startDateTime: new Date(),
    endDateTime: new Date()
  }
]
</script>

<template>
  <main>
    <VCalendar expanded @dayclick="selectDay" />
    {{ date }}
  </main>
  <h2>Available appointments</h2>
  <ul>
    <li v-for="timeslot in timeslots" :key="timeslot">{{ timeslot }}</li>
  </ul>
  <RouterLink :to="{ name: 'pharmacy-booking', params: { id: 'central-pharmacy' } }"
    >link to booking</RouterLink
  >
</template>
