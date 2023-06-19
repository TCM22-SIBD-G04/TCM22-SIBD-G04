import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {OrganismoFinanciador, OrganismoFinanciadorRelations} from '../models';

export class OrganismoFinanciadorRepository extends DefaultCrudRepository<
  OrganismoFinanciador,
  typeof OrganismoFinanciador.prototype.identificacao,
  OrganismoFinanciadorRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(OrganismoFinanciador, dataSource);
  }
}
