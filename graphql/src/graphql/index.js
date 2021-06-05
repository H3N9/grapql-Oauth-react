import * as QueryFields from './queries'
import * as MuationFields from './mutations'
import { schemaComposer } from 'graphql-compose'

schemaComposer.Query.addFields(QueryFields)
schemaComposer.Mutation.addFields(MuationFields)

const GQLbuild = schemaComposer.buildSchema()

export default GQLbuild