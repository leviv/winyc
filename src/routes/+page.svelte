<script lang="ts">
	import { onMount } from 'svelte';
	import data from '$lib/data.json';

	onMount(() => {
		const setSectionHeights = () => {
			[...document.getElementsByTagName('aside')].map((section, i) => {
				const sectionContent: HTMLElement | null = document.querySelector(
					'article.' + section.classList[0]
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
	let _limit = 10; // Limit the number of colors we can generate

	const genRGBA = () => {
		return `
    rgba(
      ${Math.round(Math.random() * 255)},
      ${Math.round(Math.random() * 255)},
      ${Math.round(Math.random() * 255)}, 0.8
    )
  `;
	};

	const setBackgroundColor = () => {
		document.body.style.backgroundColor = `
    rgba(
      ${Math.round(Math.random() * 255)},
      ${Math.round(Math.random() * 255)},
      ${Math.round(Math.random() * 255)}, 0.2
    )
  `;
	};

	// Get a string suitable for id/class names given a strong
	const getSlugForName = (name: String) => {
		return name.replace(/[ .,(){}\[\]]/g, '-');
	};

	const seeImage = (id: string) => {
		[...document.getElementsByTagName('img')].map((image) => {
			image.style.opacity = '0.4';
			document.body.classList.add('notHoveringImage');
		});

		const itemImage: HTMLElement | null = document.querySelector('img.' + id);
		if (itemImage) {
			const newZIndex = _zIndex + 1;
			itemImage.style.zIndex = newZIndex.toString();
			_zIndex = newZIndex;

			itemImage.style.opacity = '1';
			document.body.classList.remove('notHoveringImage');
		}
	};

	const notHovering = (image: HTMLElement) => {
		if (image) {
			image.style.opacity = '0.5';
			document.body.classList.add('notHoveringImage');
		}
	};

	const getImageXPosition = (i: number) => {
		const rowIndex = Math.ceil((i + 1) / 13);
		const colIndex = i % 13;
		const positionX = (colIndex + 1) * 15 + 50 + 10 * rowIndex;
		return positionX + 'px';
	};

	const getImageYPosition = (i: number) => {
		const positionY = (i + 1) * 8 + 20;
		return positionY + 'px';
	};

	const itemMouseEnter = (id: string) => {
		if (_limit === 0) {
			setBackgroundColor();
			_limit = 10;
		} else {
			_limit--;
		}

		seeImage(id);
	};

	const itemMouseLeave = (id: string) => {
		const imageElement: HTMLElement | null = document.querySelector('img.' + id);
		if (imageElement) {
			notHovering(imageElement);
		}
	};
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

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
	<!-- Load images -->
	{#each data.flatMap((section) => section.items) as item, i}
		<img
			class="item-image {getSlugForName(item.name)}"
			src={item.image}
			alt={item.description}
			style="right: {getImageXPosition(i)}; top: {getImageYPosition(i)}; border-color: {genRGBA()}"
		/>
	{/each}

	<section class="favorite">
		<h2><span>My</span> Fave <br />✜ ✜ ✜</h2>
	</section>
	<section class="items">
		{#each data as section}
			<div class="wrapper">
				<aside class={getSlugForName(section.title)}><h2>{section.title}</h2></aside>
				<article class={getSlugForName(section.title)}>
					<ul>
						{#each section.items as item}
							<li
								class={getSlugForName(item.name)}
								on:mouseleave={() => itemMouseLeave(getSlugForName(item.name))}
								on:mouseenter={() => itemMouseEnter(getSlugForName(item.name))}
							>
								<a href={item.link} target="_blank">{item.name}</a>
							</li>
						{/each}
					</ul>
				</article>
			</div>
		{/each}
	</section>
</main>
<footer>
	<i>✁ Disclaimer: I don't know pizza and not all locations have images (*)</i>
</footer>

<style>
	@font-face {
		font-family: 'Main';
		src: url('./fonts/Main.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Wide';
		src: url('./fonts/Wide.ttf') format('truetype');
	}

	:global(body) {
		position: relative;
		background-color: #fff;
		font-family: 'Main';
		padding: 10px;
		min-height: 2000px;
	}

	* {
		box-sizing: border-box;
	}

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
		cursor: url('./images/face.png'), auto;
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

	.item-image {
		width: 200px;
		opacity: '0.5';
		transition: 0.15s linear width;
		position: fixed;
		top: 0;
		border-top: 5px solid #fff;
		border-right: 5px solid #fff;
	}

	img.resizeImage {
		width: auto !important;
		height: 200px;
	}

	.notHoveringImage img {
		opacity: 1 !important;
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

	@media only screen and (min-width: 901px) {
		.imagesLoading {
			pointer-events: none;
		}
	}

	@media only screen and (max-width: 900px) {
		.item-image {
			display: none;
		}
	}

	aside,
	.favorite {
		font-family: 'Wide';
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
		content: '- ';
	}

	@media only screen and (max-width: 767px) {
		ul {
			margin-top: 15px;
		}
	}

	footer {
		position: absolute;
		bottom: 10px;
	}
</style>
