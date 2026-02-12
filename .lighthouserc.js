module.exports = {
  ci: {
    collect: {
      // When using --url in autorun this isn't required, kept for reference
      numberOfRuns: 3,
      // settings: { emulatedFormFactor: 'mobile' },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', {minScore: 0.9}],
        'categories:accessibility': ['warn', {minScore: 0.9}],
        'categories:best-practices': ['warn', {minScore: 0.9}],
        'categories:seo': ['warn', {minScore: 0.9}],
        'categories:pwa': ['off']
      }
    }
  }
};
