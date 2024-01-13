import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: 'https://tictactoe.aboutdream.io/openapi/',
  apiFile: './src/api/tictactoeEmptyApi.ts',
  apiImport: 'tictactoeEmptyApi',
  outputFile: './src/api/tictactoeApi.ts',
  exportName: 'tictactoeApi',
  // flattenArg: true,
  hooks: true,
};

export default config;
