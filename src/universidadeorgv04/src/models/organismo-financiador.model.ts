import {Entity, model, property} from '@loopback/repository';

@model()
export class OrganismoFinanciador extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  identificacao?: string;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;


  constructor(data?: Partial<OrganismoFinanciador>) {
    super(data);
  }
}

export interface OrganismoFinanciadorRelations {
  // describe navigational properties here
}

export type OrganismoFinanciadorWithRelations = OrganismoFinanciador & OrganismoFinanciadorRelations;
