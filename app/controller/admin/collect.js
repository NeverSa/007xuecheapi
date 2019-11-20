'use strict';

const Controller = require('egg').Controller;

class CollectController extends Controller {
    async create(){
        const {ctx} = this;
        const body = ctx.request.body;
        ctx.body = await ctx.service.collect.create(body);
    }
    async findAll(){
        const {ctx} = this;
        ctx.body = await ctx.service.collect.findAll();
    }
 
}

module.exports = CollectController;
