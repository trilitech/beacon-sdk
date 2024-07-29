import {
  PartialTezosDalPublishCommitmentOperation,
  PartialTezosDelegationOperation,
  PartialTezosIncreasePaidStorageOperation,
  PartialTezosOriginationOperation,
  PartialTezosRegisterGlobalConstantOperation,
  PartialTezosRevealOperation,
  PartialTezosSetDepositsLimitOperation,
  PartialTezosSmartRollupAddMessagesOperation,
  PartialTezosSmartRollupCementOperation,
  PartialTezosSmartRollupExecuteOutboxMessageOperation,
  PartialTezosSmartRollupOriginateOperation,
  PartialTezosSmartRollupPublishOperation,
  PartialTezosSmartRollupRecoverBondOperation,
  PartialTezosSmartRollupRefuteOperation,
  PartialTezosSmartRollupTimeoutOperation,
  PartialTezosTransactionOperation,
  PartialTezosTransferTicketOperation,
  PartialTezosUpdateConsensusKeyOperation,
  TezosActivateAccountOperation,
  TezosAttestationOperation,
  TezosAttestationWithSlotOperation,
  TezosBallotOperation,
  TezosDoubleAttestationEvidenceOperation,
  TezosDoubleBakingEvidenceOperation,
  TezosDoublePreAttestationEvidenceOperation,
  TezosDoublePreEndorsementEvidenceOperation,
  TezosDrainDelegateOperation,
  TezosEndorsementOperation,
  TezosEndorsementWithSlotOperation,
  TezosFailingNoopOperation,
  TezosPreAttestationOperation,
  TezosPreEndorsementOperation,
  TezosProposalOperation,
  TezosSeedNonceRevelationOperation,
  TezosVdfRevelationOperation
} from './operations'


/**
 * @publicapi
 * @category Tezos
 */
export type PartialTezosOperation =
  | PartialTezosDalPublishCommitmentOperation
  | PartialTezosDelegationOperation
  | PartialTezosIncreasePaidStorageOperation
  | PartialTezosOriginationOperation
  | PartialTezosRegisterGlobalConstantOperation
  | PartialTezosRevealOperation
  | PartialTezosSetDepositsLimitOperation
  | PartialTezosSmartRollupAddMessagesOperation
  | PartialTezosSmartRollupCementOperation
  | PartialTezosSmartRollupExecuteOutboxMessageOperation
  | PartialTezosSmartRollupOriginateOperation
  | PartialTezosSmartRollupPublishOperation
  | PartialTezosSmartRollupRecoverBondOperation
  | PartialTezosSmartRollupRefuteOperation
  | PartialTezosSmartRollupTimeoutOperation
  | PartialTezosTransactionOperation
  | PartialTezosTransferTicketOperation
  | PartialTezosUpdateConsensusKeyOperation
  | TezosActivateAccountOperation
  | TezosAttestationOperation
  | TezosAttestationWithSlotOperation
  | TezosBallotOperation
  | TezosDoubleAttestationEvidenceOperation
  | TezosDoubleBakingEvidenceOperation
  | TezosDoublePreAttestationEvidenceOperation
  | TezosDoublePreEndorsementEvidenceOperation
  | TezosDrainDelegateOperation
  | TezosEndorsementOperation
  | TezosEndorsementWithSlotOperation
  | TezosFailingNoopOperation
  | TezosPreAttestationOperation
  | TezosPreEndorsementOperation
  | TezosProposalOperation
  | TezosSeedNonceRevelationOperation
  | TezosVdfRevelationOperation
