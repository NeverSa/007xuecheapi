const Service = require('egg').Service;
const { ERROR, SUCCESS } = { ERROR: { error: true }, SUCCESS: { success: true } }
class SubjectService extends Service {
    async subject1ById(query) {
        let where = {};
        const { ctx } = this;
        const { category_id, subject_id } = query;
        if (category_id) {
            where = {
                category_id: category_id
            }
        }
        try {
            let result;
            if (subject_id == 1) {
                result = await ctx.model.Subject1.findAll({
                    attributes: ['id'],
                    where: where
                });
            } else if (subject_id == 2) {
                result = await ctx.model.Subject4.findAll({
                    attributes: ['id'],
                    where: where
                });
            }

            if (!result) {
                ctx.status = 400;
                return Object.assign(ERROR, {
                    msg: `expectd collect,but got ${JSON.stringify(result)}`
                })
            }
            ctx.status = 200;
            return Object.assign(SUCCESS, {
                data: result
            })
        } catch (error) {
            ctx.status = 500;
            throw (error)
        }
    }
    async detail(query) {
        const { ctx } = this;
        const { id, subject_id } = query;
        try {
            let result = {};
            if (subject_id == 1) {
                result = await ctx.model.Subject1.findAll(
                    {
                        where: {
                            id: id
                        }
                    }
                );
            } else if (subject_id == 2) {
                result = await ctx.model.Subject4.findAll(
                    {
                        where: {
                            id: id
                        }
                    }
                );
            }

            if (!result) {
                ctx.status = 400;
                return Object.assign(ERROR, {
                    msg: `expectd collect,but got ${JSON.stringify(result)}`
                })
            }
            ctx.status = 200;
            return Object.assign(SUCCESS, {
                data: result[0]
            })
        } catch (error) {
            ctx.status = 500;
            throw (error)
        }
    }

    async created(query) {
        const { ctx } = this;
        let post = {
            a: query.item1,
            b: query.item2,
            c: query.item3,
            d: query.item4,
            type: query.type,
            question: query.question,
            answer: query.answer,
            imgurl: query.image,
            analysis: query.explain,
            original_id: query.id,
        };
        const result = await ctx.model.Subject4.create(post);
    }
    /**
     * 随机获取100题
     */
    async getExamlist() {
        const { ctx, app } = this;
        const result = ctx.model.Subject1.findAll({
            limit: 100,
            order: app.Sequelize.fn('rand')
        })
        return result
    }
    /**
     * 获取题目的分类信息
     */
    async getCategorylist() {
        const { ctx } = this;
        const result = ctx.model.SubjectCategory.findAll({
            attributes: ['category_id', 'category_name']
        })
        return result
    }
    /**
     * 获取题目的分组count
     */
    async getCategoryCount() {
        const { ctx, app } = this;
        const result = ctx.model.SubjectCategory.findAll({
            attributes: ['category_id']
        })
        return result
    }
    /**
     * 
     * @param {*} ids id数组
     * @param {*} category_id 分类id
     */
    //批量更新类型id
    async updataCategory(ids, category_id) {
        console.log(ids)
        const { ctx, app } = this;
        const result = await ctx.model.Subject1.update({
            category_id: category_id,
        }, {
                where: {
                    original_id: {
                        [app.Sequelize.Op.in]: ids
                    }
                }
            });
        return result
    }
    //根据类型获取题目
    async getSubjectByCategory(ids, category_id) {
        const { ctx, app } = this;
        const result = await ctx.model.Subject1.update({
            category_id: category_id,
        }, {
                where: {
                    original_id: {
                        [app.Sequelize.Op.in]: ids
                    }
                }
            });
        return result
    }

}

module.exports = SubjectService;