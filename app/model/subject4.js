module.exports = app => {
    const {
        INTEGER,
        STRING,
        DATE
    } = app.Sequelize;
    const Subject4 = app.model.define('subject4', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        original_id:{type: INTEGER,},
        type: {
            type: INTEGER
        },
        question: { type: STRING, },
        a: { type: STRING, },
        b: { type: STRING, },
        c: { type: STRING, },
        d: { type: STRING, },
        imgurl: { type: STRING, },
        answer: { type: INTEGER },
        analysis: { type: STRING, },
        category_id:{type: INTEGER},
        created_at: DATE,
        updated_at: DATE,
    }, {
        freezeTableName: true, //使用默认表名，不会变以collects
    })
    return Subject4;
}