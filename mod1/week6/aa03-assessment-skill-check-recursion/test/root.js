const babel = require('babel-core');
const jsdom = require('jsdom');
const path = require('path');

before(function(done) {
  const babelResult = babel.transformFileSync(path.resolve(__dirname, '..',
    'problems/find-duplicates.js'), {
    presets: ['env']
  });

  jsdom.env('<div></div>', [], {
    src: babelResult.code,
    virtualConsole: jsdom.createVirtualConsole().sendTo(console)
  }, (err, window) => {
    if (err) {
      return done(err);
  }

    Object.keys(window).forEach(key => {
      global[key] = window[key];
    });

    return done();
  });
});
