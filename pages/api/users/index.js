const Users = async (req, res) => {
    const method = req.method;
    const reqBody = req.body

    switch (method) {
        case "GET":
            try {
                const url = `http://localhost:4003/api/person`;
                const response = await fetch(url);
                const json = await response.json();

                res.status(200).json(json);
            } catch (error) {
                console.log('error in GET in Users:', error.message)
                return res.status(400).json({
                    success: false,
                });
            }
            break
        case "POST":
            try {
                let myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                let raw = JSON.stringify(reqBody);

                let requestOptions = {
                    method: method,
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                try {
                    const fetchRes = await fetch("http://localhost:4003/api/person", requestOptions)
                    const resJson = await fetchRes.json()
                    res.status(200).json(resJson)
                }catch (error) {
                    console.log('error in fetch in POST in Users:', error.message)
                }

            } catch (error) {
                console.log('error in POST in Users:', error.message)
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
                try {
                    const fetchRes = await fetch("http://localhost:4003/api/person", requestOptions)
                    const resJson = await fetchRes.json()

                    res.status(200).json([resJson])
                }catch (error) {
                    console.log('error in fetch in DELETE in Users:', error.message)
                }

            } catch (error) {
                console.log('error in DELETE in Users:', error.message)
                return res.status(400).json({
                    success: false,
                });
            }
            break
        default:
            res.setHeader("Allow", ["GET", "POST", "DELETE"]);
            return res
                .status(405)
                .json({ success: false, "message": `Method ${method} Not Allowed` })
    }
}

export default Users