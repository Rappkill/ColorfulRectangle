import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { boxSelected } from '../store/actions';
import { getBoxList } from '../store/reducers';

export function BoxList(): JSX.Element {
  const boxItems = useSelector(getBoxList);

  const dispatch = useDispatch();

  const handleInsert = useCallback((boxNumber) => {
    dispatch(boxSelected(boxNumber));
  }, []);

  return (
    <div className="box-list">
      Box List
      {boxItems.map((box) => {
        return (
          <div
            key={box.id}
            className="box"
            style={{
              backgroundColor: `rgb(${box.red}, ${box.green}, ${box.blue})`,
            }}
            // eslint-disable-next-line react/jsx-no-bind
            onClick={() => handleInsert({ boxNumber: box.boxNumber })}
          >
            {box.red}
          </div>
        );
      })}
    </div>
  );
}
