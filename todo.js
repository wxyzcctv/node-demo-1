var fs = require('fs');
const path = require('path');

const verb = process.argv[2]
const content = process.argv[3]
const content2 = process.argv[4]
const dbPath = path.join(__dirname, 'db')

enSureDb()

const list = fetch()
const n = content

switch (verb) {
    case 'add':
        addTask(list, content)
        break;
    case 'list':
        break;
    case 'delete':
        removeTask(list, n)
        break;
    case 'done':
        markTaskDone(list, n)
        break;
    case 'edit':
        editTask(list, n, content2)
        break;
    default:
        console.log("你要进行的操作是: " + verb)
        console.log("我不知道你想干啥")
        break;
}

display(list)
if (verb !== 'list') {
    save(list)
}


// 帮助函数

function enSureDb() {
    if (!fs.existsSync(dbPath)) {
        fs.writeFileSync(dbPath, '')
    }
}
function fetch() {
    const listContent = fs.readFileSync(dbPath).toString()
    let list
    try {
        list = JSON.parse(listContent) || [] // 兜底，保证最少有一个[]
    } catch (err) {
        list = []
    }
    return list
}
function save(list) {
    fs.writeFileSync(dbPath, JSON.stringify(list))
}
function display(list) {
    for (let i = 0; i < list.length; i++) {
        const markStatus = list[i][1] === true ? "[x]" : "[_]"
        console.log(markStatus + ' 任务内容是: ' + list[i][0])
    }
}
function addTask(list, content) {
    list.push([content, false])
}
function removeTask(list, n) {
    list.splice(n - 1, 1)
}
function markTaskDone(list, n) {
    list[n - 1][1] = true
}
function editTask(list, n, newContent) {
    list[n - 1][0] = newContent
}
