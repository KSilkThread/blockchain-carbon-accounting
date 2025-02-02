import type { 
  OperatorInterface 
} from '@blockchain-carbon-accounting/oil-and-gas-data-lib';
import {
  Column, Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  Unique
} from 'typeorm';
import { AssetOperator } from './assetOperator';
import { Wallet } from './wallet';
import { Product } from './product';


@Entity()
@Unique(['name'])
export class Operator implements OperatorInterface {
  @PrimaryGeneratedColumn("uuid")
  uuid!: string;

  @Column()
  class!: string;

  @OneToMany(() => AssetOperator, (assetOperator: AssetOperator) => assetOperator.operator)
  asset_operators?: AssetOperator[];

  @OneToMany(() => Product, (product: Product) => product.operator)
  products?: Product[];

  @ManyToOne(() => Wallet)
  wallet!: Wallet;

  @Column({unique: true})
  name!: string;

  @Column({default:0, type: 'integer'})
  asset_count!: number;

  @Column({nullable:true})
  status?: string;

  @Column({nullable:true})
  description?: string;

  public static toRaw(v: Operator) {
    return { ...v };
  }
  public static toRaws(v: Operator[]) {
    return v.map(v => Operator.toRaw(v));
  }
}