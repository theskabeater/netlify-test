import fetch from "node-fetch";

exports.handler = async function (event, context) {
  const response = await fetch("https://api.github.com/users/github");
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
