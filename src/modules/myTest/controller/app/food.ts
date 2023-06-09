import { Body, Get, Inject, Post, Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from '@cool-midway/core';
import { DzhMemberTestEntity } from '../../entity/test';
/**
 * 描述
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: DzhMemberTestEntity,
})
export class DzhMemberAccountController extends BaseController {
  @Inject()
  dzhMemberUserService: DzhMemberUserService;

  //注解接口
  @Get('/test', { summary: '测试' })
  async test() {
    //调用服务类方法
    const testInfo = await this.dzhMemberUserService.test();
    return this.ok(testInfo);
  }

  @Post('/login', { summary: '会员登录' })
  async login(
    @Body('userInfo') userInfo: { username: string; password: string }
  ) {
    const res = await this.dzhMemberUserService.login(userInfo);
    return this.ok(res);
  }
}
