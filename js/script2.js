import { start, get } from 'prompt';

//
// Start the prompt
//
start();

//
// Get two properties from the user: username and email
//
get(['username', 'email'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
});