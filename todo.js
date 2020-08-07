var fs = require('fs');
const verb = process.argv[2]
const content = process.argv[3]
const content2 = process.argv[4]

switch (verb) {
    case 'add':
        if (fs.existsSync('D:\\工作学习\\Node.js\\Node.js入门\\node-demo-1\\db')) {
            const listContent = fs.readFileSync('D:\\工作学习\\Node.js\\Node.js入门\\node-demo-1\\db').toString()
            const list = JSON.parse(listContent)

            list.push([content, false])
            fs.writeFileSync('D:\\工作学习\\Node.js\\Node.js入门\\node-demo-1\\db', JSON.stringify(list))
            console.log(list)
        } else {
            fs.writeFileSync('D:\\工作学习\\Node.js\\Node.js入门\\node-demo-1\\db', '')
            const list = []

            list.push([content, false])
            fs.writeFileSync('D:\\工作学习\\Node.js\\Node.js入门\\node-demo-1\\db', JSON.stringify(list))
            console.log(list)
        }
        break;
    case 'list':
        {
            const listContent = fs.readFileSync('D:\\工作学习\\Node.js\\Node.js入门\\node-demo-1\\db').toString()
            const list = JSON.parse(listContent)
            console.log(list)
        }
        break
    case 'delete':
        {
            const n = content
            const listContent = fs.readFileSync('D:\\工作学习\\Node.js\\Node.js入门\\node-demo-1\\db').toString()
            const list = JSON.parse(listContent)
            list.splice(n - 1, 1)
            fs.writeFileSync('D:\\工作学习\\Node.js\\Node.js入门\\node-demo-1\\db', JSON.stringify(list))
            console.log(list)
        }
        break;
    case 'done':
        {
            const listContent = fs.readFileSync('D:\\工作学习\\Node.js\\Node.js入门\\node-demo-1\\db').toString()
            const list = JSON.parse(listContent)
            const n = content

            list[n - 1][1] = true
            fs.writeFileSync('D:\\工作学习\\Node.js\\Node.js入门\\node-demo-1\\db', JSON.stringify(list))
            console.log(list)
        }
        break;
    case 'edit':
        {
            const listContent = fs.readFileSync('D:\\工作学习\\Node.js\\Node.js入门\\node-demo-1\\db').toString()
            const list = JSON.parse(listContent)
            const n = content
            list[n-1][0] = content2
            fs.writeFileSync("D:\\工作学习\\Node.js\\Node.js入门\\node-demo-1\\db", JSON.stringify(list))
            console.log(list)
        }
        break
    default:
        console.log("你要进行的操作是: " + verb)
        console.log("我不知道你想干啥")
        break;
}



