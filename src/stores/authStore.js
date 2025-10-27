// src/stores/authStore.js
import { reactive, watch } from 'vue'

// Helper to read/write localStorage
const LOCAL_STORAGE_KEY = 'ticketapp_session'

function loadUsers() {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

function saveUsers(users) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users))
}

// Reactive store
export const store = reactive({
  user: null,
  isAuthenticated: false,
  users: loadUsers(),

  // Login function
  login(email, password) {
    const foundUser = this.users.find((u) => u.email === email && u.password === password)
    if (foundUser) {
      this.user = foundUser
      this.isAuthenticated = true
      return `Login successful! Welcome back ${foundUser.name}`
    } else {
      return 'Invalid email or password.'
    }
  },

  // Signup function
  signup(name, email, password) {
    const userExists = this.users.some((u) => u.email === email)
    if (userExists) return 'User already exists! Please login.'

    const newUser = { name, email, password, tickets: [] }
    this.users.push(newUser)
    this.user = newUser
    this.isAuthenticated = true

    saveUsers(this.users)
    return 'Signup successful!'
  },

  // Logout function
  logout() {
    this.user = null
    this.isAuthenticated = false
  },

  // Ticket CRUD
  addTicket(newTicket) {
    if (!this.user) return

    this.user.tickets.push(newTicket)
    this.updateUserInUsers()
  },

  updateTicket(updatedTicket) {
    if (!this.user) return

    this.user.tickets = this.user.tickets.map((t) =>
      t.id === updatedTicket.id ? updatedTicket : t,
    )
    this.updateUserInUsers()
  },

  deleteTicket(ticket) {
    if (!this.user) return

    this.user.tickets = this.user.tickets.filter((t) => t.id !== ticket.id)
    this.updateUserInUsers()
  },

  // Internal helper to sync current user with users array and localStorage
  updateUserInUsers() {
    this.users = this.users.map((u) => (u.email === this.user.email ? this.user : u))
    saveUsers(this.users)
  },
})

// Watch for changes in users and persist automatically
watch(
  () => store.users,
  (newVal) => saveUsers(newVal),
  { deep: true },
)
