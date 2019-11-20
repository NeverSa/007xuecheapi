const Service = require('egg').Service;
const{ERROR,SUCCESS} ={ERROR:{error:true},SUCCESS:{success:true}}
class CollectService extends Service {
    async create(collect){
        const {ctx} = this;
        try{
            collect = await ctx.model.Collect.create(collect);
            if(!collect){
                ctx.status = 400;
                return Object.assign(ERROR,{
                    msg:`expectd collect,but got ${JSON.stringify(collect)}`
                })
            }
            ctx.status = 200;
            return Object.assign(SUCCESS,{
                data:collect
            })
        }catch(error){
            ctx.status = 500;
            throw(error)
        }
    }

    async list({
        offset = 0,
        limit = 10,
        order_by ='created_at',
        order = 'DESC'
    }){
        const {ctx} = this;
        const options = {
            offset:parseInt(offset),
            limit:parseInt(limit),
            order:[
                [order_by,order.toUpperCase()]
            ]
        }
        try{
            const res = await ctx.model.Collect.findAndCountAll(options);
            if(!res){
                ctx.status = 400;
                return Object.assign(ERROR,{
                    msg:'not fount collect'
                })
            }
            ctx.status = 200;
            return Object.assign(SUCCESS,{
                data:res[0]
            })
        }catch(error){
            ctx.status = 500;
            throw(error)
        }
    }
}

module.exports = CollectService;