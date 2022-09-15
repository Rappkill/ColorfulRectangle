import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { boxSelected } from '../store/actions';
import { getBoxList, isMax } from '../store/reducers';

export function BoxList(): JSX.Element {
  const boxItems = useSelector(getBoxList);
  const maxLength = useSelector(isMax);

  const dispatch = useDispatch();

  const handleInsert = useCallback((id) => {
    dispatch(boxSelected(id));
  }, []);

  return (
    <div id="box-list-text" style={{ color: maxLength ? 'red' : '' }}>
      {` Box List  ${maxLength ? ' - Max length reached' : ''}`}
      <div className="box-list-wrapper">
        {boxItems.map((box) => {
          return (
            <div
              key={box.id}
              className="box"
              style={{
                backgroundColor: `rgb(${box.red}, ${box.green}, ${box.blue})`,
              }}
              // eslint-disable-next-line react/jsx-no-bind
              onClick={() => handleInsert(box.id)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
