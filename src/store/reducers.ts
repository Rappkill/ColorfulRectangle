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
  boxSelected: null | BoxRGB;
}

const initialState: Store = {
  boxList: [],
  boxSelected: null,
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
        boxSelected: { ...state.boxList[action.payload.boxNumber - 1] },
      };

    case ActionTypes.BoxUpdated:
      const boxIdSelected = state.boxList.findIndex(
        (box) => box.id == state.boxSelected?.id
      );

      return {
        ...state,

        boxSelected: null,

        boxList: [
          ...state.boxList.slice(0, boxIdSelected),

          {
            ...state.boxList[boxIdSelected],

            ...action.payload,
          },

          ...state.boxList.slice(boxIdSelected + 1),
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
  return store.boxSelected;
};
