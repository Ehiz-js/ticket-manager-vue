<script setup></script>

<template>
  <section class="notFoundSection">
    <div class="container">
      <h1 class="title">404</h1>
      <p class="subtitle">Oops! Page Not Found</p>
      <p class="description">
        The page you are looking for might have been removed, had its name changed, or is
        temporarily unavailable.
      </p>
      <button class="btnPrimary">Go Back Home</button>
    </div>
  </section>
</template>

<style scoped>
.notFoundSection {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f5f5f5;
  text-align: center;
  padding: 2rem;
}

.container {
  max-width: 500px;
  margin: auto;
}

.title {
  font-size: 8rem;
  font-weight: 700;
  color: #ff4c4c;
  margin: 0;
}

.subtitle {
  font-size: 2rem;
  margin: 1rem 0;
  color: #333;
}

.description {
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 2rem;
}

.btnPrimary {
  background-color: #0070f3;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btnPrimary:hover {
  background-color: #005bb5;
}
</style>
