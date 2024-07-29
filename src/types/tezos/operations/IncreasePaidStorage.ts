import { TezosOperationType } from '../TezosOperationType'
import { TezosBaseOperation } from '../TezosBaseOperation'
import { Optional, omittedProperties } from '../optional'

export interface TezosIncreasePaidStorageOperation extends TezosBaseOperation {
  kind: TezosOperationType.INCREASE_PAID_STORAGE
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  amount: string
  destination: string
}

/**
 * @internalapi
 * @category Tezos
 */
export type PartialTezosIncreasePaidStorageOperation = Optional<TezosIncreasePaidStorageOperation, omittedProperties>
