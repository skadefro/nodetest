const { Client, ClientError } = require('openiap');
const client = new Client();
client.connect();
client.on_client_event((event) => {
    console.log("client event", event);
    if (event.event == "SignedIn") {
        const queuename = client.register_queue({ queuename: 'testq' }, (event) => {
            console.log("queue:", event?.queuename, "event from:", event?.replyto, "payload:", event?.data);
        });
        console.log("Registered queue as", queuename);
    }
});
