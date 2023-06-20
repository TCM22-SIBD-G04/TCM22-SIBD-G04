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
import {Projetos} from '../models';
import {ProjetosRepository} from '../repositories';

export class ProjetosController {
  constructor(
    @repository(ProjetosRepository)
    public projetosRepository : ProjetosRepository,
  ) {}

  @post('/projetos')
  @response(200, {
    description: 'Projetos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Projetos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Projetos, {
            title: 'NewProjetos',
            exclude: ['numero_Projeto'],
          }),
        },
      },
    })
    projetos: Omit<Projetos, 'numero_Projeto'>,
  ): Promise<Projetos> {
    return this.projetosRepository.create(projetos);
  }

  @get('/projetos/count')
  @response(200, {
    description: 'Projetos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Projetos) where?: Where<Projetos>,
  ): Promise<Count> {
    return this.projetosRepository.count(where);
  }

  @get('/projetos')
  @response(200, {
    description: 'Array of Projetos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Projetos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Projetos) filter?: Filter<Projetos>,
  ): Promise<Projetos[]> {
    return this.projetosRepository.find(filter);
  }

  @patch('/projetos')
  @response(200, {
    description: 'Projetos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Projetos, {partial: true}),
        },
      },
    })
    projetos: Projetos,
    @param.where(Projetos) where?: Where<Projetos>,
  ): Promise<Count> {
    return this.projetosRepository.updateAll(projetos, where);
  }

  @get('/projetos/{id}')
  @response(200, {
    description: 'Projetos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Projetos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Projetos, {exclude: 'where'}) filter?: FilterExcludingWhere<Projetos>
  ): Promise<Projetos> {
    return this.projetosRepository.findById(id, filter);
  }

  @patch('/projetos/{id}')
  @response(204, {
    description: 'Projetos PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Projetos, {partial: true}),
        },
      },
    })
    projetos: Projetos,
  ): Promise<void> {
    await this.projetosRepository.updateById(id, projetos);
  }

  @put('/projetos/{id}')
  @response(204, {
    description: 'Projetos PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() projetos: Projetos,
  ): Promise<void> {
    await this.projetosRepository.replaceById(id, projetos);
  }

  @del('/projetos/{id}')
  @response(204, {
    description: 'Projetos DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.projetosRepository.deleteById(id);
  }
}
