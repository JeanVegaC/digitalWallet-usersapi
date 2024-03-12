export class NotFoundException extends Error {
    constructor(user){
        super();
        this.message = `User ${user} not found`;
        this.statusCode = 404;
    }
}

export class BadRequestException extends Error {
    constructor(parameter){
        super();
        this.message = `${parameter} is required`;
        this.statusCode = 400;
    }
}

export class PasswordIncorrectException extends Error {
    constructor(){
        super();
        this.message = "Password incorrect";
        this.statusCode = 400;
    }
}