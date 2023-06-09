import { Inject, Provide } from '@midwayjs/decorator';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { DzhMemberTestEntity } from '../../entity/test';

/**
 * 描述
 */
@Provide()
export class DzhMemberUserService extends BaseService {
  //第一个参数写实体类，第二参数写附表别名
  @InjectEntityModel(DzhMemberTestEntity, 'test')
  dzhMemberTestEntity: Repository<DzhMemberTestEntity>;

  async test() {
    return this.dzhMemberTestEntity.find();
  }
}
