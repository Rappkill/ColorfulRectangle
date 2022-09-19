import { v4 } from 'uuid';
import { BoxAction, ActionTypes } from './actions';

interface BoxRGB {
  id: string;
  red: string;
  green: string;
  blue: string;
  boxNumber: number;
  creationTime: Date;
}

interface Store {
  boxList: BoxRGB[];
  selectedBoxId: null | string;
}

const initialState: Store = {
  boxList: [],
  selectedBoxId: null,
};

export default function BoxReducer(
  state = initialState,
  action: BoxAction
): Store {
  switch (action.type) {
    case ActionTypes.BoxAdded:
      return {
        ...state,
        boxList: [
          ...state.boxList,
          {
            id: v4(),
            red: action.payload.red,
            green: action.payload.green,
            blue: action.payload.blue,
            boxNumber: state.boxList.length + 1,
            creationTime: new Date(),
          },
        ],
      };

    case ActionTypes.BoxSelected:
      return {
        ...state,
        selectedBoxId: action.payload,
      };

    case ActionTypes.BoxUpdated:
      return {
        ...state,

        boxList: [
          ...state.boxList.map((box) => {
            if (box.id !== state.selectedBoxId) {
              return box;
            }

            return {
              ...box,
              red: action.payload.red,
              blue: action.payload.blue,
              green: action.payload.green,
            };
          }),
        ],
      };

    default:
      return state;
  }
}

export const getBoxList = (store: Store): BoxRGB[] => {
  return store.boxList;
};

export const getSelectedBox = (store: Store): null | BoxRGB => {
  return store.boxList.find((b) => b.id === store.selectedBoxId) || null;
};

export const getSelectedBoxIndex = (store: Store): number => {
  return store.boxList.findIndex((box) => box.id === store.selectedBoxId);
};

export const isMax = (store: Store): boolean => {
  return store.boxList.length === 9;
};
