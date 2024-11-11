<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    fillSvgPaths();
  });

  function fillSvgPaths() {
    let paths = document.querySelectorAll("path");
    let svg = document.querySelector("svg");
    if (!svg) return;

    let svgTop = svg.getBoundingClientRect().top + window.scrollY;
    let scrollY = window.scrollY + window.innerHeight;
    let scrollPercentage =
      (scrollY - svgTop) / (document.documentElement.scrollHeight - svgTop);

    scrollPercentage = Math.max(0, Math.min(scrollPercentage, 1));

    const pathIndex = Math.floor(scrollPercentage * paths.length);
    for (let i = 0; i < paths.length; i++) {
      let path = paths[i];
      let pathLength = path.getTotalLength();
      path.style.strokeDasharray = pathLength.toString();
      path.style.strokeDashoffset = pathLength.toString();

      if (i < pathIndex) {
        path.style.strokeDashoffset = "0";
      } else if (i === pathIndex) {
        let partialDraw = pathLength * (scrollPercentage * paths.length - i);
        path.style.strokeDashoffset = (pathLength - partialDraw).toString();
      } else {
        path.style.strokeDashoffset = pathLength.toString();
      }
    }
  }
</script>

<svelte:window on:scroll={fillSvgPaths} />

<footer>
  <svg
    width="237"
    height="281"
    viewBox="0 0 237 281"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 130.503C15.2487 130.503 22.5378 125.524 27.4927 122.333C39.3308 114.712 50.815 103.869 57.0051 91.1111C67.7691 68.9267 76.2579 42.7138 76.2579 17.7734C76.2579 15.9804 77.0217 13.0869 74.5479 13.0869C71.4632 13.0869 68.8448 17.8276 67.5815 20.18C64.1778 26.5179 61.3714 32.342 59.7284 39.4327C57.8968 47.3376 55.984 55.5361 53.4586 63.2453C46.7149 83.8313 42.4298 105.368 48.0121 126.767C48.8651 130.036 49.8002 134.228 52.7619 136.203C56.4554 138.665 60.4414 139.079 64.7316 139.75C70.6423 140.673 76.5147 141.333 82.5277 141.333C84.1546 141.333 87.0481 142.021 87.6575 140.193"
      stroke="black"
      stroke-width="11"
      stroke-linecap="round"
    />
    <path
      d="M156.655 51.3842C156.655 38.4349 150.098 28.2042 138.13 22.8852C134.936 21.4654 130.912 20.0288 127.586 22.0618C121.731 25.6396 117.336 30.9024 114.761 37.198C109.863 49.1708 112.118 67.4729 121.442 76.5901C125.396 80.4558 130.551 83.1058 135.122 86.1531C144.533 92.4271 153.633 99.2065 162.924 105.659C170.663 111.033 177.907 117.12 185.724 122.379C187.434 123.529 189.369 124.222 190.284 126.052"
      stroke="#FF0000"
      stroke-width="11"
      stroke-linecap="round"
    />
    <path
      d="M157.795 46.8244C158.135 43.4193 161.01 41.1148 163.209 38.8446C168.31 33.579 174.666 29.1929 180.594 24.9117C191.027 17.3769 203.754 13.1954 216.503 13.1954C219.079 13.1954 225.313 11.9471 226.161 15.7604C227.084 19.9145 227.332 23.6378 227.332 28.015C227.332 34.7978 227.648 42.1174 224.451 48.3127C220.415 56.1324 216.498 64.0416 212.513 71.9036C210.079 76.7048 207.833 81.6869 204.818 86.1531C200.594 92.4104 195.582 97.768 190.315 103.189C181.796 111.959 172.457 120.084 164.634 129.472"
      stroke="#FF0000"
      stroke-width="11"
      stroke-linecap="round"
    />
    <path
      d="M29.6085 267.287C28.5097 244.937 27.4108 222.587 26.312 200.237C26.0312 194.525 26.4094 188.222 24.9145 182.774C24.3684 180.784 23.8957 181.887 24.4603 183.208C25.8255 186.403 30.342 189.94 32.7719 192.342C39.8115 199.303 46.5557 206.836 53.0022 214.333C55.4225 217.148 57.2145 220.656 59.5443 223.586C62.0667 226.758 65.0338 229.498 67.2929 232.875C69.9038 236.778 72.8253 241.424 76.3013 244.575C78.0488 246.158 79.1768 249.18 81.2776 250.354C84.5858 252.202 87.1361 256.329 90.1228 258.732C90.3118 258.884 90.1295 256.289 90.0969 255.627C89.8056 249.702 89.5143 243.777 89.223 237.852C88.8073 229.397 88.3917 220.942 87.976 212.487C87.3604 199.967 86.7292 187.129 86.1287 174.913"
      stroke="black"
      stroke-width="11"
      stroke-linecap="round"
    />
    <path
      d="M131 180.26C136.543 180.26 143.364 187.962 147.118 191.026C152.262 195.226 157.264 199.508 162.476 203.629C166.037 206.445 165.288 209.809 167.795 213.034C168.808 214.336 169.603 215.696 170.772 216.865C172.491 218.584 173.579 216.845 175.205 215.219C188.97 201.454 198.715 183.792 212.507 170"
      stroke="black"
      stroke-width="11"
      stroke-linecap="round"
    />
    <path
      d="M172.039 219.588C172.039 231.811 172.039 244.034 172.039 256.257C172.039 258.73 171.541 261.911 172.609 264.047"
      stroke="black"
      stroke-width="11"
      stroke-linecap="round"
    />
  </svg>

  <i
    >✁ Forked+Design from <a
      href="https://sharonzheng.com/winyc/"
      target="_blank">Sharon Zheng</a
    ></i
  >
</footer>

<style>
  footer {
    height: 100vh;
    display: flex;
    align-items: center;
  }

  i {
    position: absolute;
    bottom: 0;
  }

  svg {
    margin-left: 105px;
  }

  @media only screen and (max-width: 767px) {
    svg {
      margin-left: 0;
    }
  }
</style>
