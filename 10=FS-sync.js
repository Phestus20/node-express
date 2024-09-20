// sync

const FS = require('fs')
const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/second.txt','utf8');
const second = readFileSync('./content/subfolder/test.txt','utf8');

console.log(first, second)

//  creates  new file result-sync.txt if file dont exist and add this  values${first},  ${second}
writeFileSync('./content/result-sync.txt', `Here is the result: ${first},  ${second}`,
    {falg: 'a'}
);