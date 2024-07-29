import { TezosOperationType } from '../TezosOperationType'
import { TezosBaseOperation } from '../TezosBaseOperation'
import { Optional, omittedProperties } from '../optional'

/**
 * @internalapi
 * @category Tezos
 */
export interface TezosRevealOperation extends TezosBaseOperation {
  kind: TezosOperationType.REVEAL
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  public_key: string
}

/**
 * @internalapi
 * @category Tezos
 */
export type PartialTezosRevealOperation = Optional<TezosRevealOperation, omittedProperties>
