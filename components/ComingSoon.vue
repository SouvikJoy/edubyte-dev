<script lang="ts" setup>
const days = ref('')
const hours = ref('')
const minutes = ref('')
const seconds = ref('')
const props = defineProps({
  title: {
    type: String,
    default: 'Coming Soon'
  },
  description: {
    type: String,
    default: 'We\'re working hard to bring you something awesome. Stay tuned!',
  },
  launchDate: {
    type: String,
    required: true,
  },
})
onMounted(() => {
  setInterval(() => {
    const launchTime = new Date(props.launchDate).getTime()
    const now = new Date().getTime()
    const distance = launchTime - now

    days.value = Math.floor(distance / (1000 * 60 * 60 * 24)).toString()
    hours.value = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ).toString()
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString()
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000).toString()
  }, 1000)
})
</script>
<template>
  <div class="container">
    <h1>Coming Soon</h1>
    <p>We're working hard to bring you something awesome. Stay tuned!</p>
    <div class="countdown">
      <div class="countdown-item">
        <span class="countdown-value" id="days">{{ days }}</span>
        <span class="countdown-label">Days</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value" id="hours">{{ hours }}</span>
        <span class="countdown-label">Hours</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value" id="minutes">{{ minutes }}</span>
        <span class="countdown-label">Minutes</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value" id="seconds">{{ seconds }}</span>
        <span class="countdown-label">Seconds</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
