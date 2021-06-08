import { AxiosInstance } from 'axios';
export interface AsyncConfig {
    get(key: string): Promise<string | undefined>;
}
export interface ApiInstanceOptions {
    customHeaders?: object;
    errorMiddleware?(d: Date): void;
    loader?: boolean;
    disableErrorNotifications?: boolean;
}
export interface Service {
    createSecureInstance(baseUrl: string, options?: ApiInstanceOptions): AxiosInstance;
    createUnsecureInstance(baseUrl: string, options?: ApiInstanceOptions): AxiosInstance;
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
