const DDB = require('aws-sdk/clients/dynamodb');
const fetch = require('node-fetch');
const {
  USER_AWS_REGION,
  USER_AWS_ACCESS_KEY,
  USER_AWS_SECRET_KEY,
  USER_API_URL,
  USER_API_KEY,
  USER_FETCH_TIMEOUT,
  USER_TABLE_NAME,
} = process.env;
const dynamo = new DDB.DocumentClient({
  region: USER_AWS_REGION,
  accessKeyId: USER_AWS_ACCESS_KEY,
  secretAccessKey: USER_AWS_SECRET_KEY,
});
const FETCH_URL = `${USER_API_URL}${USER_API_KEY}`;
const now = () => parseInt(Date.now() / 1000);

exports.handler = (event, context, callback) => {
  dynamo.get({
    TableName: USER_TABLE_NAME,
    Key: { fetchId: 0 },
  }, (error, data) => {
    if (error) {
      callback(true);
    } else {
      const item = data.Item;

      if (now() - item.dateTime >= USER_FETCH_TIMEOUT) {
        fetch(FETCH_URL)
          .then(res => res.json())
          .then(response => {
            dynamo.put({
              TableName: USER_TABLE_NAME,
              Item: {
                fetchId: 0,
                dateTime: now(),
                data: response,
              },
            }, error => {
              if (error) {
                callback(true);
              } else {
                callback(null, {
                  statusCode: 200,
                  body: JSON.stringify(response),
                });
              }
            });
          })
          .catch(() => callback(true));
      } else {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(item.data),
        });
      }
    }
  });
};
