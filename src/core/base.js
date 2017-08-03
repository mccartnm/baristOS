const nConsole = require("console")

function printToLog (message) {
    var myConsole = new nodeConsole.Console(process.stdout, process.stderr);
    myConsole.log('Hello World!');
}