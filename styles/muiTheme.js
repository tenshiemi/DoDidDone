import { grey800, amber300, grey300, teal200 } from 'material-ui/styles/colors';

export const muiTheme = {
  palette: {
    textColor: grey800
  },
  textField: {
    floatingLabelColor: grey800,
    hintColor: grey300,
    errorColor: grey800,
    focusColor: grey800,
    borderColor: grey800
  },
  checkbox: {
    boxColor: amber300,
    checkedColor: amber300
  },
  flatButton: {
    secondaryTextColor: 'white',
    fontSize: 20
  },
  raisedButton: {
    primaryColor: amber300
  },
  toolbar: {
    titleFontSize: 40,
    backgroundColor: teal200
  },
  tabs: {
    backgroundColor: grey800
  }
};

export default muiTheme;
