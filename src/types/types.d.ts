import { Service } from '../lib/service';

declare global {
  interface Window {
    sf: SF;
  }

  interface Window {
    Vue: any;
  }
}

export interface SF {
  vue?: any;
  i18n?: any;
  services: Service;
}
