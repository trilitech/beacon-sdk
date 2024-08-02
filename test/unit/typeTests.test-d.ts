import { expectType } from 'tsd';
import {
    TezosOperationType,
    PartialTezosDelegationOperation,
    TezosDelegationOperation
} from '../../';

// everything is default; undelegation
const partialTezosDelegationOpNone: PartialTezosDelegationOperation = {kind: TezosOperationType.DELEGATION};
expectType<PartialTezosDelegationOperation>(partialTezosDelegationOpNone);

// all optional parameter defined
const partialTezosDelegationOpAll: PartialTezosDelegationOperation = {
    kind: TezosOperationType.DELEGATION,
    source: 'tz1VSU...Yt8G',
    fee: '1000',
    counter: '123456',
    gas_limit: '2000',
    storage_limit: '0',
    delegate: 'tz1VSU...Yt8G'
};
expectType<PartialTezosDelegationOperation>(partialTezosDelegationOpAll);

// part of optional parameters defined
const partialTezosDelegationOpPart: PartialTezosDelegationOperation = {
    kind: TezosOperationType.DELEGATION,
    source: 'tz1VSU...Yt8G',
    delegate: 'tz1VSU...Yt8G'
};
expectType<PartialTezosDelegationOperation>(partialTezosDelegationOpPart);

// all parameters are mandatory and defined
const tezosDelegationOpAll: TezosDelegationOperation = {
    kind: TezosOperationType.DELEGATION,
    source: 'tz1VSU...Yt8G',
    fee: '1000',
    counter: '123456',
    gas_limit: '2000',
    storage_limit: '0',
    delegate: 'tz1VSU...Yt8G'
};
expectType<TezosDelegationOperation>(tezosDelegationOpAll);
