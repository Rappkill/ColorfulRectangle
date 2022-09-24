import React, { SetStateAction, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { boxRemoved } from '../store/actions';
import { getSelectedBox, getSelectedBoxIndex } from '../store/reducers';
import store from '../store/store';

interface ModalProp {
  setInfo: React.Dispatch<SetStateAction<boolean>>;
}

export function Modal({ setInfo }: ModalProp): JSX.Element {
  const selectedBox = useSelector(getSelectedBox);
  const boxNumber = useSelector(getSelectedBoxIndex);

  const handleCloseInfo = useCallback(() => {
    setInfo(false);
  }, [setInfo]);

  const handleDeleteBox = useCallback(() => {
    store.dispatch(boxRemoved());
    handleCloseInfo();
  }, [setInfo]);

  return (
    <div className="info-wrapper" onClick={handleCloseInfo}>
      <div className="info-modal">
        <div className="modal-wrapper">
          <div className="modal-header">
            <h3>Box Number : {boxNumber + 1}</h3>
            <button id="modal-button" onClick={handleDeleteBox}>
              Delete Box
            </button>
            <button id="close" onClick={handleCloseInfo}>
              X
            </button>
          </div>
          <div className="modal-rgb">
            <p>Red : {selectedBox?.red}</p>
            <p>Green : {selectedBox?.green}</p>
            <p>Blue : {selectedBox?.blue}</p>
          </div>
          <p>Creation time : {selectedBox?.creationTime.toString()}</p>
          <p>Box ID : {selectedBox?.id}</p>
        </div>
      </div>
    </div>
  );
}
