import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { boxAdded } from '../store/actions';
import store from '../store/store';
import { useSelector } from 'react-redux';
import { isMax } from '../store/reducers';
import { generateRGBValues } from '../services/colorfulService';

export function BoxInserter(): JSX.Element {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const maxLength = useSelector(isMax);

  const onSubmit = useCallback(
    (data) => {
      console.log('onSubmit ' + maxLength);

      if (maxLength) {
        return;
      }

      store.dispatch(
        boxAdded({
          red: data.Red,
          green: data.Green,
          blue: data.Blue,
        })
      );
      reset();
    },
    [reset, maxLength]
  );

  const handleRandom = useCallback(() => {
    console.log('handleRandom ' + maxLength);

    if (maxLength) {
      return;
    }
    const RGBValue = generateRGBValues();
    store.dispatch(
      boxAdded({
        red: RGBValue.red,
        green: RGBValue.green,
        blue: RGBValue.blue,
      })
    );
  }, [maxLength]);

  return (
    <div className="box-insert-wrapper">
      <div id="box-insert-text"> Box inserter </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
        <div className="input-wrapper">
          <span className="input-field">
            R :
            <input
              defaultValue=""
              placeholder="Red Field"
              {...register('Red', { required: true })}
            />
          </span>
          <span className="input-field">
            G :
            <input
              placeholder="Green Field"
              {...register('Green', { required: true })}
            />
          </span>
          <span className="input-field">
            B :
            <input
              placeholder="Blue Field"
              {...register('Blue', { required: true })}
            />
          </span>
        </div>

        {/* {errors.Green && <span>This field is required</span>}
        {errors.Red && <span>This field is required</span>} */}
        <div className="submit-button-wrapper">
          <button type="submit" className="submit-button">
            Insert
          </button>
          <button
            type="button"
            className="submit-button"
            onClick={handleRandom}
          >
            Insert Random
          </button>
        </div>
      </form>
    </div>
  );
}
