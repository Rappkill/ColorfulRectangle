import React, { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedBox, getSelectedBoxIndex } from '../store/reducers';
import { useForm } from 'react-hook-form';
import store from '../store/store';
import { boxUpdated } from '../store/actions';
import { Modal } from './modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../services/colorfulService';

export function BoxEdit(): JSX.Element {
  const [isInfoActive, setInfoActive] = useState<boolean>(false);
  const [defaultValues, setDefaultValues] = useState({});

  const {
    register,
    handleSubmit,
    getValues,
    setValue,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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

  useEffect(() => {
    if (selectedBox) {
      setValue('Red', selectedBox?.red);
      setValue('Green', selectedBox?.green);
      setValue('Blue', selectedBox?.blue);
    }
  }, [selectedBox]);

  const handleOpenInfo = useCallback(() => {
    setInfoActive(true);
  }, []);

  const handleCloseInfo = useCallback(() => {
    setInfoActive(false);
  }, []);

  const handleValues = useCallback(() => {
    setDefaultValues(getValues());
    console.log(defaultValues);
  }, [defaultValues]);

  return (
    <div className="box-edit">
      <div id="box-edit-text">Color Editor</div>

      {isInfoActive ? (
        <div className="info-wrapper" onClick={handleCloseInfo}>
          <div className="info-modal">
            <Modal setInfo={setInfoActive} />
          </div>
        </div>
      ) : null}

      {selectedBox ? (
        <div className="box-edit-wrapper">
          <div className="selected-box-wrapper">
            <div
              className="selected-box"
              style={{
                backgroundColor: `rgb(${selectedBox.red}, ${selectedBox.green}, ${selectedBox.blue})`,
              }}
            >
              <button
                type="button"
                className={`info-button ${isInfoActive ? 'active' : ''}`}
                onClick={handleOpenInfo}
              >
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
                  type="number"
                  defaultValue={`${selectedBox.red}`}
                  placeholder="Red Field"
                  {...register('Red')}
                />
                {errors.Red && <span>{errors.Red.message}</span>}
              </span>

              <span className="input-field">
                G :
                <input
                  type="number"
                  defaultValue={`${selectedBox.green}`}
                  placeholder="Green Field"
                  {...register('Green')}
                />
                {errors.Green && <span>{errors.Green.message}</span>}
              </span>
              <span className="input-field">
                B :
                <input
                  type="number"
                  defaultValue={`${selectedBox.blue}`}
                  placeholder="Blue Field"
                  {...register('Blue')}
                />
                {errors.Blue && <span>{errors.Blue.message}</span>}
              </span>
              <div>
                <button
                  type="submit"
                  className="submit-button"
                  // eslint-disable-next-line react/jsx-no-bind
                  onClick={handleValues}
                >
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
