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
import {Organizacaouniversidade} from '../models';
import {OrganizacaouniversidadeRepository} from '../repositories';

export class OrganizacaoController {
  constructor(
    @repository(OrganizacaouniversidadeRepository)
    public organizacaouniversidadeRepository : OrganizacaouniversidadeRepository,
  ) {}

  @post('/organizacaouniversidades')
  @response(200, {
    description: 'Organizacaouniversidade model instance',
    content: {'application/json': {schema: getModelSchemaRef(Organizacaouniversidade)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Organizacaouniversidade, {
            title: 'NewOrganizacaouniversidade',
            exclude: ['organismofinanciador'],
          }),
        },
      },
    })
    organizacaouniversidade: Omit<Organizacaouniversidade, 'organismofinanciador'>,
  ): Promise<Organizacaouniversidade> {
    return this.organizacaouniversidadeRepository.create(organizacaouniversidade);
  }

  @get('/organizacaouniversidades/count')
  @response(200, {
    description: 'Organizacaouniversidade model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Organizacaouniversidade) where?: Where<Organizacaouniversidade>,
  ): Promise<Count> {
    return this.organizacaouniversidadeRepository.count(where);
  }

  @get('/organizacaouniversidades')
  @response(200, {
    description: 'Array of Organizacaouniversidade model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Organizacaouniversidade, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Organizacaouniversidade) filter?: Filter<Organizacaouniversidade>,
  ): Promise<Organizacaouniversidade[]> {
    return this.organizacaouniversidadeRepository.find(filter);
  }

  @patch('/organizacaouniversidades')
  @response(200, {
    description: 'Organizacaouniversidade PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Organizacaouniversidade, {partial: true}),
        },
      },
    })
    organizacaouniversidade: Organizacaouniversidade,
    @param.where(Organizacaouniversidade) where?: Where<Organizacaouniversidade>,
  ): Promise<Count> {
    return this.organizacaouniversidadeRepository.updateAll(organizacaouniversidade, where);
  }

  @get('/organizacaouniversidades/{id}')
  @response(200, {
    description: 'Organizacaouniversidade model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Organizacaouniversidade, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Organizacaouniversidade, {exclude: 'where'}) filter?: FilterExcludingWhere<Organizacaouniversidade>
  ): Promise<Organizacaouniversidade> {
    return this.organizacaouniversidadeRepository.findById(id, filter);
  }

  @patch('/organizacaouniversidades/{id}')
  @response(204, {
    description: 'Organizacaouniversidade PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Organizacaouniversidade, {partial: true}),
        },
      },
    })
    organizacaouniversidade: Organizacaouniversidade,
  ): Promise<void> {
    await this.organizacaouniversidadeRepository.updateById(id, organizacaouniversidade);
  }

  @put('/organizacaouniversidades/{id}')
  @response(204, {
    description: 'Organizacaouniversidade PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() organizacaouniversidade: Organizacaouniversidade,
  ): Promise<void> {
    await this.organizacaouniversidadeRepository.replaceById(id, organizacaouniversidade);
  }

  @del('/organizacaouniversidades/{id}')
  @response(204, {
    description: 'Organizacaouniversidade DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.organizacaouniversidadeRepository.deleteById(id);
  }
}
