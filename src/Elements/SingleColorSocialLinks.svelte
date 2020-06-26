<script>
  export let iconWidth = "1.2em";

  import company from '../static-content';
</script>

  <div class="social-links">
    {#if company.social.soundcloud}
    <a class="social-icon soundcloud-orange" href={company.social.soundcloud} target=”_blank”>
      <img src="/social/soundcloud.svg" alt="Soundcloud Icon" loading="lazy" style="width: {iconWidth}; height: auto;"/>
    </a>
    {/if}
    {#if company.social.yelp}
    <a class="social-icon yelp-red" href={company.social.yelp} target=”_blank”>
      <img src="/social/yelp.svg" alt="Yelp Icon" loading="lazy" style="width: {iconWidth}; height: auto;"/>
    </a>
    {/if}
    {#if company.social.facebook}
    <a class="social-icon facebook-blue" href={company.social.facebook} target=”_blank”>
      <img src="/social/facebook.svg" alt="Facebook Icon" loading="lazy" style="width: {iconWidth}; height: auto;"/>
    </a>
    {/if}
    {#if company.social.twitter}
    <a class="social-icon twitter-blue" href={company.social.twitter} target=”_blank”>
      <img src="/social/twitter.svg" alt="Twitter Icon" loading="lazy" style="width: {iconWidth}; height: auto;"/>
    </a>
    {/if}
    {#if company.social.twitch}
    <a class="social-icon twitch-purple" href={company.social.twitch} target=”_blank”>
      <img src="/social/twitch.svg" alt="Twitch Icon" loading="lazy" style="width: {iconWidth}; height: auto;"/>
    </a>
    {/if}
  </div>

<style>
  .social-links {
    list-style: none;
    display: flex;
    flex-direction: row;
    background-color: transparent;
  }

  .social-icon {
    margin: 0 1em;
  }

  .social-icon img {
    filter: invert(.5) brightness(3);
  }

  .social-icon img:hover {
    filter: invert(.5) brightness(1.8);
  }

  .twitter-blue img:hover {
    filter: brightness(0.5) sepia(1) hue-rotate(140deg) saturate(6);
  }

  .facebook-blue img:hover {
    filter: brightness(0.3) sepia(1) hue-rotate(180deg) saturate(5);
  }

  .yelp-red img:hover {
    filter: brightness(0.4) sepia(1) hue-rotate(300deg) saturate(8);
  }

  .soundcloud-orange img:hover {
    filter: invert(47%) sepia(29%) saturate(3021%) hue-rotate(346deg) brightness(104%) contrast(101%);
  }

  .twitch-purple img:hover {
    filter: invert(33%) sepia(61%) saturate(4460%) hue-rotate(249deg) brightness(100%) contrast(101%);
  }
  
  @media screen and (max-width: 600px) {
    .social-links {
      display: none;
    }
  }
</style>
