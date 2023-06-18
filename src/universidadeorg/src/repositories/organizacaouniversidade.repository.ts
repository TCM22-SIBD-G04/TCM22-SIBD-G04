import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbuniversidadeDataSource} from '../datasources';
import {Organizacaouniversidade, OrganizacaouniversidadeRelations} from '../models';

export class OrganizacaouniversidadeRepository extends DefaultCrudRepository<
  Organizacaouniversidade,
  typeof Organizacaouniversidade.prototype.projetos,
  OrganizacaouniversidadeRelations
> {
  constructor(
    @inject('datasources.dbuniversidade') dataSource: DbuniversidadeDataSource,
  ) {
    super(Organizacaouniversidade, dataSource);
  }
}
