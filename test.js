const { Client, ClientError } = require('openiap');
const fs = require('fs');
(async () => {
    try {
        // const url = 'http://localhost:50051';
        // const url = 'http://grpc.localhost.openiap.io/';
        // const url = 'https://grpc.localhost.openiap.io/';
        // const url = 'https://grpc.demo.openiap.io/';
        // const url = 'https://grpc.app.openiap.io/';
        const url = '';
        const client = new Client();
        // client.enable_tracing("openiap=debug", "close");
        //client.enable_tracing("openiap=debug", "new");
        client.enable_tracing("openiap=info", "");

        // setInterval(() => {
        //     console.log("NodeJS: Event loop is running");
        // }, 1000);

        // client.run_async_in_node(()=> {
        //     console.log("NodeJS:: run_async_in_node done.");
        // })

        // console.log("NodeJS:: endless loop");
        // while(true) {
        //     await new Promise(resolve => setTimeout(resolve, 1000));
        // }
        // await client.connect_async(url);
        client.connect(url);
        client.log("NodeJS:: connect completed, now call signin() again")
        // const signin_result2 = await client.signin_async();
        // if(signin_result2.success) {
        //     client.log("async signed in", signin_result2.success);
        // } else {
        //     client.log("async signed failed", signin_result2.error);
        // }
        const signin_result = client.signin();
        client.log("NodeJS:: signin() complete")
        // client.log(signin_result);
        if (signin_result.success) {
            client.log("signed in" + signin_result.success);

            const query_result = await client.query({ collectionname: 'entities', query: '{}', projection: '{"name":1}'});
            console.log("Got", query_result.length, "results");
            

            // for (y = 0; y < 1; y++) {
            //     for (let i = 0; i < 1; i++) {
            //         const query_result = client.query({ collectionname: 'entities', query: '{}', projection: '{"name":1}', orderby: '{}', queryas: '', explain: false, skip: 0, top: 0 });
            //         console.log("Got", query_result.length, "results");
            //     }
            // }
            // const query_result = await client.query_async({ collectionname: 'entities', query: '{}', projection: '{"name":1}', orderby: '{}', queryas: '', explain: false, skip: 0, top: 0 });
            // console.log("Got", query_result.length, "results");
    
            // let promises = [];
            // for(y = 0; y < 1; y++) {
            //     for(let i = 0; i < 5; i++) {
            //         promises.push(client.query_async({ collectionname: 'entities', query: '{}', projection: '{"name":1}', orderby: '{}', queryas: '', explain: false, skip: 0, top: 0 }));
            //     }
            //     client.log(
            //         (await Promise.all(promises)).map(result => result.length)
            //     );
            //     promises = [];
            // }

            // // const aggregate_result2 = await client.aggregate_async({ collectionname: 'entities', aggregates: '[]', explain: false });
            // // console.log("aggregate success", aggregate_result2.length, " results");
            // const aggregate_result = client.aggregate({ collectionname: 'entities', aggregates: '[]', explain: false });
            // console.log("aggregate success", aggregate_result.length, " results");

            // // const insert_many_result2 = await client.insert_many_async({ collectionname: 'entities', documents: '[{"name":"test from nodejs", "_type": "test"}, {"name":"test from nodejs", "_type": "test"}]' });
            // // console.log("insert_many success", insert_many_result2);
            // const insert_many_result = client.insert_many({ collectionname: 'entities', documents: '[{"name":"test from nodejs", "_type": "test"}, {"name":"test from nodejs", "_type": "test"}]' });
            // console.log("insert_many success", insert_many_result);


            // // const download_result2 = await client.download_async({ collectionname: 'fs.files', id: '65a3aaf66d52b8c15131aebd', folder: '', filename: '' });
            // // console.log("download success", download_result2);
            // const download_result = client.download({ collectionname: 'fs.files', id: '65a3aaf66d52b8c15131aebd', folder: '', filename: '' });
            // console.log("download success", download_result);

            // let filepath = 'testfile.csv';
            // if (!fs.existsSync(filepath)) {
            //     filepath = '../testfile.csv';
            // }

            // // const upload_result2 = await client.upload_async({ filepath, filename: 'node-test.csv', mimetype: '', metadata: '', collectionname: 'fs.files' });
            // // console.log("upload success", upload_result2);
            // const upload_result = client.upload({ filepath, filename: 'node-test.csv', mimetype: '', metadata: '', collectionname: 'fs.files' });
            // console.log("upload success", upload_result);


            // // var count_result2 = client.count_async({ collectionname: 'entities', query: '{}', queryas: '' });
            // // console.log("count success", count_result2);
            // var count_result = client.count({ collectionname: 'entities', query: '{}', queryas: '' });
            // console.log("count success", count_result);

            // // var distinct_result2 = await client.distinct_async({ collectionname: 'entities', field: '_type' });
            // // console.log("distinct success", distinct_result2);
            // var distinct_result = client.distinct({ collectionname: 'entities', field: '_type' });
            // console.log("distinct success", distinct_result);


            // let eventcount = 0;
            // // const watch_result2 = await client.watch_async({ collectionname: 'entities', paths: '' }, (event) => {
            // //     event.document = JSON.parse(event.document);
            // //     console.log("watch " + event.operation + " for " + event.document._type + " / " + event.document.test);
            // //     eventcount++;
            // // });
            // // console.log("watch created as", watch_result2);
            // const watch_result = client.watch({ collectionname: 'entities', paths: '' }, (event) => {
            //     console.log("watch " + event.operation + " for " + event.document._type + " / " + event.document.test);
            //     eventcount++;
            // });
            // console.log("watch created as", watch_result);


            // while (eventcount < 1) {
            //     await new Promise(resolve => setTimeout(resolve, 1000));
            // }

            // console.log("UNWATCH", watch_result)
            // client.unwatch(watch_result);

            // let queuecount = 0;
            // const queuename = client.register_queue({ queuename: 'testq' }, (event) => {
            //     console.log("queue event " + event.queuename + " from " + event.replyto + " / " + event.data);
            //     queuecount++;
            // });
            // console.log("queue registered with name", queuename);
            // while (queuecount < 2) {
            //     await new Promise(resolve => setTimeout(resolve, 1000));
            // }
            // client.unregister_queue(queuename);
            // console.log("Un registered queue", queuename);

            // let exchangecount = 0;
            // const exchangename = client.register_exchange({ exchangename: 'testexc' }, (event) => {
            //     console.log("exchange event " + event.exchangename + " from " + event.replyto + " / " + event.data);
            //     exchangecount++;
            // });
            // console.log("exchange registered with name", exchangename);
            // while (exchangecount < 2) {
            //     await new Promise(resolve => setTimeout(resolve, 1000));
            // }

            // // const insert_one_result2 = await client.insert_one_async({ collectionname: 'entities', document: '{"name":"test from nodejs", "_type": "test"}' });
            // // console.log("insert_one success", insert_one_result2._id);
            // const insert_one_result = client.insert_one({ collectionname: 'entities', document: '{"name":"test from nodejs", "_type": "test"}' });
            // console.log("insert_one success", insert_one_result._id);


            // const update_one_result = client.update_one({ collectionname: 'entities', item: `{"name":"test update from nodejs", "_id": "${insert_one_result._id}"}` });
            // console.log("update_one success", update_one_result);

            // const delete_one_result = client.delete_one({ collectionname: 'entities', id: insert_one_result._id });
            // console.log("delete_one success", delete_one_result == 1, delete_one_result);

            // // const insert_or_update_one_result = await client.insert_or_update_one_async({ collectionname: 'entities', item: `{"name":"test insert_or_update one from nodejs", "age": 21 }`, uniqeness: "name" } );
            // // console.log("insert_or_update_one success", insert_or_update_one_result._id, insert_or_update_one_result.age);
            // const insert_or_update_one_result = client.insert_or_update_one({ collectionname: 'entities', item: `{"name":"test insert_or_update one from nodejs", "age": 21 }`, uniqeness: "name" } );
            // console.log("insert_or_update_one success", insert_or_update_one_result._id, insert_or_update_one_result.age);
            // const insert_or_update_one_result2 = client.insert_or_update_one({ collectionname: 'entities', item: `{"name":"test insert_or_update one from nodejs", "age": 22 }`, uniqeness: "name" });
            // console.log("insert_or_update_one success2", insert_or_update_one_result2._id, insert_or_update_one_result2.age);

            // // const delete_many_result = client.delete_many({ collectionname: 'entities', query: '{"name":"test insert_or_update one from nodejs"}' });
            // // console.log("delete_many success", delete_many_result);
            // const delete_many_result = client.delete_many({ collectionname: 'entities', ids: [insert_or_update_one_result2._id] });
            // console.log("delete_many success", delete_many_result);


            let nextrun = new Date();
            nextrun.setSeconds(nextrun.getSeconds() + 60);
            nextrun = undefined;
            let files = [];
            files.push("../testfile.csv");
            let push_workitem_result = client.push_workitem({ wiq: "rustqueue", name: "node test", nextrun, files});
            console.log("push_workitem success", push_workitem_result);

            let pop_workitem_result = client.pop_workitem({ wiq: "rustqueue" });
            console.log("pop_workitem success", pop_workitem_result);


            client.log("*********************************")
            client.log("done, free client");
            client.log("*********************************")
            client.free();
        } else {
            client.log("signed failed", signin_result.error);
        }
    } catch (error) {
        if (error instanceof ClientError) {
            console.error(`An error occurred: ${error.message}`);
        } else {
            console.error(`An unexpected error occurred: ${error}`);
        }
    }
})();