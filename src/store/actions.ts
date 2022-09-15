export enum ActionTypes {
  BoxAdded = 'BOX_ADDED',
  BoxRemoved = 'BOX_REMOVED',
  BoxSelected = 'BOX_SELECTED',
  BoxUpdated = 'BOX_UPDATED',
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

interface BoxSelected {
  type: typeof ActionTypes.BoxSelected;
  payload: string;
}

interface BoxUpdated {
  type: typeof ActionTypes.BoxUpdated;
  payload: Payload;
}

export const boxAdded = (payload: Payload): BoxAdded => ({
  type: ActionTypes.BoxAdded,
  payload,
});

export const boxRemoved = (): BoxRemoved => ({
  type: ActionTypes.BoxRemoved,
});

export const boxSelected = (payload: string): BoxSelected => ({
  type: ActionTypes.BoxSelected,
  payload,
});

export const boxUpdated = (payload: Payload): BoxUpdated => ({
  type: ActionTypes.BoxUpdated,
  payload,
});

export type BoxAction = BoxAdded | BoxRemoved | BoxSelected | BoxUpdated;
