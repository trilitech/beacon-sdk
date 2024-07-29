import { TezosOperationType } from '../TezosOperationType'
import { TezosBaseOperation } from '../TezosBaseOperation'
import { Optional, omittedProperties } from '../optional'

/**
 * @internalapi
 * @category Tezos
 */
export interface TezosOriginationOperation extends TezosBaseOperation {
  kind: TezosOperationType.ORIGINATION
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  balance: string
  delegate?: string
  script: string
}

/**
 * @internalapi
 * @category Tezos
 */
export type PartialTezosOriginationOperation = Optional<TezosOriginationOperation, omittedProperties>
