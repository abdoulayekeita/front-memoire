export class Response {
    timeStamp!: string;
    statusCode!: string;
    status!: string;
    reason!: string;
    message!: string;
    developerMessage!: string;
    data!: string;
 
    constructor() {}

    get _timeStamp(): string {
        return this.timeStamp
    }

    get _statusCode(): string {
    return this.statusCode
    }
    get _status(): string {
    return this.status
    }
    get _reason(): string {
    return this.reason
    }
    get _message(): string {
    return this.message
    }
    get _developerMessage(): string {
    return this.developerMessage
    }
    get _data(): string {
    return this.data
    }
    set _developerMessage(developerMessage: string) {
    this.developerMessage = developerMessage;
    }
    set _timeStamp(timeStamp: string) {
    this.timeStamp = timeStamp;
    }
    set _statusCode(statusCode: string) {
    this.statusCode = statusCode;
    }
    set _status(status: string) {
    this.status = status;
    }
    set _reason(reason: string) {
    this.reason = reason;
    }
    set _message(message: string) {
    this.message = message;
    }
    set _data(data: string) {
    this.data = data;
    }
}
