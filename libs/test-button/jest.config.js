module.exports = {
  name: 'test-button',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/test-button',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
