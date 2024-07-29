import { TezosOperationType } from '../TezosOperationType'
import { TezosBaseOperation } from '../TezosBaseOperation'
import { Optional, omittedProperties } from '../optional'

export interface TezosSmartRollupExecuteOutboxMessageOperation extends TezosBaseOperation {
  kind: TezosOperationType.SMART_ROLLUP_EXECUTE_OUTBOX_MESSAGE
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  rollup: string
  cemented_commitment: string
  output_proof: string
}

/**
 * @internalapi
 * @category Tezos
 */
export type PartialTezosSmartRollupExecuteOutboxMessageOperation = Optional<TezosSmartRollupExecuteOutboxMessageOperation, omittedProperties>
