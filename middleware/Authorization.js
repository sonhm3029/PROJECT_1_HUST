

class Authorization {

    verify() {
        let user = localStorage.getItem("user");
        if(user) {
            next();
        }
    }
}

module.exports = new Authorization;
