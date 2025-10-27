<script setup>
import BackButton from '@/components/BackButton.vue'
import { RouterLink, useRouter } from 'vue-router'
import { reactive, ref } from 'vue'

const router = useRouter()

// Reactive form data
const formData = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})

// Optional message for success or errors
const message = ref('')

const handleSubmit = () => {
  // Basic validation example
  if (!formData.name || !formData.email || !formData.password) {
    message.value = 'Please fill in all required fields.'
    return
  }

  if (formData.password !== formData.confirmPassword) {
    message.value = 'Passwords do not match.'
    return
  }

  // Example: sign-up logic
  console.log('Signing up with:', { ...formData })

  message.value = 'Account created successfully!'
  setTimeout(() => {
    router.push('/app')
    message.value = ''
  }, 2000)
}
</script>

<template>
  <section class="loginSection">
    <div class="container" style="position: relative">
      <BackButton />

      <h1 class="title">Create Account</h1>
      <p class="subtitle">Sign up for a Tickit account</p>

      <form class="form" @submit.prevent="handleSubmit">
        <div class="inputGroup">
          <label for="name">Full Name</label>
          <input type="text" id="name" placeholder="John Doe" v-model="formData.name" required />
        </div>

        <div class="inputGroup">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            v-model="formData.email"
            required
          />
        </div>

        <div class="inputGroup">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            v-model="formData.password"
            required
          />
        </div>

        <div class="inputGroup">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="••••••••"
            v-model="formData.confirmPassword"
            required
          />
        </div>

        <button type="submit" class="btnPrimary">Sign Up</button>

        <span v-if="message" class="success">{{ message }}</span>
      </form>

      <p class="switchAuth">
        Already have an account?
        <RouterLink to="/login">Login here</RouterLink>
      </p>
    </div>
  </section>
</template>

<style scoped>
.loginSection {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-surface-dark);
  color: var(--color-text);
  max-width: 1440px;
  margin: 0 auto;
}

.container {
  background: var(--color-surface);
  padding: 3rem 4rem;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.title {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
}

.subtitle {
  color: var(--color-text);
  margin-bottom: 2rem;
  font-size: 1.3rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.inputGroup {
  text-align: left;
}

label {
  font-weight: 600;
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1.3rem;
  outline: none;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px hsl(var(--color-primary-hsl) / 0.2);
}

.error {
  display: block;
  color: red;
  font-size: 1rem;
  margin-top: 0.3rem;
}
.success {
  display: block;
  color: rgb(0, 255, 0);
  font-size: 1.3rem;
  margin-top: 0.3rem;
}

.btnPrimary {
  background-color: var(--color-primary);
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 10px;
  font-size: 1.3rem;
  cursor: pointer;
  transition:
    background 0.3s ease,
    transform 0.2s ease;
}

.btnPrimary:hover {
  background-color: var(--color-primary-hover);
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 600px) {
  .container {
    padding: 2rem;
    width: 90%;
  }
}

.switchAuth {
  margin-top: 1rem;
  text-align: center;
  font-size: 1rem;
  color: #555;
}

.switchAuth a {
  color: #0070f3;
  text-decoration: none;
  font-weight: 500;
}

.switchAuth a:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
