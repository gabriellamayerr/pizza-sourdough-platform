// Minimal test runner: require test files to execute them
try {
  require('./sample.test.js');
  console.log('\nAll tests passed.');
  process.exit(0);
} catch (err) {
  console.error('\nTest run failed:');
  console.error(err);
  process.exit(1);
}
