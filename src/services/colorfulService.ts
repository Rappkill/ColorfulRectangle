export function generateRGBValues() {
  let red;
  let green;
  let blue;

  red = Math.floor(Math.random() * 256).toString();
  green = Math.floor(Math.random() * 256).toString();
  blue = Math.floor(Math.random() * 256).toString();

  return { red, green, blue };
}
