import fetch from "node-fetch";

exports.handler = async function (event, context) {
  const hasFetch = !!fetch;

  return {
    statusCode: 200,
    body: JSON.stringify({ message: hasFetch }),
  };
};
