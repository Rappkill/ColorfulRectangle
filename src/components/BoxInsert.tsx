import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { boxAdded } from '../store/actions';
import store from '../store/store';

export function BoxInserter(): JSX.Element {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  function throwError() {
    let redInput = watch('Red');

    console.log(redInput);
    if (redInput > '255') {
      console.log('hit');

      return 'Insert Valid Value';
    }
  }

  const onSubmit = useCallback(
    (data) => {
      store.dispatch(
        boxAdded({
          red: data.Red,
          green: data.Green,
          blue: data.Blue,
        })
      );

      reset();
      throwError();
    },
    [boxAdded]
  );

  const handleRandom = useCallback(() => {
    console.log('hit');
  }, []);

  return (
    <div className="box-insert">
      <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
        <span className="input-field">
          R
          <input
            defaultValue=""
            placeholder="Red Field"
            {...register('Red', { required: true })}
          />
        </span>
        <span className="input-field">
          G
          <input
            placeholder="Green Field"
            {...register('Green', { required: true })}
          />
        </span>
        <span className="input-field">
          B
          <input
            placeholder="Blue Field"
            {...register('Blue', { required: true })}
          />
        </span>
        {errors.Green && <span>This field is required</span>}
        {errors.Red && <span>This field is required</span>}
        <button type="submit" className="submit-button">
          Insert
        </button>
        <button className="random-button" onClick={handleRandom}>
          Insert Random
        </button>
        {/* // <input type="submit" className="submit-button" /> */}
      </form>
    </div>
  );
}
