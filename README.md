# @sf/sf-frames

KOÇ
DIGITAL
Safe
Frames

-

Main
Frame
Micro-Frontend
VUE.JS
Interface

### install with npm

````
npm install
````

### build with npm

```
npm run build
```

### Define Main Frame with services

```javascript

const core = {
  store,
  vuetify,
  router
}

defineSf(Vue, {
  ...Components,
  ...core,
  i18n,
  render: h => h(App)
}, {
  ...core,
  dialog,
  ...services
});
```

### Default Services

```javascript
{
    getSolution,
    checkUser,
    createSecureInstance,
    createUnsecureInstance,
    getToken,
    getSettings,
    setConfig,
    signOut
}
```

### Create Main Frame API Instance
```javascript
import {revokeSf} from '@sf/sf-frames';

const sfCore = revokeSf();
const instance = sfCore.services.createSecureInstance(`${config.API.BASEURL}`, {loader: true});

instance.get(url);
instance.post(url, data);
```

### Main Frame API Options
```javascript
interface ApiInstanceOptions {
    customHeaders?: object;
    errorMiddleware?(d: Date): void;
    loader?: boolean;
    disableErrorNotifications?: boolean;
}
```
