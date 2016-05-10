import { red700 } from 'material-ui/styles/colors';

export const muiTheme = {
  toolbar: () => {
    return {
      toolbar: {
        color: red700,
        backgroundColor: red700,
        titleFontSize: 40,
        menuHoverColor: red700,
        separatorColor: red700,
        iconColor: red700
      }
    };
  },
  palette: () => {
    return {
      palette: {
        textColor: red700
      }
    };
  },
  checkbox: () => {
    return {
      checkbox: {
        color: red700
      }
    };
  }
};

export default muiTheme;
