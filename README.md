# ads-testing

Simple React Native app (Expo) with a single page for mobile ad testing layout.

## Project Location

- App source: `mobile-app`

## Run App Preview

1. Install dependencies (already done once, run again if needed):

```bash
cd mobile-app
npm install
```

2. Create a development build (required for AdMob native module):

```bash
cd mobile-app
npx expo run:android
```

3. Start Metro:

```bash
cd mobile-app
npm start
```

4. Open your development build on device/emulator.

## AdMob Auto Switch (`__DEV__`)

- In development (`__DEV__ === true`): app uses `TestIds.BANNER` (Google test ads).
- In production build (`__DEV__ === false`): app uses your real Ad Unit IDs.

Configured files:

- `mobile-app/App.js`: `__DEV__` switch for banner ad unit.
- `mobile-app/app.json`: AdMob plugin with `androidAppId` and `iosAppId`.

## Required Before Release

Replace placeholder values with your real AdMob IDs:

```bash
mobile-app/App.js
mobile-app/app.json
```

Then create a production build (EAS or local release build).