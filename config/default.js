module.exports = {
  CSP: {
    directives: {
      defaultSrc: ['https://addons.cdn.mozilla.net'],
      baseUri: ['"self"'],
      childSrc: ['"none"'],
      connectSrc: [
        'https://addons.mozilla.org',
        'https://sentry.prod.mozaws.net',
      ],
      formAction: ['"self"'],
      frameSrc: ['"none"'],
      imgSrc: [
        '"self"',
        'data:',
        'https://addons.cdn.mozilla.net',
        'https://addons-amo.cdn.mozilla.net',
        'https://www.google-analytics.com',
      ],
      manifestSrc: ['"none"'],
      mediaSrc: ['"none"'],
      objectSrc: ['"none"'],
      scriptSrc: [
        'https://addons-amo.cdn.mozilla.net',
        'https://www.google-analytics.com/analytics.js',
      ],
      styleSrc: ['https://addons-amo.cdn.mozilla.net'],
      workerSrc: ['"none"'],
      reportUri: '/__cspreport__',
      fontSrc: ['https://addons-amo.cdn.mozilla.net'],
      prefetchSrc: ['https://addons.cdn.mozilla.net'],
    },
    reportOnly: false,
    setAllHeaders: false,
    disableAndroid: false,
  },
};
