<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import TicketForm from './TicketForm.vue'
import TicketList from './TicketList.vue'

const editingTicket = ref(null) // will hold the ticket to edit
const route = useRoute()

// Auto-scroll to ticket list if ?view=list is in the URL
onMounted(() => {
  if (route.query.view === 'list') {
    setTimeout(() => {
      const el = document.getElementById('ticketList')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100) // slight delay to ensure DOM is rendered
  }
})
</script>

<template>
  <!-- Single form, used for create and edit -->
  <TicketForm :ticket="editingTicket" @submitted="editingTicket = null" />

  <!-- Ticket list emits ticket to edit -->
  <div id="ticketList">
    <TicketList @editTicket="editingTicket = $event" />
  </div>
</template>
