# merge-typescript
there are 2 files which

merge.ts contain merge function
test.ts for unit test

how to setup dependency 
1.create a new directory
2.run 'npm init -y' to create the package.json
3.run 'npm i -D typescript' to install TypeScript as a development dependency
4.run 'npx tsc --init' to create a tsconfig.json
5.add a build command to package.json
"scripts": {
  "build": "tsc"
  ...
6.run 'npm run build'
7.run 'npm i -D jest ts-jest @types/jest' to install some additional dependencies
8.run 'npx ts-jest config:init' to tell jest that we want to use ts-jest as a preprocessor
9.add a test command to package.json
"scripts": {
    ...
    "test": "jest"
  },

to execute code and unit test
run 'npm test' in your directory
