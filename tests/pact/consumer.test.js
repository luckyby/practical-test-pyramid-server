const {Pact, Matchers, Pablisher} = require("@pact-foundation/pact");
const assert = require("assert");
const {eachLike} = Matchers
const { fetchOrders } = require('./consumer')
const fetch = require("node-fetch");
const path = require('path');


describe('Pact with db server API', function () {
    const provider = new Pact({
        // port: 8080,
        port: 4003,
        consumer: "practical_test_pyramid_server",
        provider: "sqlite_db_server_api",
        log: path.resolve(process.cwd(), 'logs', 'pact.log'),
        dir: path.resolve(process.cwd(), 'pacts'),
        // logLevel: 'DEBUG',
        logLevel: 'INFO',
        // spec: 2,
        pactfileWriteMode: "update",
        host: "127.0.0.1",
    })
    // console.log('log', path.resolve(process.cwd()))
    // console.log('before beforeAll')
    beforeAll(async ()=>{
        // console.log('in beforeAll before provider setup')
        await provider.setup()
    })

    afterAll(  async ()=>{
        await provider.finalize()
        // const result = await new Publisher().publishPacts();
        // console.log("Successfully published pacts", result);
    })
    beforeEach( async ()=>{
        return await provider.addInteraction({
            state: 'there are orders',
            uponReceiving: 'a request for orders',
            withRequest: {
                path: '/api/person/id/1',
                method: "GET",

            },
            willRespondWith: {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
                // body: eachLike({
                body: [{
                    id: '1',
                    firstname: 'John',
                    lastname: 'Doe',
                    role: 'unknown man'
                // }),
                }],
            }
        })
    })
    afterEach(() => provider.verify());
    describe('when a call to the API is made', ()=>{

        // beforeEach( async ()=>{
        //     return await provider.addInteraction({
        //         state: 'there are orders',
        //         uponReceiving: 'a request for orders',
        //         withRequest: {
        //             path: '/api/person/id/1',
        //             method: "GET"
        //         },
        //         willRespondWith: {
        //             status: 200,
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             // body: eachLike({
        //             body: {
        //                 id: 1,
        //                 firstname: 'John',
        //                 lastname: 'Doe',
        //                 role: 'unknown man'
        //             },
        //         }
        //     })
        // })

        it('will receive  user by id=1 ', async function () {
            // const result = await fetchOrders()
            const res = await fetch('http://localhost:4003/api/person/id/1');
            // console.log('result = ', res)
            const json = await res.json()
            // console.log('json = ', json)
            // console.log('res.length', res.length)
            assert.ok(json.length)
            // assert.equal(json.length, 1)
        });
    })

});