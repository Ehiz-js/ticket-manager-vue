<script setup>
import { reactive, ref, watch } from 'vue'
import { store } from '@/stores/authStore'

const props = defineProps({
  ticket: Object, // optional ticket for editing
})

const emit = defineEmits(['submitted'])

const formData = reactive({
  id: null,
  title: '',
  description: '',
  status: 'open',
  priority: 'medium',
})

const message = ref('')

// Prefill form when editing
watch(
  () => props.ticket,
  (newTicket) => {
    if (newTicket) {
      formData.id = newTicket.id
      formData.title = newTicket.title
      formData.description = newTicket.description
      formData.status = newTicket.status
      formData.priority = newTicket.priority
    } else {
      // Reset when no ticket
      formData.id = null
      formData.title = ''
      formData.description = ''
      formData.status = 'open'
      formData.priority = 'medium'
    }
  },
  { immediate: true },
)

function handleSubmit() {
  if (!formData.title) {
    message.value = 'Title is required.'
    return
  }

  if (formData.id) {
    // Editing
    store.updateTicket({ ...formData })
    message.value = 'Ticket updated successfully!'
  } else {
    // Creating new
    const newTicket = {
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    }
    store.addTicket(newTicket)
    message.value = 'Ticket submitted successfully!'
  }

  // Reset form
  formData.id = null
  formData.title = ''
  formData.description = ''
  formData.status = 'open'
  formData.priority = 'medium'

  emit('submitted') // notify parent editing is done

  setTimeout(() => {
    message.value = ''
  }, 3000)
}
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <h2>{{ formData.id ? 'Edit Ticket' : 'Create New Ticket' }}</h2>

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

    <button type="submit">{{ formData.id ? 'Update Ticket' : 'Create Ticket' }}</button>

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
