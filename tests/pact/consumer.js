// const http = require('http')

const fetch = require('node-fetch')

// module.exports = {
//     fetchOrders: () =>
//         new Promise((resolve, reject) => {
//             http
//                 .get('http://localhost:8080/orders', (resp) => {
//                     let data = ''
//
//                     resp.on('data', (chunk) => {
//                         data += chunk
//                     })
//
//                     resp.on('end', () => {
//                         console.log(data)
//                         resolve(JSON.parse(data))
//                     })
//                 })
//                 .on('error', (err) => {
//                     console.error('Error: ' + err.message)
//                     reject(err)
//                 })
//         }),
// }

module.exports = {
    fetchOrders: async ()=> {
       const res = await fetch('http://localhost:4003/api/person');
       const json = await res.json()
        console.log('json', json)
       return json
    }
}