const actionHelpers = {
  checkStatus: function(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  },
  parseJSON: function(response) {
    return response.json();
  },
  logError: function(error) {
    console.error('Request failed:', error);
  }
};

export default actionHelpers;
