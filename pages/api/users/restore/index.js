export default async (req, res) => {

    const method = req.method;
    // console.log('method = ', method)
    switch (method) {

        case "POST":
            try {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                // var urlencoded = new URLSearchParams();
                // urlencoded.append("firstname", "James");
                // urlencoded.append("lastname", "Bond");
                // urlencoded.append("role", "agent 007");

                const reqBody = req.body
                // console.log('reqBody in POST RESTORE = ', reqBody)
                const rawBody = JSON.stringify(reqBody)
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: rawBody,
                    redirect: 'follow'
                };

                const response = await fetch("http://localhost:4003/api/person/restore", requestOptions)
                // const respText = await response.text()
                // console.log('respText', respText)
                // .then(response => response.text())
                // .then(result => console.log(result))
                // .catch(error => console.log('error', error));
                const responseJson = await response.json()
                res.status(200).json(responseJson)

            } catch (e) {
                return res.status(400).json({
                    success: false,
                });
            }
            break
        // case "DELETE":
        //     try {
        //
        //     } catch (e) {
        //         return res.status(400).json({
        //             success: false,
        //         });
        //     }
        default:
            // res.setHeaders("Allow", ["GET", "POST", "DELETE"]);
            return res
                .status(405)
                .json({ success: false })
                .end(`Method ${method} Not Allowed`);
    }
}