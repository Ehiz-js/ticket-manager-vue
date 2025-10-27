<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="brand">
        <img src="/tickit-logo.svg" alt="Tickit logo" />
        <h3>Tick<span>it</span></h3>
      </div>

      <p class="copyright">© {{ currentYear }} Tickit. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-surface-dark);
  color: var(--color-text-dark);
  padding: 2rem 1rem;
  max-width: 1440px;
  margin: 0 auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 2rem;
  font-family: 'Great Vibes', cursive;
}

.brand img {
  height: 35px;
  width: 35px;
}

.brand span {
  color: var(--color-primary);
}

copyright {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    gap: 1rem;
  }

  .links {
    gap: 1rem;
  }
}
</style>
