export enum ContextHeaderTranslation {
    'Panel Sterowania' = 'dashboard',
    'Maile' = 'mails',
    'Apartamenty' = 'apartments',
    'Klienci' = 'clients',
    'Kalendarz' = 'calendar',
    'Synchronizacja' = 'connection',
    'Ustawienia' = 'settings',
    'Informację' = 'information',
    'Profil' = 'profile'
}

export type ContextType =
    | 'dashboard'
    | 'mails'
    | 'apartments'
    | 'clients'
    | 'calendar'
    | 'connection'
    | 'settings'
    | 'information'
    | 'profile';
