export interface App {
    id: number;
    name: string;
    description: string;
    callbackUrl: string;
    isLive: boolean;
    masterKey: string;
    livePrivateKey: string;
    testPrivateKey: string;
}