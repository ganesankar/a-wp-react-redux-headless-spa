// AppLogger
import * as loggerLevel from './loggerLevel';

class AppLogger {
  constructor() {
    this.logLevel = process.env.REACT_APP_LOG_LEVEL.replace(/'/g, '');
    this.info(`Log level set as ${this.logLevel}`);
    switch (this.logLevel) {
      case 'TRACE':
        this.logLevelValue = loggerLevel.TRACE;
        break;
      case 'DEBUG':
        this.logLevelValue = loggerLevel.DEBUG;
        break;
      case 'INFO':
        this.logLevelValue = loggerLevel.INFO;
        break;
      case 'LOG':
        this.logLevelValue = loggerLevel.LOG;
        break;
      case 'WARN':
        this.logLevelValue = loggerLevel.WARN;
        break;
      case 'ERROR':
        this.logLevelValue = loggerLevel.ERROR;
        break;
      default:
        this.logLevelValue = loggerLevel.OFF;
    }
    this.consoleEnabled = process.env.REACT_APP_LOG_TO_CONSOLE;
    this.serverEnabled = process.env.REACT_APP_LOG_TO_SERVER;
  }

  trace = (message, data) => {
    this.doLog(loggerLevel.TRACE, message, data);
  };

  debug = (message, data) => {
    this.doLog(loggerLevel.DEBUG, message, data);
  };

  info = (message, data) => {
    this.doLog(loggerLevel.INFO, message, data);
  };

  log = (message, data) => {
    this.doLog(loggerLevel.LOG, message, data);
  };

  warn = (message, data) => {
    this.doLog(loggerLevel.WARN, message, data);
  };

  error = (message, data) => {
    this.doLog(loggerLevel.ERROR, message, data);
  };

  // returns the current timestamp
  getTimestamp = () => new Date().toISOString();

  // log
  doLog = (level, message, data = '') => {
    // TRACE = 0, DEBUG, INFO, LOG, WARN, ERROR, OFF
    if (level < this.logLevelValue) {
      return;
    }

    let messageLogLevel = '';
    switch (level) {
      case 0:
        messageLogLevel = 'TRACE';
        break;
      case 1:
        messageLogLevel = 'DEBUG';
        break;
      case 2:
        messageLogLevel = 'INFO';
        break;
      case 3:
        messageLogLevel = 'LOG';
        break;
      case 4:
        messageLogLevel = 'WARN';
        break;
      case 5:
        messageLogLevel = 'ERROR';
        break;
      default:
        messageLogLevel = '';
    }
    const messageToLog = `${this.getTimestamp()} | ${messageLogLevel} | ${message}`;

    if (this.consoleEnabled) {
      console.log(messageToLog, data);
    }

    let dataToPost;
    if (this.serverEnabled) {
      if (typeof data === 'object') {
        try {
          dataToPost = JSON.stringify(data, null, 2);
        } catch (e) {
          dataToPost = `circular object in message. value: ${data}`;
        }
      }
      this.logToServer(messageToLog, dataToPost);
    }
  };

  // log to server
  // TODO: server side log receiver - https://www.sitepoint.com/logging-errors-client-side-apps/#rollingyourownserversidelogger
  // Winston https://www.npmjs.com/package/winston [ds | 08-May]
  logToServer = (message, data) => {
    let logsToSend = [];
    const logsArray = localStorage.getItem('log-store');
    if (logsArray) {
      logsToSend = JSON.parse(logsArray);
    }
    logsToSend.push({ log: message, data });
    localStorage.setItem('log-store', JSON.stringify(logsToSend));

    // persist logs in local storage until the batch size is reached.
    const batchSize = process.env.REACT_APP_LOG_TO_SERVER_BATCH_SIZE;
    if (logsToSend.length >= batchSize) {
      // TODO: send logs to server

      // TODO: clear logs after successfully sending to server
      localStorage.removeItem('log-store');
    }
  };
}

export default AppLogger;
