import {Entity, model, property} from '@loopback/repository';

@model()
export class Projetos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  numero_Projeto?: number;

  @property({
    type: 'string',
    required: true,
  })
  orcamentos: string;

  @property({
    type: 'string',
    required: true,
  })
  dtFinal: string;

  @property({
    type: 'string',
    required: true,
  })
  dtInicio: string;

  @property({
    type: 'string',
    required: true,
  })
  numero_nContribuinte_Professores: string;

  @property({
    type: 'string',
    required: true,
  })
  identificacao_OrganismoFinanciador: string;


  constructor(data?: Partial<Projetos>) {
    super(data);
  }
}

export interface ProjetosRelations {
  // describe navigational properties here
}

export type ProjetosWithRelations = Projetos & ProjetosRelations;
