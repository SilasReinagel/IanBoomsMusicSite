<script>
  import TwoColumnLayout from '../Elements/TwoColumnLayout.svelte';
  import DividerWithText from '../Elements/DividerWithText.svelte';

  let loadMusic = false;
  window.onscroll = function() {
    loadMusic = true;
  };
</script>

<div id="portfolio" class="column">
  <DividerWithText text="Portfolio"/>
  <TwoColumnLayout>
    <div class="column" slot="first">
      {#if loadMusic}
        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/796170781&color=%237293dd&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/759448999&color=%237293dd&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/735064546&color=%237293dd&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/705549928&color=%237293dd&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      {/if}
      {#if !loadMusic}
        <div class="skeleton"/>
        <div class="skeleton"/>
        <div class="skeleton"/>
        <div class="skeleton"/>
      {/if}
    </div>
    <div class="column" slot="second">    
      {#if loadMusic}
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/749858857&color=%237293dd&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/737987308&color=%237293dd&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/721188562&color=%237293dd&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/693545635&color=%237293dd&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      {/if}
      {#if !loadMusic}
        <div class="skeleton"/>
        <div class="skeleton"/>
        <div class="skeleton"/>
        <div class="skeleton"/>
      {/if}
    </div>
  </TwoColumnLayout>
</div>

<style>
  #portfolio {
    min-height: 600px;
  }

  column {
    display: flex;
    flex-direction: column;
  }

  iframe {
    margin-bottom: 2em;
    background-color: #fff;
    border-radius: 6px;
  }

  .skeleton {
    height: 166px;
    border-radius: 6px;
    background-color: #dedede;
  }
</style>