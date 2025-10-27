<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const menuOpen = ref(false)
const router = useRouter()
const route = useRoute()

const handleLogout = () => {
  console.log('logout')
  router.push('/login')
}
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      Tick<span>it</span>
      <img src="/tickit-logo.svg" alt="Tickit logo" />
    </div>

    <div class="hamburger" @click="menuOpen = true">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <ul :class="['navLinks', menuOpen ? 'open' : '']">
      <button class="closeBtn" @click="menuOpen = false">&times;</button>

      <li>
        <RouterLink
          to="/app/dashboard"
          :class="{ activeLink: route.path === '/app/dashboard' }"
          @click="menuOpen = false"
        >
          Dashboard
        </RouterLink>
      </li>

      <li>
        <RouterLink
          to="/app/tickets"
          :class="{ activeLink: route.path === '/app/tickets' }"
          @click="menuOpen = false"
        >
          Tickets
        </RouterLink>
      </li>

      <li>
        <button class="logoutBtn" @click="handleLogout">
          <font-awesome-icon :icon="['fas', 'right-from-bracket']" /> Logout
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem 2rem;
  width: 100%;
  background-color: var(--color-surface-dark);
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 4rem;
  font-family: 'Great Vibes';
  font-style: italic;
  color: white;
  gap: 5px;
}

.logo span {
  color: #23a0fe;
}

.logo img {
  height: 40px;
}

.navLinks {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 3rem;
}

.navLinks li {
  font-size: 1.5rem;
}

.navLinks a {
  position: relative;
  text-decoration: none;
  color: var(--color-text-dark);
  transition: color 0.3s;
}

.navLinks a::before {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: var(--color-primary);
  transition: width 0.3s ease;
}

.navLinks a:hover::before {
  width: 100%;
}

.activeLink::before {
  width: 100%;
}

.navLinks a.activeLink {
  font-weight: 900;
  color: var(--color-primary);
}

.navLinks a:hover,
.navLinks a.activeLink:hover {
  color: var(--color-primary);
}
.navLinks a.activeLink::before {
  width: 100%;
}

.logoutBtn {
  background: none;
  border: none;
  color: red;
  font-weight: 600;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: 0.3s;
}

.logoutBtn:hover {
  color: var(--color-primary);
}

/* ===== Hamburger for mobile ===== */
.hamburger {
  display: none; /* only show on mobile */
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 18px;
  cursor: pointer;
}

.hamburger div {
  height: 3px;
  background-color: white;
  border-radius: 2px;
}
.closeBtn {
  display: none;
}

/* ===== Mobile Slide-in Menu ===== */
@media (max-width: 768px) {
  .navLinks {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px; /* narrower drawer */
    background-color: var(--color-surface-dark);
    flex-direction: column;
    align-items: flex-start;
    padding: 4rem 1.5rem;
    gap: 2rem;
    transform: translateX(100%);
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
    z-index: 20;
  }

  .navLinks.open {
    transform: translateX(0);
  }

  .closeBtn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 5rem;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
    display: block; /* show only inside mobile drawer */
  }

  .hamburger {
    display: flex; /* show on mobile */
  }

  .navbar {
    padding: 1rem 1.5rem;
  }
}
</style>
