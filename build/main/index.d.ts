import { Service } from './lib/service';
interface SF {
    vue?: any;
    i18n?: any;
    services: Service;
}
declare function revokeSf(): SF;
declare const defineSf: (Vue: any, props: any, services: any) => any;
declare const setServices: (services: Service) => void;
export { setServices, revokeSf, defineSf, SF };
