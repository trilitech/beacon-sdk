import { TezosOperationType } from '../TezosOperationType'
import { TezosBaseOperation } from '../TezosBaseOperation'
import { Optional, omittedProperties } from '../optional'

export interface TezosUpdateConsensusKeyOperation extends TezosBaseOperation {
  kind: TezosOperationType.UPDATE_CONSENSUS_KEY
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  pk: string
}

/**
 * @internalapi
 * @category Tezos
 */
export type PartialTezosUpdateConsensusKeyOperation = Optional<TezosUpdateConsensusKeyOperation, omittedProperties>
