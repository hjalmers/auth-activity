export interface Activity {
    date: number;
    id: string;
    deviceName?: string;
    type: ActivityType;
    ip?: string;
    userAgent: string;
    method: AuthMethod;
    location: string;
}

export type AuthMethod = 'Digipass' | 'Mobile BankID' | 'BankID'
export type ActivityType = 'Logged in' | 'Signed agreement' | 'Signed payment'
