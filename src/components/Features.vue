<script setup></script>

<template>
  <section class="features">
    <h2 id="features-heading">Why Choose Tickit?</h2>
    <p class="subtext">
      Manage your tickets smarter and faster — with features built for clarity, control, and speed.
    </p>

    <div class="grid">
      <article class="feature">
        <img src="/illustrations/manage.svg" alt="Organized ticket dashboard illustration" />
        <h3>Smart Ticket Management</h3>
        <p>
          Create, view, update, and delete tickets effortlessly. Keep every task in check with
          intuitive controls.
        </p>
      </article>

      <article class="feature">
        <img src="/illustrations/insights.svg" alt="Real-time ticket analytics illustration" />
        <h3>Real-Time Insights</h3>
        <p>
          Get instant statistics on your tickets — open, in-progress, or resolved — all from a
          single dashboard.
        </p>
      </article>

      <article class="feature">
        <img src="/illustrations/secure.svg" alt="Secure authentication illustration" />
        <h3>Secure Access</h3>
        <p>
          Tickit ensures your data is protected through session-based access. Work confidently and
          safely every time.
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 6rem 2rem;
  background-color: var(--color-surface);
  color: var(--color-text);
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

.features h2 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.subtext {
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0 auto 5rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  justify-items: center;
}

.feature {
  background-color: var(--color-surface-dark);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 8px rgba(0, 0, 0, 0.6);
}

.feature img {
  height: 300px;
  margin-bottom: 1.5rem;
}

.feature h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.feature p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--color-text-dark);
}

/* Responsive */
@media (max-width: 768px) {
  .features h2 {
    font-size: 2.5rem;
  }
  .subtext {
    font-size: 1.3rem;
  }
  .feature {
    padding: 2rem;
  }
}
</style>
