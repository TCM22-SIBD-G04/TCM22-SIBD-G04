import {Entity, model, property} from '@loopback/repository';

@model()
export class Professores extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  nContribuinte?: number;

  @property({
    type: 'string',
    required: true,
  })
  dataNascimento: string;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  especialidade: string;

  @property({
    type: 'string',
    required: true,
  })
  posto: string;


  constructor(data?: Partial<Professores>) {
    super(data);
  }
}

export interface ProfessoresRelations {
  // describe navigational properties here
}

export type ProfessoresWithRelations = Professores & ProfessoresRelations;
