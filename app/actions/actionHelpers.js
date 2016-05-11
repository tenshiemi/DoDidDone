const actionHelpers = {
  checkStatus: (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  },
  parseJSON: (response) => {
    return response.json();
  },
  checkSuccess: (response) => {
    if (response.success === false) {
      let error = new Error(response.message);
      error.response = response;
      throw error;
    }

    return response;
  },
  logError: (error) => {
    console.error('Request failed:', error);
  }
};

export default actionHelpers;
