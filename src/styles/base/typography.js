import * as Colors from './colors';

/*
  Following fonts with different colors can be found in this class

  ......
*/
// Font
export const SwanseaBoldItalic = {
  fontFamily: 'SwanseaBoldItalic-p3Dv',
};
export const SwanseaItalic = {
  fontFamily: 'SwanseaItalic-AwqD',
};
export const SwanseaRegular = {
  fontFamily: 'Swansea-q3pd',
};
export const SwanseaBold = {
  fontFamily: 'SwanseaBold-D0ox',
};

export const Font = {
  BoldItalic: SwanseaBoldItalic,
  RegularItalic: SwanseaItalic,
  Regular: SwanseaRegular,
  Bold: SwanseaBold,
};

// Colors
export const FontColor = {
  Background: {color: Colors.Background},
  Lightgrey: {color: Colors.Lightgrey},
  DarkGrey: {color: Colors.DarkGrey},
  Orange: {color: Colors.Orange},
  Blue: {color: Colors.Blue},
  Red: {color: Colors.primary},
};

// Dynamic fontSize
export const mFontSize = mFontSize => {
  return {
    fontSize: mFontSize,
  };
};

// Premade styling for certain objects that occurs several times in this application

export const MainTitle = {
  ...FontColor.DarkGrey,
  ...Font.Bold,
  ...mFontSize(30),
};

export const FormTitle = {
  ...FontColor.Blue,
  ...Font.Bold,
  ...mFontSize(20),
};

export const Placeholder = {
  color: Colors.DarkGrey,
  ...Font.Regular,
  ...mFontSize(15),
  opacity: 0.8,
};

export const BigButtonText = {
  ...FontColor.DarkGrey,
  ...Font.Bold,
  ...mFontSize(25),
  letterSpacing: 1,
};
