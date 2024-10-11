const readline = require('readline');
const { Client } = require('openiap');
const os = require('os');

// Reads a line from the keyboard input.
function keyboardInput() {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('Enter your message: ', (input) => {
            rl.close();
            resolve(input.trim());
        });
    });
}

// Watch event handler
function onwatch(event) {
    const { document, operation } = event;
    console.log(`${operation} on ${document}`);
}

// Do some calculation to generate CPU load
function factorial(num) {
    return Array.from({ length: num }, (_, i) => i + 1).reduce((acc, val) => acc * val, 1);
}

// Main function
async function doit() {
    // Display system information

    const numCalcs = 100000;
    const availableCores = Math.floor(2 / 2); // use half of the threads
    const iterPerCore = Math.floor(numCalcs / availableCores);
    const numIters = 5000;

    const client = new Client();

    try {
        await client.connect('');
    } catch (e) {
        console.error('Failed to connect to server:', e);
        return;
    }
    let eventid = client.on_client_event((event) => {
        console.log("client event", event);
    });

    console.log('? for help');
    let input = await keyboardInput();

    try {
        while (input.toLowerCase() !== 'quit') {
            switch (input.toLowerCase()) {
                case '?':
                    console.log('Help:\nquit: to quit\nq: Query\nqq: Query all\nc: CPU Load Test');
                    break;
    
                case 'c':
                    console.log(`Calculating factorial of 20 ${numCalcs} times`);
                    for (let i = 0; i < numIters; i++) {
                        const threads = [];
                        for (let j = 0; j < availableCores; j++) {
                            threads.push(
                                new Promise((resolve) => {
                                    factorial(20);
                                    resolve();
                                })
                            );
                        }
                        await Promise.all(threads);
                    }
                    break;
    
                case 'q':
                    try {
                        const response = await client.query_async({
                            collection: 'entities',
                            query: '{}',
                            projection: '{ "name": 1 }'
                        });
                        console.log(response);
                    } catch (e) {
                        console.error('Failed to query:', e);
                    }
                    break;
    
                case 'qq':
                    try {
                        const response = await client.query_async({ collection: 'entities', query: '{}', });
                        console.log(response);
                    } catch (e) {
                        console.error('Failed to query all:', e);
                    }
                    break;
    
                default:
                    console.log('Invalid command');
            }
            input = await keyboardInput();
        }
    } catch (error) {
        console.error('Error:', error);        
    }
    client.free();
}

// Execute main function
doit().catch((err) => console.error(err));
