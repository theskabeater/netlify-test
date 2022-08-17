import fetch from "node-fetch";

exports.handler = async function (event, context) {
  const request = await fetch("https://api.github.com/users/github");
  const response = await request.response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
