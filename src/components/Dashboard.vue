<script setup>
import { computed } from 'vue'
import { store } from '@/stores/authStore' // import reactive auth store
import { RouterLink } from 'vue-router'

// Reactive user data
const user = computed(() => store.user || { name: 'Guest', tickets: [] })

// Compute ticket stats dynamically
const totalTickets = computed(() => user.value.tickets?.length || 0)
const openTickets = computed(
  () => user.value.tickets?.filter((t) => t.status === 'open').length || 0,
)
const inProgressTickets = computed(
  () => user.value.tickets?.filter((t) => t.status === 'in_progress').length || 0,
)
const resolvedTickets = computed(
  () => user.value.tickets?.filter((t) => t.status === 'closed').length || 0,
)
</script>

<template>
  <section class="dashboardSection">
    <div class="container">
      <h1 class="title">Welcome back, {{ user.name }}</h1>

      <div class="majorStat">
        <h2>Total Tickets</h2>
        <p class="statNumber">{{ totalTickets }}</p>
      </div>

      <div class="minorStats">
        <div class="statCard">
          <h3>Open Tickets</h3>
          <progress :value="openTickets" :max="totalTickets || 1" class="progressBar"></progress>
          <span>{{ openTickets }}</span>
        </div>

        <div class="statCard">
          <h3>In Progress</h3>
          <progress
            :value="inProgressTickets"
            :max="totalTickets || 1"
            class="progressBar"
          ></progress>
          <span>{{ inProgressTickets }}</span>
        </div>

        <div class="statCard">
          <h3>Resolved Tickets</h3>
          <progress
            :value="resolvedTickets"
            :max="totalTickets || 1"
            class="progressBar"
          ></progress>
          <span>{{ resolvedTickets }}</span>
        </div>
      </div>

      <div class="quickActions">
        <RouterLink to="/app/tickets" class="actionBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="plusIcon"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Create Ticket
        </RouterLink>

        <RouterLink to="/app/tickets?view=list" class="actionBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="ticketIcon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5v3A2.25 2.25 0 0118 10.5a2.25 2.25 0 010 4.5 2.25 2.25 0 011.5 2.25v3H3.75v-3A2.25 2.25 0 015.25 15a2.25 2.25 0 010-4.5A2.25 2.25 0 013.75 8.25v-3z"
            />
          </svg>
          View Tickets
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dashboardSection {
  padding: 2rem;
  background-color: #f9f9f9;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
}

.majorStat {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 2rem;
}
h2 {
  font-size: 2rem;
}

.statNumber {
  font-size: 3rem;
  font-weight: bold;
  color: #007bff; /* primary color from your UI */
}

.minorStats {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.statCard {
  flex: 1 1 300px;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.statCard h3 {
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
  color: #555;
}

.progressBar {
  width: 100%;
  height: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  appearance: none;
  margin-bottom: 0.5rem;
}

.progressBar::-webkit-progress-bar {
  background-color: #eee;
  border-radius: 0.5rem;
}

.progressBar::-webkit-progress-value {
  background-color: #007bff;
  border-radius: 0.5rem;
}

.progressBar::-moz-progress-bar {
  background-color: #007bff;
  border-radius: 0.5rem;
}

.statCard span {
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;
}

.quickActions {
  margin-top: 3rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.actionBtn {
  text-decoration: none;
  color: inherit;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.4rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;
  background: #f3f3f3;
  transition: all 0.2s ease;
}

.actionBtn:hover {
  background: #e6e6e6;
  transform: translateY(-2px);
}

/* Icons */
.plusIcon {
  width: 22px;
  height: 22px;
  color: #16a34a; /* green */
}

.ticketIcon {
  width: 22px;
  height: 22px;
  color: #2563eb; /* blue */
}
</style>
