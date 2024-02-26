/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Logger } from '@nestjs/common';
import mongoose, { FilterQuery, Model, HydratedDocument, CreateOptions, UpdateQuery, UpdateWithAggregationPipeline } from 'mongoose';
export declare class BaseRepository<T extends MongoBaseSchema> {
    readonly model: Model<SchemaDocument<T>>;
    readonly connection: mongoose.Connection;
    constructor(model: Model<SchemaDocument<T>>);
    logger: Logger;
    createOne(data: SchemaCreateDocument<T>, options?: CreateOptions & {
        aggregateErrors?: true;
    }): Promise<HydratedDocument<SchemaDocument<T>>>;
    softDeleteOne(filter: FilterQuery<SchemaDocument<T>>): Promise<mongoose.UpdateWriteOpResult>;
    getOneById(id: SchemaId, attributes: SchemaAttribute<T>[]): Promise<mongoose.IfAny<SchemaDocument<T>, any, mongoose.Document<unknown, {}, SchemaDocument<T>> & mongoose.Require_id<SchemaDocument<T>>>>;
    updateOneById(id: SchemaId, update: UpdateQuery<SchemaDocument<T>> | UpdateWithAggregationPipeline): Promise<mongoose.UpdateWriteOpResult>;
    findOne(filter: FilterQuery<SchemaDocument<T>>): Promise<mongoose.IfAny<SchemaDocument<T>, any, mongoose.Document<unknown, {}, SchemaDocument<T>> & mongoose.Require_id<SchemaDocument<T>>>>;
}
