/* CALLBACKS */
/*  function fetchData(url, callback){
    console.log('initial fetchdata, wait for 2 seconds')
    //Simulationg an asynchronous request
    setTimeout(()=>{
        const data = {id: 1, name: 'Mike'};
        callback(data);
    }, 2000);
}

fetchData('https://example.com', (data)=>{
    console.log('fetchdata: ', data);
})  */


/* PROMISES */
/* function fetchData(url) {
    return new Promise((resolve, reject)=>{
        //Simulationg an asynchronous request
        setTimeout(()=>{
            const data = {id: 1, name: 'Mike'};
            //if error use reject('message)
            if(true) reject('error Ocurred')
            resolve(data);
        }, 2000);
    });
}

fetchData('https://example.com').then((dataResp)=>{
    console.log('fetchData with promise: ', dataResp)
}).catch((err)=>{
    console.log('error:', err)
}) */


/* ASYNC/AWAIT */
function fetchData(url) {
    return new Promise((resolve, reject)=>{
        //Simulationg an asynchronous request
        setTimeout(()=>{
            const data = {id: 1, name: 'Mike'};
            //if error use reject('message)
            //if(true) reject('error Ocurred')
            resolve(data);
        }, 2000);
    });
}

async function getData() {
    try {
        console.log('fetching...')
        const data = await fetchData('https://example.com');
        console.log(data);
    } catch(err) {
        console.log('error:', err)
    }
    
}

getData();