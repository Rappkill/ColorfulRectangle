import * as yup from 'yup';

export function generateRGBValues() {
  let red;
  let green;
  let blue;

  red = Math.floor(Math.random() * 256).toString();
  green = Math.floor(Math.random() * 256).toString();
  blue = Math.floor(Math.random() * 256).toString();

  return { red, green, blue };
}

export const schema = yup.object().shape({
  Red: yup
    .string()
    .max(3, '0-255 Values Only')
    .min(0, '0-255 Values Only')
    .matches(/^[0-9]+$/, 'Only Numbers')
    .matches(/\b([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\b/, 'Max Value 255')
    .required(),
  Green: yup
    .string()
    .max(3, '0-255 Values Only')
    .min(0, '0-255 Values Only')
    .matches(/^[0-9]+$/, 'Only Numbers')
    .matches(/\b([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\b/, 'Max Value 255')
    .required(),
  Blue: yup
    .string()
    .max(3, '0-255 Values Only')
    .min(0, '0-255 Values Only')
    .matches(/^[0-9]+$/, 'Only Numbers')
    .matches(/\b([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\b/, 'Max Value 255')
    .required(),
});
