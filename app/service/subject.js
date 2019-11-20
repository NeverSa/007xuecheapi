const Service = require('egg').Service;
const { ERROR, SUCCESS } = { ERROR: { error: true }, SUCCESS: { success: true } }
class SubjectService extends Service {
    async subject1ById() {
        const { ctx } = this;
        try {
            const result = await ctx.model.Subject1.findAll({
                attributes: ['id']
            });
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
        try {
            const result = await ctx.model.Subject1.findAll(
                {
                    where: {
                        id: query.id
                    }
                }
            );
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
            a: query.a,
            b: query.b,
            c: query.c,
            d: query.d,
            type: query.Type,
            question: query.question,
            answer: query.ta,
            imgurl: query.imageurl,
            analysis: query.bestanswer,
            original_id: query.id
        };
        const result = await ctx.model.Subject1.create(post);
    }
    /**
     * 获取题目的分类信息
     */
   async getCategorylist(){
    const { ctx } = this;
    const result =ctx.model.SubjectCategory.findAll({
        attributes: ['category_id', 'category_name']
    })
    return result
   }
   /**
    * 获取题目的分组count
    */
   async getCategoryCount(){
    const { ctx, app } = this;
    const result =ctx.model.SubjectCategory.findAll({
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