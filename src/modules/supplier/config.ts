import { ModuleConfig } from '@cool-midway/core';

/**
 * 模块配置
 */
export default () => {
    return {
        // 模块名称
        name: '供应商管理',
        // 模块描述
        description: '食品留样',
        // 中间件，只对本模块有效
        middlewares: [],
        // 中间件，全局有效
        globalMiddlewares: [],
        // 模块加载顺序，默认为0，值越大越优先加载
        order: 0,
    } as ModuleConfig;
};