var fs = require('fs');
const verb = process.argv[2]
const content = process.argv[3]



const listContent = fs.readFileSync('D:\\工作学习\\Node.js\\Node.js入门\\node-demo-1\\db').toString()

const list = JSON.parse(listContent)



list.push(content)

fs.writeFileSync('D:\\工作学习\\Node.js\\Node.js入门\\node-demo-1\\db',JSON.stringify(list))

console.log(list)