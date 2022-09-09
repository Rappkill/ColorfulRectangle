import React from 'react';
import { useSelector } from 'react-redux';
import { getBoxList } from '../store/reducers';

export function BoxList(): JSX.Element {
  const boxItems = useSelector(getBoxList);
  console.log(boxItems);

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
          >
            {box.red}
          </div>
        );
      })}
    </div>
  );
}
