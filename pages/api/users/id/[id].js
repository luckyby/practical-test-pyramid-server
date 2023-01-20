

// export default async function handler(req, res) {
//     const { id } = req.query
//     // console.log('id:', id)
//     const url = `http://localhost:4003/api/person/id/${id}`;
//     // console.log('url:', url);
//     //
//     const response = await fetch(url);
//     // console.log('responce:', response);
//     const responceJson = await response.json();
//     // console.log('response.json():', json);
//
//     res.status(200).json(responceJson)
//
// }

import {response} from "msw";

export default async (req, res) => {
    const { id } = req.query
    // console.log('id:', id)
    const method = req.method;
    // console.log('method = ', method)
    switch (method) {
        case "GET":

            const url = `http://localhost:4003/api/person/id/${id}`

            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch(url, requestOptions)
                .then(response => response.json())
                .then(result => {
                    // console.log('result in GET by ID',result)
                    return res
                            .status(200)
                            .setHeader('Content-Type', 'application/json')
                            .send(result)
                })
                .catch(error => console.log('error', error));

            // try {
            //
            //     ////////////////////////
            //     // var requestOptions = {
            //     //     method: 'GET',
            //     //     redirect: 'follow'
            //     // };
            //     //
            //     // fetch("http://localhost:4003/api/person/id/1", requestOptions)
            //     //     .then(response => response.text())
            //     //     .then(result => console.log(result))
            //     //     .catch(error => console.log('error', error));
            //     ////////////////////////
            //
            //     const url = `http://localhost:4003/api/person/id/${id}`;
            //     // console.log('url:', url);
            //     //
            //     let requestOptions = {
            //         method: method,
            //         redirect: 'follow'
            //     };
            //
            //     const response = await fetch(url, requestOptions);
            //     // console.log('responce:', response);
            //     const responceJson = await response.json();
            //     console.log('response.json():', json);
            //
            //     res.status(200).json(responceJson)
            // } catch (e) {
            //     console.log('ERROR:', e )
            //     // return res.status(400).json({
            //     //     success: false,
            //     // });
            // }

            break
        case "PATCH":
            try {
                const url = `http://localhost:4003/api/person/id/${id}`;
                // const url = req.url;
                // console.log('url in PATCH = :', url); //   /api/users/id/1
                //
                const reqBody = req.body
                // console.log('reqBody in patch = ', reqBody)  //   { firstName: 'Peter', lastName: 'Parker', role: 'spider-man' }

                // const response = await fetch(url);
                // // console.log('responce:', response);
                // const responceJson = await response.json();
                // // console.log('response.json():', json);

                // const head_ers = req.headers
                // console.log('head_ers in PATCH = ', head_ers)

                // const headers_cont_type = req.headers['content-type']
                // console.log('head_ers_cont_type in PATCH = ', head_ers_cont_type)  //    application/json

                let myHeaders = new Headers();
                // myHeaders.append("Content-Type", `${req.headers['content-type']}`);
                myHeaders.append("Content-Type", 'application/json');
                //
                // // const reqBody = req.body
                // // console.log('reqBody = ', reqBody)
                //
                let raw = JSON.stringify(reqBody);
                //
                let requestOptions = {
                    method: method,
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                try {
                    // console.log('begin try before fetch in PATCH')
                    const fetchRes = await fetch(url, requestOptions)
                    // const resText = await fetchRes.text()
                    // console.log('resText = ', resText)
                    const resJson = await fetchRes.json()
                    // console.log('resJson in PATCH = ', resJson)
                    res.status(200).json([resJson])
                }catch (error) {
                    console.log('error:', error)
                }

                // res.status(200).json(responceJson)
            } catch (e) {

            }
            break
        case "DELETE":
            try {

                const url = `http://localhost:4003/api/person/id/${id}`;

                // const url = req.url;
                // console.log('url in PATCH = :', url); //   /api/users/id/1
                //
                // const reqBody = req.body
                // console.log('reqBody in patch = ', reqBody)  //   { firstName: 'Peter', lastName: 'Parker', role: 'spider-man' }
                // const response = await fetch(url);
                // // console.log('responce:', response);
                // const responceJson = await response.json();
                // // console.log('response.json():', json);
                // const head_ers = req.headers
                // console.log('head_ers in PATCH = ', head_ers)
                // const headers_cont_type = req.headers['content-type']
                // console.log('head_ers_cont_type in PATCH = ', head_ers_cont_type)  //    application/json
                // let myHeaders = new Headers();
                // myHeaders.append("Content-Type", `${req.headers['content-type']}`);
                // myHeaders.append("Content-Type", 'application/json');
                //
                // // const reqBody = req.body
                // // console.log('reqBody = ', reqBody)
                //
                // let raw = JSON.stringify(reqBody);
                //

                let requestOptions = {
                    method: method,
                    redirect: 'follow'
                };

                try {
                    // console.log('begin try before fetch in PATCH')
                    const fetchRes = await fetch(url, requestOptions)
                    // const resText = await fetchRes.text()
                    // console.log('resText = ', resText)
                    const resJson = await fetchRes.json()
                    // console.log('resJson in PATCH = ', resJson)
                    res.status(200).json([resJson])
                }catch (error) {
                    console.log('ERROR:', error)
                    // console.log('ERROR:', e )
                    return res.status(400).json({
                        success: false,
                    });
                }

            } catch (e) {
                console.log('error:', e.message())
            }
            break
        default:
            res.setHeaders("Allow", ["GET", "PATCH", "DELETE"]);
            return res
                .status(400)
                .json({ success: false })
                .end(`Method ${method} Not Allowed`);
    }
}