<script lang="ts">
  import { getSlugForName, genRGBA, isLandscape } from "$lib/utils";
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
    {#await isLandscape(item.image) then isLandscape}
      <div
        class="item-image {getSlugForName(item.name)} {isLandscape
          ? 'resize-image'
          : ''}"
        style="right: {getImageXPosition(i)}; top: {getImageYPosition(
          i
        )}; border-color: {genRGBA(0.8)}"
      >
        <img src={item.image} alt={item.description} />
        <div class="item-info">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      </div>
    {/await}
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
    background-color: #fff;
    line-height: 0;
  }

  .item-image.resize-image {
    width: 400px;
  }

  .item-image img {
    width: 100%;
    height: auto;
  }

  .item-info {
    display: none;
    line-height: normal;
    padding: 0px 10px 12px 10px;
  }

  .item-info h2 {
    font-family: "Wide";
    margin: 5px 0;
  }

  .item-info p {
    margin: 0;
  }

  .item-hovered .item-info {
    display: block;
  }

  @media only screen and (max-width: 900px) {
    .item-image {
      display: none;
    }
  }

  @media only screen and (min-width: 1600px) {
    .item-image {
      width: 400px !important;
    }
    .item-image.resize-image {
      width: 600px !important;
    }
  }

  @media only screen and (max-width: 1000px) {
    .item-image {
      width: 100px !important;
    }
    .item-image.resize-image {
      width: 200px !important;
    }
  }
</style>
