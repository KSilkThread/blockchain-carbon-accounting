import { OperatorDbInterface } from "@blockchain-carbon-accounting/data-common";
import type { OperatorInterface } from "@blockchain-carbon-accounting/oil-and-gas-data-lib";
import { DataSource, FindOptionsWhere, SelectQueryBuilder } from "typeorm"

import { Operator } from "../models/operator"
import { buildQueries, QueryBundle } from "./common"

export class OperatorRepo implements OperatorDbInterface {

  private _db: DataSource

  constructor(dbConnection: DataSource) {
    this._db = dbConnection
  }
  
  public putOperator = async (doc: OperatorInterface) => {
    try {
      await this._db.getRepository(Operator).save(doc)
    }catch(error){
      throw new Error(`Cannot create new operator:: ${error}`)       
    }
  }

  public getOperator = async (uuid: string): Promise<Operator | null> => {
    return await this._db.getRepository(Operator).findOneBy({uuid})
  }

  public findByName = async (name: string): Promise<Operator | null> => {
    return await this._db.getRepository(Operator).findOneBy({name})
  }

  public getOperators = async (): Promise<OperatorInterface[]> => {
    return await this._db.getRepository(Operator).find()
  }

  public count = async (bundles: Array<QueryBundle>): Promise<number> => {
    let selectBuilder: SelectQueryBuilder<Operator> = 
      await this._db.getRepository(Operator).createQueryBuilder("operator")
    // category by issuer address
    selectBuilder = buildQueries('operator', selectBuilder, bundles)
    return selectBuilder.getCount()
  }

  public selectPaginated = async (
    offset: number, 
    limit: number, 
    bundles: Array<QueryBundle>
  ): Promise<Array<Operator>> => {
    let selectBuilder: SelectQueryBuilder<Operator> = 
      await this._db.getRepository(Operator).createQueryBuilder("operator")
    // category by issuer address
    selectBuilder = buildQueries('operator', selectBuilder, bundles)
    return selectBuilder
      .limit(limit)
      .offset(offset)
      .orderBy("asset_count", "DESC")
      .getMany();
      /*.innerJoinAndSelect(
        "operator.asset_operators",
        "asset_operators"
      )*/
  }

  private makeOperatorMatchCondition = (doc: Partial<OperatorInterface>) => {
    // creates an array of case insensitive queries
    const conditions: FindOptionsWhere<Operator> = {}
    if (doc.name) conditions.name = doc.name
    return conditions
  }

}