export interface User {
    id: number;
    firstname: string;
    lastname: string;
    phone: string;
    username: string;
    password: string;
    isVerified: boolean;
    isSuspended: boolean;
    createdAt: Date;
    balance: number;
}