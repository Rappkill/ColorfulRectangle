import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedBox } from '../store/reducers';
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

  const onSubmit = useCallback(
    (data) => {
      store.dispatch(
        boxUpdated({
          red: data.Red,
          green: data.Green,
          blue: data.Blue,
        })
      );
    },
    [boxUpdated]
  );

  return (
    <div className="box-edit">
      Color Editor
      {selectedBox ? (
        <div className="box-edit-wrapper">
          <div
            className="selected-box"
            style={{
              backgroundColor: `rgb(${selectedBox.red}, ${selectedBox.green}, ${selectedBox.blue})`,
            }}
          >
            <div className="box-number">
              Box Number: {selectedBox.boxNumber}
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
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

            <button type="submit" className="submit-button">
              Apply color
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}
