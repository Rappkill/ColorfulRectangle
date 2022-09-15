import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedBox, getSelectedBoxIndex } from '../store/reducers';
import { useForm } from 'react-hook-form';
import store from '../store/store';
import { boxUpdated } from '../store/actions';

export function BoxEdit(): JSX.Element {
  const {
    register,
    handleSubmit,
    // watch,
    // reset,
    // formState: { errors },
  } = useForm();

  const selectedBox = useSelector(getSelectedBox);
  const boxNumber = useSelector(getSelectedBoxIndex);

  const onSubmit = useCallback((data) => {
    store.dispatch(
      boxUpdated({
        red: data.Red,
        green: data.Green,
        blue: data.Blue,
      })
    );
  }, []);

  const handleInfo = useCallback(() => {
    console.log('info');
  }, []);

  return (
    <div className="box-edit">
      <div id="box-edit-text">Color Editor</div>
      {selectedBox ? (
        <div className="box-edit-wrapper">
          <div className="selected-box-wrapper">
            <div
              className="selected-box"
              style={{
                backgroundColor: `rgb(${selectedBox.red}, ${selectedBox.green}, ${selectedBox.blue})`,
              }}
            >
              <button id="info-button" type="button" onClick={handleInfo}>
                Info
              </button>
            </div>
            <div className="box-number">Box Number: {boxNumber + 1}</div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper-edit">
            <div className="input-wrapper">
              <span className="input-field">
                R :
                <input
                  defaultValue={`${selectedBox.red}`}
                  placeholder="Red Field"
                  {...register('Red')}
                />
              </span>

              <span className="input-field">
                G :
                <input
                  defaultValue={`${selectedBox.green}`}
                  placeholder="Green Field"
                  {...register('Green')}
                />
              </span>
              <span className="input-field">
                B :
                <input
                  defaultValue={`${selectedBox.blue}`}
                  placeholder="Blue Field"
                  {...register('Blue')}
                />
              </span>
              <div>
                <button type="submit" className="submit-button">
                  Apply color
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}
