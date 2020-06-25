<script>
  import company from '../static-content.js';
</script>

 <div class="hero-image">
  <div class="hero-text">
    <h1>{company.name}</h1>
    <p>{company.slogan}</p>
  </div>
</div>

<style>
  .hero-image {
    background-color: #101818;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/hero.jpg");

    min-height: 80vh;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .hero-text {
    text-align: center;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--primary-color);
    padding: 2em;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 2em;
  }

  h1 {
    font-size: 2.6em;
  }

  p {
    color: var(--primary-color);
    font-size: 1.2em;
  }
</style>
