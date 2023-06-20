import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Estudantes, EstudantesRelations} from '../models';

export class EstudantesRepository extends DefaultCrudRepository<
  Estudantes,
  typeof Estudantes.prototype.nContribuinte,
  EstudantesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Estudantes, dataSource);
  }
}
