import { AxiosInstance } from 'axios';
export interface AsyncConfig {
    get(key: string): Promise<string | undefined>;
}
export interface Service {
    createSecureInstance(baseUrl: string): AxiosInstance;
    createUnsecureInstance(baseUrl: string): AxiosInstance;
    getToken(): string;
    getSettings(): any;
    setConfig(value: any): any;
    signOut(): any;
    checkUser(): any;
    getSolution(): string;
    setTheme(isDark: boolean): void;
    onThemeChange(isDark: boolean): void;
    store: any;
    vuetify: any;
    dialog: any;
    router: any;
    asyncConfig: AsyncConfig;
}
