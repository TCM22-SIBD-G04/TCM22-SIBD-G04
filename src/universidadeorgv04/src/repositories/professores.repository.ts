import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Professores, ProfessoresRelations} from '../models';

export class ProfessoresRepository extends DefaultCrudRepository<
  Professores,
  typeof Professores.prototype.nContribuinte,
  ProfessoresRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Professores, dataSource);
  }
}
