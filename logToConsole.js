const { format } = require('date-fns');

const logToConsole = (message) => {
    const dateTime = `${format(new Date(), 'yyyy MM dd\tHH:mm:ss')}`;
    console.log(`${dateTime}\t${message}`);
}

module.exports = logToConsole;