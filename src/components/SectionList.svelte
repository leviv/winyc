<script lang="ts">
  import { onMount } from "svelte";
  import { getSlugForName, setBackgroundColor } from "$lib/utils";
  import data from "$lib/data.json";

  const handleScroll = () => {
    const placeItems = [...document.getElementsByClassName("place-item")].sort(
      (a, b) => {
        const aRect = a.getBoundingClientRect();
        const bRect = b.getBoundingClientRect();
        return aRect.top - bRect.top;
      }
    );

    let found = false;

    for (let item of placeItems) {
      const itemRect = item.getBoundingClientRect();
      const itemImage: HTMLElement | null = document.querySelector(
        "." + item.id
      );

      if (itemRect.top > 0 && !found) {
        itemImage?.classList.add("item-scrolled-mobile");
        found = true;
      } else {
        itemImage?.classList.remove("item-scrolled-mobile");
      }
    }
  };

  onMount(() => {
    // Set aside heights so sticky headers work
    const setSectionHeights = () => {
      [...document.getElementsByTagName("aside")].map((section, i) => {
        const sectionContent: HTMLElement | null = document.querySelector(
          "article." + section.classList[0]
        );
        if (sectionContent) {
          section.style.height = `${sectionContent.offsetHeight}px`;
        }
      });
    };

    setSectionHeights();
    setBackgroundColor();
  });

  let _zIndex = 0;
  let _colorChangeLimit = 10;

  // When an item is hovered, we want to see the corresponding image on top and full opacity
  const seeImage = (className: string) => {
    // Fade all images except the one we care about
    [...document.getElementsByClassName("item-image")].map((image) => {
      const imageElement = image as HTMLElement;
      imageElement.style.opacity = "0.5";
    });

    const itemImage: HTMLElement | null = document.querySelector(
      "." + className
    );
    if (itemImage) {
      const newZIndex = _zIndex + 1;
      itemImage.style.zIndex = newZIndex.toString();
      _zIndex = newZIndex;
      itemImage.style.opacity = "1";
      itemImage.classList.add("item-hovered");
    }
  };

  // When no item is hovered, we want to see all images at full opacity
  const notHovering = (image: HTMLElement) => {
    if (image) {
      [...document.getElementsByClassName("item-image")].map((image) => {
        const imageElement = image as HTMLElement;
        imageElement.style.opacity = "1";
        image.classList.remove("item-hovered");
      });
    }
  };

  const itemMouseEnter = (className: string) => {
    // Change background color every 10th item hover
    if (_colorChangeLimit === 0) {
      setBackgroundColor();
      _colorChangeLimit = 10;
    } else {
      _colorChangeLimit--;
    }

    seeImage(className);
  };

  const itemMouseLeave = (id: string) => {
    const imageElement: HTMLElement | null = document.querySelector("." + id);
    if (imageElement) {
      notHovering(imageElement);
    }
  };
</script>

<svelte:window on:scroll={handleScroll} />

<section class="favorite">
  <h2><span>My</span> Fave <br />✜ ✜ ✜</h2>
</section>
<section class="items">
  {#each data as section}
    <div class="wrapper">
      <aside class={getSlugForName(section.title)}>
        <h2>{section.title}</h2>
      </aside>
      <article class={getSlugForName(section.title)}>
        <ul>
          {#each section.items as item}
            <li
              class={"place-item " + getSlugForName(item.name)}
              id={getSlugForName(item.name)}
              on:mouseleave={() => itemMouseLeave(getSlugForName(item.name))}
              on:mouseenter={() => itemMouseEnter(getSlugForName(item.name))}
            >
              <a href={item.link} target="_blank"
                >{item.name}
                {#if item.location}
                  <span>({item.location})</span>
                {/if}
              </a>
            </li>
          {/each}
        </ul>
      </article>
    </div>
  {/each}
</section>

<style>
  a {
    color: #000;
    text-decoration: none;
  }

  a:hover {
    font-style: italic;
  }

  h2 {
    margin: 0;
  }

  .favorite {
    position: fixed;
  }

  .favorite br {
    display: none;
  }

  .favorite span {
    cursor: url("/face.png"), auto;
  }

  .items {
    margin-left: 105px;
    line-height: 1.5;
  }

  .wrapper {
    padding: 10px 10px 10px 0;
    margin-bottom: 20px;
    position: relative;
  }

  @media only screen and (min-width: 901px) {
    .imagesLoading {
      pointer-events: none;
    }
  }

  aside,
  .favorite {
    font-family: "Wide";
  }

  aside {
    text-decoration: underline;
    vertical-align: top;
    position: relative;
  }

  aside h2 {
    position: -webkit-sticky;
    position: sticky;
    /* top: 18px; */
    top: 45px;
    line-height: 1;
  }

  article,
  aside {
    display: inline-block;
  }

  article {
    width: 75%;
  }

  aside {
    width: 15%;
  }

  @media only screen and (max-width: 767px) {
    .favorite {
      position: relative;
    }

    .favorite br {
      display: block;
    }

    .items {
      margin-left: 0;
    }

    article,
    aside {
      width: 100%;
      height: auto !important;
    }

    aside h2 {
      position: relative;
      top: 0;
    }
  }

  ul {
    list-style-type: none;
    margin-top: 5px;
    display: inline-block;
  }

  ul li::before {
    content: "- ";
  }

  @media only screen and (max-width: 767px) {
    ul {
      margin-top: 15px;
    }
  }
</style>
