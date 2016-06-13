export const appendTokenToRequest = (url) => {
  const authToken = localStorage.getItem('id_token');

  return authToken ? url + '?token=' + authToken : url;
};
