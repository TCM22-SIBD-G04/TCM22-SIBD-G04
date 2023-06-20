import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {OrganismoFinanciador} from '../models';
import {OrganismoFinanciadorRepository} from '../repositories';

export class OrganismoFinanciadorController {
  constructor(
    @repository(OrganismoFinanciadorRepository)
    public organismoFinanciadorRepository : OrganismoFinanciadorRepository,
  ) {}

  @post('/organismo-financiadors')
  @response(200, {
    description: 'OrganismoFinanciador model instance',
    content: {'application/json': {schema: getModelSchemaRef(OrganismoFinanciador)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrganismoFinanciador, {
            title: 'NewOrganismoFinanciador',
            exclude: ['identificacao'],
          }),
        },
      },
    })
    organismoFinanciador: Omit<OrganismoFinanciador, 'identificacao'>,
  ): Promise<OrganismoFinanciador> {
    return this.organismoFinanciadorRepository.create(organismoFinanciador);
  }

  @get('/organismo-financiadors/count')
  @response(200, {
    description: 'OrganismoFinanciador model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(OrganismoFinanciador) where?: Where<OrganismoFinanciador>,
  ): Promise<Count> {
    return this.organismoFinanciadorRepository.count(where);
  }

  @get('/organismo-financiadors')
  @response(200, {
    description: 'Array of OrganismoFinanciador model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(OrganismoFinanciador, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(OrganismoFinanciador) filter?: Filter<OrganismoFinanciador>,
  ): Promise<OrganismoFinanciador[]> {
    return this.organismoFinanciadorRepository.find(filter);
  }

  @patch('/organismo-financiadors')
  @response(200, {
    description: 'OrganismoFinanciador PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrganismoFinanciador, {partial: true}),
        },
      },
    })
    organismoFinanciador: OrganismoFinanciador,
    @param.where(OrganismoFinanciador) where?: Where<OrganismoFinanciador>,
  ): Promise<Count> {
    return this.organismoFinanciadorRepository.updateAll(organismoFinanciador, where);
  }

  @get('/organismo-financiadors/{id}')
  @response(200, {
    description: 'OrganismoFinanciador model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(OrganismoFinanciador, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(OrganismoFinanciador, {exclude: 'where'}) filter?: FilterExcludingWhere<OrganismoFinanciador>
  ): Promise<OrganismoFinanciador> {
    return this.organismoFinanciadorRepository.findById(id, filter);
  }

  @patch('/organismo-financiadors/{id}')
  @response(204, {
    description: 'OrganismoFinanciador PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrganismoFinanciador, {partial: true}),
        },
      },
    })
    organismoFinanciador: OrganismoFinanciador,
  ): Promise<void> {
    await this.organismoFinanciadorRepository.updateById(id, organismoFinanciador);
  }

  @put('/organismo-financiadors/{id}')
  @response(204, {
    description: 'OrganismoFinanciador PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() organismoFinanciador: OrganismoFinanciador,
  ): Promise<void> {
    await this.organismoFinanciadorRepository.replaceById(id, organismoFinanciador);
  }

  @del('/organismo-financiadors/{id}')
  @response(204, {
    description: 'OrganismoFinanciador DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.organismoFinanciadorRepository.deleteById(id);
  }
}
