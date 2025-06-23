const createResObj = (status, statusCode, payload) => {
  return {
    status,
    statusCode,
    payload,
  };
};

module.exports = createResObj;
