require('dotenv').config();

const { version } = require('./package.json');
const { resolve } = require('path');
const { writeFile } = require('fs-extra');

const environmentFilePath = resolve(__dirname, 'src', 'environments', `environment.${process.env['ENVIRONMENT']}.ts`);

const environmentFileContent = `
// IMPORTANT: THIS FILE IS AUTO GENERATED!
// DO NOT MANUALLY EDIT OR INCLUDE IN VERSION CONTROL!

export const environment = {
  environment: '${process.env['ENVIRONMENT']}',
  production: ${process.env['PRODUCTION']},
  version: '${version}',
  firebase: {
    apiKey: '${process.env['FIREBASE_API_KEY']}',
    authDomain: '${process.env['FIREBASE_AUTH_DOMAIN']}',
    projectId: '${process.env['FIREBASE_PROJECT_ID']}',
    storageBucket: '${process.env['FIREBASE_STORAGE_BUCKET']}',
    messagingSenderId: '${process.env['FIREBASE_MESSAGING_SENDER_ID']}',
    appId: '${process.env['FIREBASE_APP_ID']}'
  }
};
`;

writeFile(environmentFilePath, environmentFileContent, { encoding: 'utf-8' });
