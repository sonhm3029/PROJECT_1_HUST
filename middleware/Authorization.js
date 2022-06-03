

class Authorization {

    verify(req,res,next) {
        let userId = req?.cookies?.id;
        if(userId) {
            next();
        }
        else {
            res.redirect("/login");
        }
    }
}

module.exports = new Authorization;
