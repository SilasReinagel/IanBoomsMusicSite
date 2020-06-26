<script>
  import TwoColumnLayout from '../Elements/TwoColumnLayout.svelte';
  import StandardPageLayout from '../Elements/StandardPageLayout.svelte';
  import SingleColorSocialLinks from '../Elements/SingleColorSocialLinks.svelte';

  import company from '../static-content';
</script>

<StandardPageLayout title="About">
  <TwoColumnLayout>
    <div class='center-vertically logo-box' slot='first'>
      <img class="logo" src={company.logo} alt="{company.name} Logo"/>
    </div>
    <div slot='second'>
      <h1>{company.name}</h1>
      <p>{company.slogan}</p>

      <p>Ian Booms is an music composer, with a special love for Indie Game Developers.</p>
      <p>On the first Sunday of each month, he hosts the #GameAudio listening party. For more information on the listening party join the Discord</p>
      <a href="https://t.co/Qc8X0GIe0D?amp=1">#GameAudio Discord</a>

      <div class="margin-top">
        <SingleColorSocialLinks iconWidth="32px" hideMobile={false}/>
      </div>
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

  .margin-top {
    margin-top: 3em;
  }

  h1 {
    color: var(--alternate-color);
  }

  p {
    color: var(--alternate-color-light);
    font-size: 1.1em;
    line-height: 1.3em;
  }

  a {
    font-size: 1.1em;
  }

  .logo-box {
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
