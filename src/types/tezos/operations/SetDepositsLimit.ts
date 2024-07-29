import { TezosOperationType } from '../TezosOperationType'
import { TezosBaseOperation } from '../TezosBaseOperation'
import { Optional, omittedProperties } from '../optional'

export interface TezosSetDepositsLimitOperation extends TezosBaseOperation {
  kind: TezosOperationType.SET_DEPOSITS_LIMIT
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  limit?: string
}

/**
 * @internalapi
 * @category Tezos
 */
export type PartialTezosSetDepositsLimitOperation = Optional<TezosSetDepositsLimitOperation, omittedProperties>
