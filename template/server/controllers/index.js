import config from 'config';

export default async (ctx, next) => {
	await ctx.render('index', {
    title: config['domain'],
    jsList: ['//img-oss.yunshanmeicai.com/weixin/mall/cdn/ticker/ticker.min.2.0.6.js'],
    cssList: [],
    globalVariable: [{
      key: 'domain',
      value: config['domain'],
    }]
	});
}

export const pageController = async (ctx, next) => {
  // 对controller模版是否存在做判断
  await ctx.render(`${ctx.params.controller}_layout`, {
    title: config['domain'],
    jsList: ['//img-oss.yunshanmeicai.com/weixin/mall/cdn/ticker/ticker.min.2.0.6.js'],
    cssList: [],
    globalVariable: [{
      key: 'appType',
      value: ctx.params.subPath
    }]
  });
}
