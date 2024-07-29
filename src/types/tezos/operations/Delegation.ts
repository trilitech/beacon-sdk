import { TezosOperationType } from '../TezosOperationType'
import { TezosBaseOperation } from '../TezosBaseOperation'
import { Optional, omittedProperties } from '../optional'

/**
 * @internalapi
 * @category Tezos
 */
export interface TezosDelegationOperation extends TezosBaseOperation {
  kind: TezosOperationType.DELEGATION
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  delegate?: string
}

/**
 * @internalapi
 * @category Tezos
 */
export type PartialTezosDelegationOperation = Optional<TezosDelegationOperation, omittedProperties>
