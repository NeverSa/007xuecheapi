'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 登录退出
  //获取科目一的id列表
  router.get('/api/subject1/byid', controller.subject.subject1ById);
  router.get('/api/subject1/detail', controller.subject.detail);
  //创建科目一试题
  router.get('/api/subject1/created', controller.subject.created);
  router.get('/api/subject1/updataCategory', controller.subject.updataCategory);
  router.get('/api/subject1/getCategorylist', controller.subject.getCategorylist);
};
