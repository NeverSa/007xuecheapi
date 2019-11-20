module.exports = app => {
    const {
        INTEGER,
        STRING,
        DATE
    } = app.Sequelize;
    const SubjectCategory = app.model.define('subject_category', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category_id:{type: INTEGER,},
        category_name: {
            type: STRING
        },
        created_at: DATE,
        updated_at: DATE,
    }, {
        freezeTableName: true, //使用默认表名，不会变以collects
    })
    return SubjectCategory;
}