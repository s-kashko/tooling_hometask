export default class Message {
    constructor() {
        this.label = 'Class Message'
    }
    message(message) {
        const date = new Date().toJSON()
        return (
            `${message} (posted on ${date})`

        )
    }
}