import { QuantityUnitEnum } from '../enumerations/quantity-unit.enum';


export interface IQuantity {

  unit: QuantityUnitEnum;
  value: number;

}
