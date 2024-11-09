<script lang="ts">
  import Footer from "./Footer.svelte";
  import ImageStack from "./ImageStack.svelte";
  import SectionList from "./SectionList.svelte";
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />

  <link rel="manifest" href="manifest.webmanifest" />
  <link rel="apple-touch-icon" sizes="60x60" href="./images/pwa.png" />

  <meta
    property="og:image"
    content="https://raw.githubusercontent.com/skinsshark/winyc/master/images/preview.png"
  />

  <link rel="shortcut icon" href="./favicon.ico" />

  <title>when in nyc</title>
</svelte:head>

<main>
  <ImageStack />
  <SectionList />
</main>

<Footer />

<style>
  @font-face {
    font-family: "Main";
    src: url("./fonts/Main.ttf") format("truetype");
  }

  @font-face {
    font-family: "Wide";
    src: url("./fonts/Wide.ttf") format("truetype");
  }

  :global(body) {
    position: relative;
    background-color: #fff;
    font-family: "Main";
    padding: 10px;
    min-height: 2000px;
  }

  * {
    box-sizing: border-box;
  }
</style>
