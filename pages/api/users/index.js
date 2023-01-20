
export default async (req, res) => {
    // console.log('req = ', req)
    const method = req.method;
    // console.log('typeof method = ', typeof method)
    // console.log('method in users index = ', method)
    const reqBody = req.body
    // console.log('reqBody = ', reqBody)
    // const redir = req._httpMessage
    // console.log('redir = ', redir)
    switch (method) {
        case "GET":
            try {
                const url = `http://localhost:4003/api/person`;

                const response = await fetch(url);
                const json = await response.json();
                // console.log("response.json():", json);

                res.status(200).json(json);
            } catch (e) {
                return res.status(400).json({
                    success: false,
                });
            }
            break
        case "POST":
            try {

                let myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                // const reqBody = req.body
                // console.log('reqBody = ', reqBody)

                let raw = JSON.stringify(reqBody);

                let requestOptions = {
                    method: method,
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };
                // console.log('requestOptions in users index post', requestOptions)
                try {
                    const fetchRes = await fetch("http://localhost:4003/api/person", requestOptions)
                    // const resText = await fetchRes.text()
                    // console.log('resText = ', resText)
                    const resJson = await fetchRes.json()
                    // console.log('resJson = ', resJson)
                    res.status(200).json([resJson])
                }catch (error) {
                    console.log('error:', error)
                }
                // fetch("http://localhost:4003/api/person", requestOptions)
                //     .then(response => {
                //
                //         res.status(200).json(response.json())
                //     })
                    // .then(result => {
                    //     console.log('result in POST users index',result)
                    //     res.status(200).json(result)
                    // })
                    // .catch(error => console.log('error', error));

            } catch (e) {
                return res.status(400).json({
                    success: false,
                });
            }
            break
        case "DELETE":
            try {

                let requestOptions = {
                    method: method,
                    redirect: 'follow'
                };
                // console.log('requestOptions in users index post', requestOptions)
                try {
                    const fetchRes = await fetch("http://localhost:4003/api/person", requestOptions)
                    // const resText = await fetchRes.text()
                    // console.log('resText = ', resText)
                    const resJson = await fetchRes.json()
                    // console.log('resJson = ', resJson)
                    res.status(200).json([resJson])
                }catch (error) {
                    console.log('error:', error)
                }

            } catch (e) {
                return res.status(400).json({
                    success: false,
                });
            }
            break
        default:
            // res.setHeaders("Allow", ["GET", "POST", "DELETE"]);

            return res
                .status(405)
                .json({ success: false })
                // .end(`Method ${method} Not Allowed`);
    }
}