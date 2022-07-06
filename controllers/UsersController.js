const { get } = require("../routes/events");

class UsersController {

    renderListMembers(req, res, next){
        console.log(req?.query);
        res.render('list_member_management', {
            query:JSON.stringify( {
                ...req?.query
            }),
            helpers:{
                typeof(value) {return typeof value},
                JSONparse(value) {return JSON.parse(value)},
                get(value, attr) {return (JSON.parse(value))[attr] }
            }
        });
    }

}

module.exports = new UsersController;
