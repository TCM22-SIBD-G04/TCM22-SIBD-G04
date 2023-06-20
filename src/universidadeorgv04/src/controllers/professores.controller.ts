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
import {Professores} from '../models';
import {ProfessoresRepository} from '../repositories';

export class ProfessoresController {
  constructor(
    @repository(ProfessoresRepository)
    public professoresRepository : ProfessoresRepository,
  ) {}

  @post('/professores')
  @response(200, {
    description: 'Professores model instance',
    content: {'application/json': {schema: getModelSchemaRef(Professores)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Professores, {
            title: 'NewProfessores',
            exclude: ['nContribuinte'],
          }),
        },
      },
    })
    professores: Omit<Professores, 'nContribuinte'>,
  ): Promise<Professores> {
    return this.professoresRepository.create(professores);
  }

  @get('/professores/count')
  @response(200, {
    description: 'Professores model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Professores) where?: Where<Professores>,
  ): Promise<Count> {
    return this.professoresRepository.count(where);
  }

  @get('/professores')
  @response(200, {
    description: 'Array of Professores model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Professores, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Professores) filter?: Filter<Professores>,
  ): Promise<Professores[]> {
    return this.professoresRepository.find(filter);
  }

  @patch('/professores')
  @response(200, {
    description: 'Professores PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Professores, {partial: true}),
        },
      },
    })
    professores: Professores,
    @param.where(Professores) where?: Where<Professores>,
  ): Promise<Count> {
    return this.professoresRepository.updateAll(professores, where);
  }

  @get('/professores/{id}')
  @response(200, {
    description: 'Professores model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Professores, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Professores, {exclude: 'where'}) filter?: FilterExcludingWhere<Professores>
  ): Promise<Professores> {
    return this.professoresRepository.findById(id, filter);
  }

  @patch('/professores/{id}')
  @response(204, {
    description: 'Professores PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Professores, {partial: true}),
        },
      },
    })
    professores: Professores,
  ): Promise<void> {
    await this.professoresRepository.updateById(id, professores);
  }

  @put('/professores/{id}')
  @response(204, {
    description: 'Professores PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() professores: Professores,
  ): Promise<void> {
    await this.professoresRepository.replaceById(id, professores);
  }

  @del('/professores/{id}')
  @response(204, {
    description: 'Professores DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.professoresRepository.deleteById(id);
  }
}
