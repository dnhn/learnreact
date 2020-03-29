const fetch = require("node-fetch");

exports.handler = async () => {
  const url = `${process.env.API_URL}${process.env.API_KEY}`;
  const response = await fetch(url).then(res => res.json());

  if (response.errors) return { statusCode: 400, body: JSON.stringify(response.errors) };
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(response)
  };
};
