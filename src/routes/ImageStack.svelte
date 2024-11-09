<script lang="ts">
  import { getSlugForName, genRGBA } from "$lib/utils";
  import data from "$lib/data.json";

  const getImageXPosition = (i: number) => {
    const rowIndex = Math.ceil((i + 1) / 13);
    const colIndex = i % 13;
    const positionX = (colIndex + 1) * 15 + 50 + 10 * rowIndex;
    return positionX + "px";
  };

  const getImageYPosition = (i: number) => {
    const positionY = (i + 1) * 8 + 20;
    return positionY + "px";
  };
</script>

<div id="images-container">
  {#each data.flatMap((section) => section.items) as item, i}
    <img
      class="item-image {getSlugForName(item.name)}"
      src={item.image}
      alt={item.description}
      style="right: {getImageXPosition(i)}; top: {getImageYPosition(
        i
      )}; border-color: {genRGBA(0.8)}"
    />
  {/each}
</div>

<style>
  .item-image {
    width: 200px;
    transition: 0.15s linear width;
    position: fixed;
    top: 0;
    border-top: 5px solid #fff;
    border-right: 5px solid #fff;
  }

  @media only screen and (max-width: 900px) {
    .item-image {
      display: none;
    }
  }

  img.resizeImage {
    width: auto !important;
    height: 200px;
  }

  @media only screen and (min-width: 1600px) {
    img {
      width: 400px !important;
    }

    img.resizeImage {
      width: auto !important;
      height: 400px;
    }
  }

  @media only screen and (max-width: 1000px) {
    img {
      width: 100px !important;
    }

    img.resizeImage {
      width: auto !important;
      height: 100px;
    }
  }
</style>
