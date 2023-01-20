async function reqHandler(url, method, redirect, headers, body, ){

    let myHeaders = new Headers();
    let raw
    let requestOptions = {
        method: method,
        redirect: redirect
    }

    if(headers===""){
        // console.log('headers === underfined')
    }else{
        for (let key of Object.keys(headers)){
            myHeaders = {...myHeaders, ...{[key]:  headers[`${key}`]}  };
        }
        requestOptions = { ...requestOptions,...{headers: myHeaders } }
    }

    // if(headers!==""){
    //     for (let key of Object.keys(headers)){
    //         myHeaders = {...myHeaders, ...{[key]:  headers[`${key}`]}  };
    //     }
    //     requestOptions = { ...requestOptions,...{headers: myHeaders } }
    // }

    if(body===""){
        console.log('body === ""')
    }else{
        raw = JSON.stringify( body );
        requestOptions = {...requestOptions, ...{body: raw}}
    }

    try {
        const fetchRes = await fetch(url, requestOptions)
        const resJson = await fetchRes.json()
        setResponseText(JSON.stringify(resJson))
    }catch (e) {
        console.log('error:', e)
    }
}

export const tryHandlerNotEvent = async ( props, resVisible, {setResVisible}) => {
    // event.preventDefault();

    if(resVisible==='none'){
        setResVisible('grid')
        setButtonText('Close')
        setbuttonBackColor('#71a6c1')
        await reqHandler(
            props.cardReqUrl,
            props.cardReqMethod,
            props.cardReqRedirect,
            props.cardReqHeaders,
            props.cardReqBody
        )
    }else {
        setResVisible('none')
        setButtonText('Try it!')
        setbuttonBackColor('#b22222')
    }
}

