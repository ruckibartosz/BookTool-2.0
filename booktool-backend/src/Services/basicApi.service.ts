import { HttpException } from '../Exceptions/http.exception';
import { isEmpty } from '../Utils/util';
import { Document, Model } from 'mongoose';

class BasicApiService<T extends object> {
  public basicModel: Model<T & Document>;

  constructor(basicModel: Model<T & Document>) {
    this.basicModel = basicModel;
  }

  public async findAllModels(): Promise<T[]> {
    const allModels: T[] = await this.basicModel.find();

    return allModels;
  }

  public async findModelById(modelId: string): Promise<T> {
    if (isEmpty(modelId)) throw new HttpException(400, 'Model id is empty');

    const model = await this.basicModel.findOne({ _id: modelId });
    if (!model) throw new HttpException(409, "Model doesn't exist");

    return model;
  }

  public async updateModel(modelId: string, modelData: T): Promise<T> {
    if (isEmpty(modelData)) throw new HttpException(400, 'Model data is empty');

    const updateUserById = await this.basicModel.findByIdAndUpdate(modelId, { ...modelData, modifiedAt: Date.now() });
    if (!updateUserById) throw new HttpException(409, "Model doesn't exist");

    return updateUserById;
  }

  public async deleteModel(modelId: string): Promise<T> {
    const deletedModel = await this.basicModel.findByIdAndDelete(modelId);
    if (!deletedModel) throw new HttpException(409, "Model doesn't exist");

    return deletedModel;
  }

  public async createModel(modelData: T): Promise<T> {
    const createdModelData: T = await this.basicModel.create({ ...modelData });

    return createdModelData;
  }
}

export default BasicApiService;
