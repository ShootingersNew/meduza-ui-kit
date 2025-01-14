const textSize = {
  default: 22,
  medium: 18,
  small: 16,
  smallest: 12,
};

const titleSize = {
  main: 52,
  sub: 39,
  small: 30,
};

const palette = {
  primary: "#000000",
  secondary: "#6E6E6E",
  tretiary: "#9D9D9D",
  green: "#51b500",
  blue: "#5A96C8",
  red: "#c4372d",
  firm: "#D78E39",
  white: "#FFFFFF",
};

function generateStylusContent(
  variables,
  property,
  prefix = "",
  postfix = "",
  generateVariable = true
) {
  let stylusContent = "";
  for (const [key, value] of Object.entries(variables)) {
    if (generateVariable) {
      stylusContent += `${key} = ${value}${postfix}\n`;
    }
    stylusContent += `.${prefix}${key}\n  ${property} ${key}\n`;
  }

  return stylusContent;
}

const textSizeContent = generateStylusContent(
  textSize,
  "font-size",
  "text-",
  "px"
);
const titleSizeContent = generateStylusContent(
  titleSize,
  "font-size",
  "title-",
  "px"
);
const paletteBackgroundContent = generateStylusContent(
  palette,
  "background-color",
  "palette-bg-"
);
const paletteColorContent = generateStylusContent(
  palette,
  "color",
  "palette-color-",
  "",
  false
);

const stylusContent = `${textSizeContent}\n${titleSizeContent}\n${paletteBackgroundContent}\n${paletteColorContent}`;

export default stylusContent;
