module.exports = app => {
    const {
        INTEGER,
        STRING,
        DATE
    } = app.Sequelize;
    const Collect = app.model.define('collect',{
        id:{
            type:INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        author:STRING,
        date:STRING,
        link:STRING,
        title:STRING,
        created_at:DATE,
        updated_at:DATE
    },{
        freezeTableName: true, //使用默认表名，不会变以collects
    })
    return Collect;
}