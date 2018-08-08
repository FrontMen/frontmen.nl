import liveServer from 'live-server';

module.exports = {
  serve({ outputPath, port }) {
    liveServer.start({
      port,
      root: outputPath,
      open: false,
      logLevel: 0
    });
  }
};
