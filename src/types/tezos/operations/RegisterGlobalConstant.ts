import { TezosOperationType } from '../TezosOperationType'
import { TezosBaseOperation } from '../TezosBaseOperation'
import { Optional, omittedProperties } from '../optional'
import { MichelineMichelsonV1Expression } from '../MichelineMichelsonV1Expression'

export interface TezosRegisterGlobalConstantOperation extends TezosBaseOperation {
  kind: TezosOperationType.REGISTER_GLOBAL_CONSTANT
  source: string
  fee: string
  counter: string
  gas_limit: string
  storage_limit: string
  value: MichelineMichelsonV1Expression
}

/**
 * @internalapi
 * @category Tezos
 */
export type PartialTezosRegisterGlobalConstantOperation = Optional<TezosRegisterGlobalConstantOperation, omittedProperties>
