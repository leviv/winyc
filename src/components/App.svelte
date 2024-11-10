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

  <meta property="og:title" content="When in nyc" />
  <meta name="description" content="Levi's guide to nyc" />
  <meta property="og:image" content="preview.png" />

  <link
    rel="icon"
    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🗽</text></svg>"
  />

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
    src: url("$lib/fonts/Main.ttf") format("truetype");
  }

  @font-face {
    font-family: "Wide";
    src: url("$lib/fonts/Wide.ttf") format("truetype");
  }

  :global(body) {
    position: relative;
    background-color: #fff;
    font-family: "Main";
    padding: 10px;
    min-height: 1500px;
  }

  * {
    box-sizing: border-box;
  }
</style>
