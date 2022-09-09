export const BOX_ADDED = 'BOX_ADDED';
export const BOX_REMOVED = 'BOX_REMOVE';
export const BOX_EDIT = 'BOX_EDIT';

export enum ActionTypes {
  BoxAdded = 'BOX_ADDED',
  BoxRemoved = 'BOX_REMOVED',
}

interface Payload {
  red: string;
  green: string;
  blue: string;
}

interface BoxAdded {
  type: typeof ActionTypes.BoxAdded;
  payload: Payload;
}
interface BoxRemoved {
  type: typeof ActionTypes.BoxRemoved;
}

export const boxAdded = (payload: Payload): BoxAdded => ({
  type: ActionTypes.BoxAdded,
  payload,
});

export const boxRemoved = (): BoxRemoved => ({
  type: ActionTypes.BoxRemoved,
});

export type BoxAction = BoxAdded | BoxRemoved;
