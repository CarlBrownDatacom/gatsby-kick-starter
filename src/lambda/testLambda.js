/* eslint-disable  */
import axios from 'axios';
import parser from 'fast-xml-parser';

export async function handler(event, context, callback) {

  const LOGIN_URL = 'https://aquaheat-xi-03.prontohosted.com.au/pronto/rest/t15.customerportal/login';

  try {
    const response = await axios({
      method: 'post',
      url: LOGIN_URL,
      headers: {
        'Content-Type': 'application/json',
        'X-Pronto-Username': event.headers['x-pronto-username'],
        'X-Pronto-Password': event.headers['x-pronto-password']
      }
    });

    console.log('asdfsf response ', response)

    const jsonData = await parser.parse(response.data)
    console.log('jsonData ', jsonData)

    return {
      statusCode: 200,
      body: JSON.stringify(jsonData)
    };

  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message })
    }
  }


  // console.log("queryStringParameters", event)
  // console.log("context", context)
  // callback(null, {
  //   // return null to show no errors
  //   statusCode: 200, // http status code
  //   body: JSON.stringify({
  //     msg: "Hello, World! " + Math.round(Math.random() * 10),
  //   }),
  // })
}