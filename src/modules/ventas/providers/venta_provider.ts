import { DataSource } from 'typeorm';
import {
  ProductEntity,
  
} from '@ventas/entities';

import { DataSourceEnum, RepositoryEnum } from '@shared/enums';
import { RequirementRequestEntity } from '../entities/requirement-request.entity';
import { CategoryEntity } from '../entities/category.entity';

export const ventasProviders = [
  {
    provide: RepositoryEnum.PRODUCT_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProductEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },

  {
    provide: RepositoryEnum.CATEFORY_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CategoryEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },

 
]