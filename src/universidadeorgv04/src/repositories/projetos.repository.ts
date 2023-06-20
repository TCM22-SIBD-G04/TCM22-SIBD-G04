import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Projetos, ProjetosRelations} from '../models';

export class ProjetosRepository extends DefaultCrudRepository<
  Projetos,
  typeof Projetos.prototype.numero_Projeto,
  ProjetosRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Projetos, dataSource);
  }
}
