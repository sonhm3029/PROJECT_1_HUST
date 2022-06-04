

class Authorization {

    verify(req,res,next) {
        let authToken = req?.cookies?.auth_token;
        if(authToken) {
            next();
        }
        else {
            res.redirect("/login");
        }
    }
}

module.exports = new Authorization;
