export class Event {
    _id: string;
    type: EventType;
    data: object;
    userId: string;
    storyData: Object;
    date: Date;
}

export enum EventType {
    'CREATE-STORY' = 'CREATE-STORY',
    'DELETE-STORY' = 'DELETE-STORY', 
    'SAVE-STORY' = 'SAVE-STORY',
    'SYNTHESISE-STORY' = 'SYNTHESISE-STORY', 
    'GRAMMAR-CHECK-STORY' = 'GRAMMAR-CHECK-STORY',
    'REGISTER' = 'REGISTER',
    'LOGIN' = 'LOGIN',
    'LOGOUT' = 'LOGOUT',
    'VIEW-FEEDBACK' = 'VIEW-FEEDBACK',
}