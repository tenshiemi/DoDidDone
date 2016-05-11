import { grey800, redA400, amberA700, grey300 } from 'material-ui/styles/colors';

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
    boxColor: redA400,
    checkedColor: redA400
  },
  flatButton: {
    secondaryTextColor: 'white',
    fontSize: 20
  },
  raisedButton: {
    primaryColor: redA400
  },
  toolbar: {
    titleFontSize: 40,
    backgroundColor: amberA700
  },
  tabs: {
    backgroundColor: grey800
  }
};

export default muiTheme;
