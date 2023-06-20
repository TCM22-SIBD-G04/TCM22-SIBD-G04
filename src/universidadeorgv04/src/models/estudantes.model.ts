import {Entity, model, property} from '@loopback/repository';

@model()
export class Estudantes extends Entity {
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
  plano_de_curso: string;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  dataNascimentoEst: string;

  @property({
    type: 'number',
    required: true,
  })
  numero_Departamento: number;


  constructor(data?: Partial<Estudantes>) {
    super(data);
  }
}

export interface EstudantesRelations {
  // describe navigational properties here
}

export type EstudantesWithRelations = Estudantes & EstudantesRelations;
