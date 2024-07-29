import { TezosOperationType } from '../TezosOperationType'
import { TezosBaseOperation } from '../TezosBaseOperation'
import { Optional, omittedProperties } from '../optional'

export interface TezosSmartRollupAddMessagesOperation extends TezosBaseOperation {
  kind: TezosOperationType.SMART_ROLLUP_ADD_MESSAGES
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  message: string[]
}

/**
 * @internalapi
 * @category Tezos
 */
export type PartialTezosSmartRollupAddMessagesOperation = Optional<TezosSmartRollupAddMessagesOperation, omittedProperties>
