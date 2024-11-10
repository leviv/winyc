# When in NYC

Forked from Sharon Zheng: https://github.com/skinsshark/winyc

## Developing

```bash
git clone git@github.com:leviv/winyc.git
cd winyc
npm install
```

Start the server and open the app in a new browser tab

```bash
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deplyoing

Just pushing should work. I added `./github/workflows/deploy.yml` which runs on every push
