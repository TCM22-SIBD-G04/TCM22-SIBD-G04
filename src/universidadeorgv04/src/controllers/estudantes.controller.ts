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
import {Estudantes} from '../models';
import {EstudantesRepository} from '../repositories';

export class EstudantesController {
  constructor(
    @repository(EstudantesRepository)
    public estudantesRepository : EstudantesRepository,
  ) {}

  @post('/estudantes')
  @response(200, {
    description: 'Estudantes model instance',
    content: {'application/json': {schema: getModelSchemaRef(Estudantes)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estudantes, {
            title: 'NewEstudantes',
            exclude: ['nContribuinte'],
          }),
        },
      },
    })
    estudantes: Omit<Estudantes, 'nContribuinte'>,
  ): Promise<Estudantes> {
    return this.estudantesRepository.create(estudantes);
  }

  @get('/estudantes/count')
  @response(200, {
    description: 'Estudantes model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Estudantes) where?: Where<Estudantes>,
  ): Promise<Count> {
    return this.estudantesRepository.count(where);
  }

  @get('/estudantes')
  @response(200, {
    description: 'Array of Estudantes model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Estudantes, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Estudantes) filter?: Filter<Estudantes>,
  ): Promise<Estudantes[]> {
    return this.estudantesRepository.find(filter);
  }

  @patch('/estudantes')
  @response(200, {
    description: 'Estudantes PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estudantes, {partial: true}),
        },
      },
    })
    estudantes: Estudantes,
    @param.where(Estudantes) where?: Where<Estudantes>,
  ): Promise<Count> {
    return this.estudantesRepository.updateAll(estudantes, where);
  }

  @get('/estudantes/{id}')
  @response(200, {
    description: 'Estudantes model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Estudantes, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Estudantes, {exclude: 'where'}) filter?: FilterExcludingWhere<Estudantes>
  ): Promise<Estudantes> {
    return this.estudantesRepository.findById(id, filter);
  }

  @patch('/estudantes/{id}')
  @response(204, {
    description: 'Estudantes PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estudantes, {partial: true}),
        },
      },
    })
    estudantes: Estudantes,
  ): Promise<void> {
    await this.estudantesRepository.updateById(id, estudantes);
  }

  @put('/estudantes/{id}')
  @response(204, {
    description: 'Estudantes PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() estudantes: Estudantes,
  ): Promise<void> {
    await this.estudantesRepository.replaceById(id, estudantes);
  }

  @del('/estudantes/{id}')
  @response(204, {
    description: 'Estudantes DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.estudantesRepository.deleteById(id);
  }
}
