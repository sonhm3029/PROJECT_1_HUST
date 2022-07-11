const { get } = require("../routes/events");
const db = require("../database/index");
const {members} = require("../constants");

class UsersController {

    async renderListMembers(req, res, next){
        console.log("ok",req?.query);
        let data = await db.query('SELECT * FROM users;');
        console.log("hehe",data.rows);
        data = data?.rows?.map( item => ({
            ...item,
            role:members.role(item?.role),
            status:members.membersStatus(item?.status),
            studyfields:members.studyFields(item?.studyfields),
            joinindate: members.joinInDate(item?.joinindate)
        }));
        console.log('ok');
        res.render('list_member_management', {
            query:JSON.stringify( {
                ...req?.query
            }),
            data: data,
            helpers:{
                typeof(value) {return typeof value},
                JSONparse(value) {return JSON.parse(value)},
                get(value, attr) {return (JSON.parse(value))[attr] }
            }
        });
    }

}

module.exports = new UsersController;
