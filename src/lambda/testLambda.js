/* eslint-disable  */
import axios from 'axios';
import parser from 'fast-xml-parser';

export function handler(event, context, callback) {
  console.log("queryStringParameters", event)
  console.log("context", context)
  callback(null, {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      msg: "Hello, World! " + Math.round(Math.random() * 10),
    }),
  })
}