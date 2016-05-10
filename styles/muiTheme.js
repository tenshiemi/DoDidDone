import { red700, amber900, blueGrey400 } from 'material-ui/styles/colors';

export const muiTheme = {
  palette: {
    textColor: blueGrey400
  },
  textField: {
    floatingLabelColor: amber900,
    hintColor: blueGrey400,
    errorColor: red700,
    focusColor: red700,
    borderColor: red700
  },
  checkbox: {
    boxColor: blueGrey400,
    checkedColor: blueGrey400
  },
  flatButton: {
    secondaryTextColor: blueGrey400,
    fontSize: 20
  },
  raisedButton: {
    primaryColor: blueGrey400,
    fontWeight: 15
  },
  toolbar: {
    backgroundColor: amber900,
    height: 56,
    titleFontSize: 40,
    menuHoverColor: blueGrey400
  },
  enhancedButton: {
    tapHighlightColor: amber900
  },
  dialog: {
      titleFontSize: 40,
      bodyFontSize: 40,
      bodyColor: amber900
    },
  floatingActionButton: {
      buttonSize: 56,
      miniSize: 40,
      color: amber900,
      iconColor: amber900,
      secondaryColor: amber900,
      secondaryIconColor: amber900
    },
};

export default muiTheme;
