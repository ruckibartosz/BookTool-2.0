export type SideContextType =
    | 'mail'
    | 'apartments'
    | 'clients'
    | 'calendar'
    | 'connection'
    | 'settings'
    | 'information';


export type SideContextActionType = 'add' | 'edit' | 'delete' | 'none';

export type SideContextRenderType = 'tiles' | 'list';