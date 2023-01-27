import { DataSource } from 'typeorm';
import {
  ProductEntity,
  
} from '@ventas/entities';

import { DataSourceEnum, RepositoryEnum } from '@shared/enums';
import { RequirementRequestEntity } from '../entities/requirement-request.entity';

export const ventasProviders = [
  {
    provide: RepositoryEnum.PRODUCT_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(EventEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
 
]