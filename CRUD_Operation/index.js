

const fs=require("fs")

// fs.rmdirSync("test")

const abc=process.argv.slice(2)
// console.log(abc)

switch(abc[0]){

    case "create":
        fs.writeFileSync(`${abc[1]}`,"test file created successfully")
// console.log("create")

        break;
        case "read":
           console.log(fs.readFileSync(`./${abc[1]}`,"utf8"))
// console.log("read")

            break;
            case "append":
                (fs.appendFileSync(`./${abc[1]}`," appended at last"))
// console.log("append")

                break;
                case "delete":
                    fs.unlinkSync(`./${abc[1]}`)
// console.log("delete")

                    break;

                    case "rename":
                    fs.renameSync(`${abc[1]}`,`${abc[2]}`)
                    break;
                    default:
                        return "invalid"
}