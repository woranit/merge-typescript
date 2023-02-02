# merge-typescript
there are 2 files which

merge.ts contain merge function<br>
test.ts for unit test<br>
<br>
how to setup dependency <br>
1.create a new directory<br>
2.run 'npm init -y' to create the package.json<br>
3.run 'npm i -D typescript' to install TypeScript as a development dependency<br>
4.run 'npx tsc --init' to create a tsconfig.json<br>
5.add a build command to package.json<br>
"scripts": {<br>
  "build": "tsc"<br>
  ...<br>
6.run 'npm run build'<br>
7.run 'npm i -D jest ts-jest @types/jest' to install some additional dependencies<br>
8.run 'npx ts-jest config:init' to tell jest that we want to use ts-jest as a preprocessor<br>
9.add a test command to package.json<br>
"scripts": {<br>
    ...<br>
    "test": "jest"<br>
  },<br>
<br>
to execute code and unit test<br>
1.run 'npm test' in your directory<br>
