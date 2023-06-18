import {Entity, model, property} from '@loopback/repository';

@model()
export class Organizacaouniversidade extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  projetos: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  organismofinanciador?: string;

  @property({
    type: 'string',
    required: true,
  })
  estudantes: string;

  @property({
    type: 'string',
    required: true,
  })
  departamento: string;

  @property({
    type: 'string',
    required: true,
  })
  professores: string;


  constructor(data?: Partial<Organizacaouniversidade>) {
    super(data);
  }
}

export interface OrganizacaouniversidadeRelations {
  // describe navigational properties here
}

export type OrganizacaouniversidadeWithRelations = Organizacaouniversidade & OrganizacaouniversidadeRelations;
