<script>
  import TwoColumnLayout from '../Elements/TwoColumnLayout.svelte';
  import StandardPageLayout from '../Elements/StandardPageLayout.svelte';
  import SingleColorSocialLinks from '../Elements/SingleColorSocialLinks.svelte';

  import company from '../static-content';
</script>

<StandardPageLayout title="About">
  <TwoColumnLayout>
    <div class='center-vertically' slot='first'>
      <img class="logo" src={company.logo} alt="{company.name} Logo"/>
    </div>
    <div slot='second'>
      <h1>{company.name}</h1>
      <p>{company.slogan}</p>

      <SingleColorSocialLinks iconWidth="32px"/>
    </div>
  </TwoColumnLayout>
</StandardPageLayout>

<style>
  .center-vertically {
    display: flex;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
  }

  h1 {
    color: var(--alternate-color);
  }

  p {
    color: var(--alternate-color-light);
    font-size: 1.1em;
    line-height: 1.3em;
  }

  .logo {
    width: 360px;
    max-width: 80vw;
    height: auto;
  }

  .quote {
    border-left-color: var(--secondary-color);
    border-left-style: solid;
    border-left-width: 6px;
    padding: 1em;
    font-size: 1.4em;
    font-weight: 700;
    color: var(--alternate-color);
    margin: 1.5em 0px;
  }
</style>
