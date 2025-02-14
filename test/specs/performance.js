// import http from 'k6/http';
// import { check, sleep } from 'k6';

// export const options = {
//     stages: [
//         { duration: '1m', target: 10 },  
//         { duration: '1m', target: 10 },  
//         { duration: '10s', target: 2000 }, 
//         { duration: '1m', target: 10 }, 
//     ],
// };



// export default function () {
//     const headers = {
//         'Authorization': `Bearer ${BEARER_TOKEN}`,
//     };
//     const res = http.get('https://stageaccountssd31.pihappiness.com/api/Common/emailSenders', { headers });
//     let jsonResponse = JSON.parse(res.body);
//     check(res, {
//         'Status is 200': (r) => r.status === 200,
//         "id is 12": (r) => jsonResponse[0].id === 12,
//     });
//     sleep(1);
// }



// import http from 'k6/http';
// import { sleep, check } from 'k6';

// export const options = {
//     stages: [
//         { duration: '30s', target: 20 },
//         { duration: '1m30s', target: 10 },
//         { duration: '20s', target: 0 }
//     ]
// };

// export default function () {
//     const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjY4Iiwicm9sZSI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9sb2NhbGl0eSI6ImVuLVVTIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YSI6IntcIklkXCI6NjgsXCJUb2tlblwiOlwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFibWx4ZFdWZmJtRnRaU0k2SWpZNElpd2ljbTlzWlNJNklrRndjRlZ6Y2xKc01TSXNJbTVpWmlJNk1UY3pOak14TkRFeU9Td2laWGh3SWpveE56TTJNek15TVRJNUxDSnBZWFFpT2pFM016WXpNVFF4TWprc0ltbHpjeUk2SWxCcFNHRjNhM010VUdGeVlXMUpibVp2SW4wLjVvbk5pYXlqb2JXODB6aWxESlBKYjM3NXJmYU5CVFEwQlZyR05jRkl4ckVcIixcIlJlZnJlc2hUb2tlblwiOm51bGwsXCJBY2NvdW50SWRcIjozOSxcIkFjY291bnRTdGF0dXNcIjoxLFwiUm9sZUlkXCI6MCxcIlJvbGVOYW1lXCI6XCJcIixcIlJlc3BvbnNpYmlsaXRpZXNcIjpbe1wiTW9kdWxlSWRcIjoxLFwiTW9kdWxlXCI6XCJMaWJyYXJ5XCIsXCJUYXNrSWRcIjoxLFwiVGFza1wiOlwiRGVtb2dyYXBoaWNzXCIsXCJQZXJtaXNzaW9uc1wiOlwiMTExMTExMDAwMFwifSx7XCJNb2R1bGVJZFwiOjEsXCJNb2R1bGVcIjpcIkxpYnJhcnlcIixcIlRhc2tJZFwiOjIsXCJUYXNrXCI6XCJNZWRpYSBNYXN0ZXJcIixcIlBlcm1pc3Npb25zXCI6XCIxMTAwMDEwMDAwXCJ9LHtcIk1vZHVsZUlkXCI6MSxcIk1vZHVsZVwiOlwiTGlicmFyeVwiLFwiVGFza0lkXCI6MyxcIlRhc2tcIjpcIkVtYWlsIFRlbXBsYXRlc1wiLFwiUGVybWlzc2lvbnNcIjpcIjExMTAwMTAwMDFcIn0se1wiTW9kdWxlSWRcIjoxLFwiTW9kdWxlXCI6XCJMaWJyYXJ5XCIsXCJUYXNrSWRcIjozMixcIlRhc2tcIjpcIlJlYXNvbnNcIixcIlBlcm1pc3Npb25zXCI6XCIxMTExMTEwMDAwXCJ9LHtcIk1vZHVsZUlkXCI6MixcIk1vZHVsZVwiOlwiQ29udGFjdHNcIixcIlRhc2tJZFwiOjQsXCJUYXNrXCI6XCJDb250YWN0c1wiLFwiUGVybWlzc2lvbnNcIjpcIjExMTExMDAwMDBcIn0se1wiTW9kdWxlSWRcIjoyLFwiTW9kdWxlXCI6XCJDb250YWN0c1wiLFwiVGFza0lkXCI6NSxcIlRhc2tcIjpcIkdyb3Vwc1wiLFwiUGVybWlzc2lvbnNcIjpcIjExMTAwMTAxMDBcIn0se1wiTW9kdWxlSWRcIjozLFwiTW9kdWxlXCI6XCJFeHBlcmllbmNlc1wiLFwiVGFza0lkXCI6NixcIlRhc2tcIjpcIlN1cnZleVwiLFwiUGVybWlzc2lvbnNcIjpcIjExMTExMTAwMDFcIn0se1wiTW9kdWxlSWRcIjozLFwiTW9kdWxlXCI6XCJFeHBlcmllbmNlc1wiLFwiVGFza0lkXCI6NyxcIlRhc2tcIjpcIlN1cnZleSBJbnN0YW5jZXNcIixcIlBlcm1pc3Npb25zXCI6XCIxMTExMTEwMDAxXCJ9LHtcIk1vZHVsZUlkXCI6MyxcIk1vZHVsZVwiOlwiRXhwZXJpZW5jZXNcIixcIlRhc2tJZFwiOjksXCJUYXNrXCI6XCJRdWVzdGlvbiBCdWlsZGVyXCIsXCJQZXJtaXNzaW9uc1wiOlwiMTExMDAwMDAwMVwifSx7XCJNb2R1bGVJZFwiOjMsXCJNb2R1bGVcIjpcIkV4cGVyaWVuY2VzXCIsXCJUYXNrSWRcIjoxMixcIlRhc2tcIjpcIlJlc3BvbnNlc1wiLFwiUGVybWlzc2lvbnNcIjpcIjEwMDAwMDAwMTBcIn0se1wiTW9kdWxlSWRcIjo0LFwiTW9kdWxlXCI6XCJEYXNoYm9hcmRcIixcIlRhc2tJZFwiOjEwLFwiVGFza1wiOlwiRGFzaGJvYXJkXCIsXCJQZXJtaXNzaW9uc1wiOlwiMTAwMDAwMDAwMFwifSx7XCJNb2R1bGVJZFwiOjQsXCJNb2R1bGVcIjpcIkRhc2hib2FyZFwiLFwiVGFza0lkXCI6MTEsXCJUYXNrXCI6XCJBbmFseXRpY2FsIFJlcG9ydFwiLFwiUGVybWlzc2lvbnNcIjpcIjEwMDAwMDAwMTBcIn0se1wiTW9kdWxlSWRcIjo1LFwiTW9kdWxlXCI6XCJTZXR0aW5nc1wiLFwiVGFza0lkXCI6MTMsXCJUYXNrXCI6XCJVc2Vyc1wiLFwiUGVybWlzc2lvbnNcIjpcIjExMTExMTAwMDBcIn0se1wiTW9kdWxlSWRcIjo1LFwiTW9kdWxlXCI6XCJTZXR0aW5nc1wiLFwiVGFza0lkXCI6MTQsXCJUYXNrXCI6XCJSb2xlc1wiLFwiUGVybWlzc2lvbnNcIjpcIjExMTExMTAwMDBcIn0se1wiTW9kdWxlSWRcIjo1LFwiTW9kdWxlXCI6XCJTZXR0aW5nc1wiLFwiVGFza0lkXCI6MTUsXCJUYXNrXCI6XCJIaWVyYXJjaHlcIixcIlBlcm1pc3Npb25zXCI6XCIxMTEwMDEwMDAwXCJ9LHtcIk1vZHVsZUlkXCI6NSxcIk1vZHVsZVwiOlwiU2V0dGluZ3NcIixcIlRhc2tJZFwiOjE2LFwiVGFza1wiOlwiU3VydmV5IEtQSVwiLFwiUGVybWlzc2lvbnNcIjpcIjExMTExMTAwMDBcIn0se1wiTW9kdWxlSWRcIjo1LFwiTW9kdWxlXCI6XCJTZXR0aW5nc1wiLFwiVGFza0lkXCI6MjE3LFwiVGFza1wiOlwiRmF2SWNvblwiLFwiUGVybWlzc2lvbnNcIjpcIjEwMDAwMDAwMDBcIn0se1wiTW9kdWxlSWRcIjo1LFwiTW9kdWxlXCI6XCJTZXR0aW5nc1wiLFwiVGFza0lkXCI6MjE4LFwiVGFza1wiOlwiQVBJXCIsXCJQZXJtaXNzaW9uc1wiOlwiMTAwMDAwMDAwMFwifSx7XCJNb2R1bGVJZFwiOjUsXCJNb2R1bGVcIjpcIlNldHRpbmdzXCIsXCJUYXNrSWRcIjoyMjAsXCJUYXNrXCI6XCJWb3VjaGVyXCIsXCJQZXJtaXNzaW9uc1wiOlwiMTAwMDAwMDAwMFwifSx7XCJNb2R1bGVJZFwiOjUsXCJNb2R1bGVcIjpcIlNldHRpbmdzXCIsXCJUYXNrSWRcIjoyMjEsXCJUYXNrXCI6XCJIZWxwIERlc2tcIixcIlBlcm1pc3Npb25zXCI6XCIxMDAwMDAwMDAwXCJ9XSxcIlVzZXJOYW1lXCI6XCJwaWFkbW51c2VyMS4yQGdtYWlsLmNvbVwiLFwiVGl0bGVcIjpcIlwiLFwiRmlyc3ROYW1lXCI6XCJDaGFpdGFueWEgSlwiLFwiTGFzdE5hbWVcIjpcIlwiLFwiTW9iaWxlXCI6XCI3MjAxMzA2NzM0XCIsXCJVc2VyVHlwZUlkXCI6MSxcIkxhbmdDb2RlXCI6XCJlbi1VU1wiLFwiQ29tcGFueU5hbWVcIjpcInBhcmFtIC1pbmZvc29sdXRpb25zXCIsXCJDb21tdW5pY2F0aW9uRW1haWxcIjpcIlwiLFwiVGltZVpvbmVJZFwiOjU3LFwiTGFuZ3VhZ2VJZFwiOjkwLFwiR210QWRqdXN0bWVudFwiOlwiR01UKzA1OjMwXCIsXCJEYXlsaWdodFRpbWVcIjpmYWxzZSxcIlBsYW5JZFwiOjQsXCJQbGFuTmFtZVwiOlwiQmFzaWMgcGxhblwiLFwiSXNQYWlkUGxhblwiOmZhbHNlLFwiSVNEQ29kZVwiOm51bGwsXCJQbGFuRW5kRGF0ZVwiOlwiMjAyNS0wMS0yMVQwOToxNzoyNi4zOTdcIixcIlBsYW5FbmREYXRlV2l0aFpvbmVcIjpcIjIwMjUtMDEtMjFUMTQ6NDc6MjYuMzk3XCIsXCJSZWZJZFwiOlwiSU4vMDEyNS8zOSAgICAgICAgICAgICAgIFwiLFwiQ291bnRyeUlkXCI6MTAwLFwiQ2l0eUlkXCI6MzA5NixcIlByb2ZpbGVQaWNcIjpudWxsLFwiRXhwZXJpZW5jZUlkc1wiOltdLFwiQXV0aEhpZXJhcmNoaWVzXCI6W10sXCJJbmR1c3RyeUlkXCI6OCxcIkluZHVzdHJ5TmFtZVwiOlwiTG9naXN0aWNzXCIsXCJQaVN1cHBvcnRFbmFibGVkXCI6ZmFsc2UsXCJTdXBwb3J0RW5hYmxlZFwiOnRydWUsXCJUYWJTdXJ2ZXlFbmFibGVkXCI6dHJ1ZSxcIkNhc2VNYW5hZ2VtZW50RW5hYmxlZFwiOnRydWUsXCJNdWx0aWxpbmd1YWxFbmFibGVkXCI6dHJ1ZSxcIlF1ZXN0aW9uVHlwZU5wc0VuYWJsZWRcIjp0cnVlLFwiQW5hbHl0aWNhbFJlcG9ydHNFbmFibGVkXCI6dHJ1ZSxcIkxvZ2ljSnVtcEVuYWJsZWRcIjp0cnVlLFwiUGlwZVRleHRFbmFibGVkXCI6dHJ1ZSxcIlJlcG9ydHNFbmFibGVkXCI6ZmFsc2UsXCJTYWxlc0ZvcmNlRW5hYmxlZFwiOmZhbHNlLFwiQ3hFbmFibGVkXCI6dHJ1ZSxcIkJ4RW5hYmxlZFwiOmZhbHNlLFwiRXhFbmFibGVkXCI6ZmFsc2UsXCJQeEVuYWJsZWRcIjpmYWxzZSxcIlF1ZXN0aW9uVHlwZVBpY3R1cmVFbmFibGVkXCI6dHJ1ZSxcIlF1ZXN0aW9uVHlwZVZpZGVvRW5hYmxlZFwiOmZhbHNlLFwiUXVlc3Rpb25UeXBlQXV0aGVudGljYXRpb25FbmFibGVkXCI6dHJ1ZSxcImFwaUVuYWJsZWRcIjpmYWxzZSxcIkludGVncmF0aW9uc0VuYWJsZWRcIjp0cnVlLFwiU2hhcmVSZXBvcnRFbmFibGVkXCI6ZmFsc2UsXCJRdWVzdGlvblR5cGVBdWRpb1wiOmZhbHNlLFwiUXVlc3Rpb25UeXBlRmlsZVVwbG9hZFwiOnRydWUsXCJRdWVzdGlvblR5cGVSYW5raW5nT3JkZXJcIjp0cnVlLFwiUXVlc3Rpb25UeXBlTWF0cml4XCI6dHJ1ZSxcIlBpU3VwcG9ydEFnZW50c1wiOmZhbHNlLFwiUmVzcG9uc2VBbGVydHNcIjp0cnVlLFwiU3VydmV5UmVkaXJlY3Rpb25cIjp0cnVlLFwiUmVtaW5kZXJzXCI6dHJ1ZSxcIlBpSGFwcGluZXNzTG9nb1wiOnRydWUsXCJUaGFua3lvdUVtYWlsXCI6dHJ1ZSxcIlFSXCI6dHJ1ZSxcIkJhc2ljUVRcIjp0cnVlLFwiUGVyc29uYWxMaW5rc1wiOnRydWUsXCJRdWVzdGlvblR5cGVUaGFua1lvdUVuYWJsZWRcIjp0cnVlLFwiV2hpdGVMYWJlbGluZ0VuYWJsZWRcIjp0cnVlLFwiQ29tbXVuaWNhdGlvbkRvbWFpbkVuYWJsZWRcIjp0cnVlLFwiU3VydmV5RnJlcXVlbmN5UnVsZXNcIjp0cnVlLFwiUXVlc3Rpb25UeXBlQ1NURW5hYmxlZFwiOnRydWUsXCJRdWVzdGlvblR5cGVSYXRpbmdFbmFibGVkXCI6dHJ1ZSxcIlN1cnZleUtQSVwiOnRydWUsXCJMZXZlbHNFbmFibGVkXCI6dHJ1ZSxcIlF1ZXN0aW9uRGVtb2dyYXBoaWNFbmFibGVkXCI6dHJ1ZSxcIkNvbnRhY3RzRW5hYmxlZFwiOnRydWUsXCJDdXN0b21lcnNFbmFibGVkXCI6dHJ1ZSxcIlJlcHV0YXRpb25NYW5hZ2VtZW50RW5hYmxlZFwiOnRydWUsXCJTZW50aW1lbnRhbEFuYWx5dGljc0VuYWJsZWRcIjp0cnVlLFwiTWVkaWFFbmFibGVkXCI6dHJ1ZSxcIkRhc2hib2FyZEVuYWJsZWRcIjp0cnVlLFwiUmVhc29uc1wiOnRydWUsXCJXZWJTaXRlSW50ZXJjZXB0XCI6dHJ1ZSxcIlNvY2lhbE1lZGlhRW5hYmxlZFwiOnRydWUsXCJPZmZsaW5lVGFiU3VydmV5XCI6ZmFsc2UsXCJFbWJlZGRlZEZpZWxkc0VuYWJsZWRcIjpmYWxzZSxcIlN1cnZleUF1dGhlbnRpY2F0aW9uRW5hYmxlZFwiOnRydWUsXCJSZXNwb25zZUFsZXJ0c0N1c3RvbWVyQWNrRW5hYmxlZFwiOnRydWUsXCJQcm9tb1ZpZGVvRW5hYmxlZFwiOnRydWUsXCJJc1BpU3VwcG9ydEFjY291bnRFeGlzdFwiOnRydWUsXCJwaVN1cHBvcnRBY2NvdW50SWRcIjozOSxcIlNvY2lhbFJhdGluZ0VuYWJsZWRcIjp0cnVlLFwiU2hhcmluZ1N1cnZleW9uU29jaWFsUmF0aW5nRW5hYmxlZFwiOnRydWUsXCJTbGlkZXJFbmFibGVkXCI6dHJ1ZSxcIk9waW5pb25Qb2xsRW5hYmxlZFwiOnRydWUsXCJDb21wYXJpc29uUmVwb3J0RW5hYmxlZFwiOnRydWUsXCJTaWRlQnlTaWRlTWF0cml4RW5hYmxlZFwiOnRydWUsXCJzdXJ2ZXlUeXBlXCI6bnVsbCxcInN1cnZleVRpdGxlXCI6bnVsbCxcIkFjY291bnRQbGFuVHlwZVwiOjAsXCJTdXJ2ZXlJbnN0YW5jZUVuYWJsZWRcIjp0cnVlLFwiUmVzcG9uc2VEZXRhaWxzRW5hYmxlZFwiOnRydWUsXCJRdWVzdGlvbk1lZGlhRW5hYmxlZFwiOnRydWUsXCJXTEZhdmljb25FbmFibGVkXCI6dHJ1ZSxcIldTVGVybXNDb25kaXRpb25zRW5hYmxlZFwiOnRydWUsXCJMaW1pdFJlc3BvbnNlc0VuYWJsZWRcIjp0cnVlLFwiRGlzdHJpYnV0aW9uV2hlbnRvU2VuZEVuYWJsZWRcIjp0cnVlLFwiRGlzdHJpYnV0aW9uTGlua0V4cGlyeUVuYWJsZWRcIjp0cnVlLFwiQ29udGFjdENhbXBhaWduRW5hYmxlZFwiOnRydWUsXCJJc1Jlc3BvbnNlRG93bmxvYWRFbmFibGVkXCI6dHJ1ZSxcIklzRW1haWxzRW5hYmxlZFwiOnRydWUsXCJJc1Ntc0VuYWJsZWRcIjp0cnVlLFwiSXNXaGF0c0FwcEVuYWJsZWRcIjp0cnVlLFwiSXNIaWVyYXJjaHlUeXBlRW5hYmxlZFwiOnRydWUsXCJJc0FsbFN1cnZleVJlcG9ydEVuYWJsZWRcIjpmYWxzZSxcIlVzZXJzRW5hYmxlZFwiOnRydWUsXCJVbmxpbWl0ZWRDb3VudFwiOjk5MDAwMDAsXCJOb3RBbGxvd2VkUXVlc3Rpb25UeXBlc1wiOntcIkFUXCI6dHJ1ZSxcIkZVXCI6dHJ1ZSxcIk1BXCI6dHJ1ZSxcIk5QXCI6dHJ1ZSxcIlBDXCI6dHJ1ZSxcIlJPXCI6dHJ1ZSxcIlRTXCI6dHJ1ZSxcIlNNXCI6dHJ1ZSxcIlJUXCI6dHJ1ZSxcIkRHXCI6dHJ1ZSxcIlJFXCI6dHJ1ZSxcIlNEXCI6dHJ1ZX19IiwibmJmIjoxNzM2MzE0MTI5LCJleHAiOjE3MzYzNDQxMjksImlhdCI6MTczNjMxNDEyOSwiaXNzIjoicGlIYXBwaW5lc3MtUGFyYW1JbmZvIn0.e8UHtnlysRJCvCak4pjs6S-FzF60xpxpOLGsznAdmuU";
//     const headers = {
//         'Authorization': `Bearer ${BEARER_TOKEN}`,
//         "Content-Type" : "application/json"
//     };

//     const body = JSON.stringify(
//         {
//             "featureId": 10,
//             "accountId": 0
//       });

//       const response = http.post('https://stageaccountssd31.pihappiness.com/api/Common/ProductFeatureLimitCheck', body, { headers });
      
//       check(response, {
//           'is status 200': (r) => r.status === 200,
//       });
//     sleep(1);

// }


import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 1,      
  duration: '1m', 
};

export default function () {
  let res = http.get('https://jsonplaceholder.typicode.com/users');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1); 
}