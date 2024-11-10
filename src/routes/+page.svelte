<script lang="ts">
  // Disable server-side rendering for static site
  export const ssr = false;
  export const prerender = true;

  import App from "../components/App.svelte";
</script>

<App />
