<script setup>
import { reactive, ref } from 'vue'

const formData = reactive({
  title: '',
  description: '',
  status: 'open',
  priority: 'medium',
})

const message = ref('')

function handleSubmit() {
  // Example: send formData to API or push to tickets array
  console.log('Submitted ticket:', { ...formData })

  message.value = 'Ticket submitted successfully!'

  // Reset form
  formData.title = ''
  formData.description = ''
  formData.status = 'open'
  formData.priority = 'medium'

  setTimeout(() => {
    message.value = ''
  }, 3000)
}
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <h2>Create New Ticket</h2>

    <label>Title</label>
    <input type="text" v-model="formData.title" required />

    <label>Description</label>
    <textarea v-model="formData.description" rows="4"></textarea>

    <label>Status</label>
    <select v-model="formData.status">
      <option value="open">Open</option>
      <option value="in_progress">In Progress</option>
      <option value="closed">Closed</option>
    </select>

    <label>Priority</label>
    <select v-model="formData.priority">
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>

    <button type="submit">
      {{ formData.id ? 'Update Ticket' : 'Create Ticket' }}
    </button>

    <p v-if="message" class="success">{{ message }}</p>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #fff;
  padding: 3rem;
  border-radius: 10px;
  max-width: 420px;
  margin: 2rem auto;
  border: 2px dashed black;
}

.form h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

input,
textarea,
select {
  padding: 0.6rem;
  border-radius: 6px;
  border: 1px solid #cfcfcf;
  font-size: 1.2rem;
}

button {
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background: #1d4ed8;
}
.success {
  text-align: center;
  margin-top: 0.5rem;
  color: #0a7a27;
  font-size: 1.3rem;
  font-weight: 500;
}
</style>
