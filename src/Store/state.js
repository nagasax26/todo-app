import crypto from 'crypto';


export default {
    text: "",
    todos: [
        {
            id: crypto.randomBytes(16).toString("hex"),
            text: "take the dog out",
            date: "14/09/2017"
        },
        {
            id: crypto.randomBytes(16).toString("hex"),
            text: "do a sport",
            date: "14/09/2017"
        },
        {
            id: crypto.randomBytes(16).toString("hex"),
            text: "watch tv",
            date: "13/09/2017"
        }
    ]
}