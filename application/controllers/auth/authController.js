import { response } from "../../utils/response.js";
import { AuthModel } from "../../../domain/models/authModel.js";
// import { catchedAsync } from "../../utils/catchedAsync.js";

export const authenticate = (req, res) => {
        const { user, password } = req.body;
        const authRequest = new AuthModel(user, password);
        response(res, 200, authRequest);
    };
