import { BadRequestException, NotFoundException, PasswordIncorrectException } from "../../domain/exceptions/exceptions.js";
import userRepository from "../../infrastructure/repositories/userRepository.js";

export const validateUser = async (req, res, next) => {
    try {
        const { user, password } = req.body;
        if(!user || !password) {
            throw new BadRequestException(!user ? "user" : "password");
        }
        const userFound = await userRepository.findByUser(user);
        if(!userFound) {
            throw new NotFoundException(user);
        }

        if(userFound.password != password) {
            throw new PasswordIncorrectException();
        }
        next();

    } catch (err) {
        next(err);
    }
}