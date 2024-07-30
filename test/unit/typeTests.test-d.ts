import { expectType } from 'tsd';
import {
    PartialTezosDelegationOperation,
    TezosDelegationOperation
} from '../../';

expectType<PartialTezosDelegationOperation>(new PartialTezosDelegationOperation());
expectType<PartialTezosDelegationOperation>(new PartialTezosDelegationOperation(
    'tz1...',
    '1000',
    '1',
    '10000',
    '5000',
    'tz2...',
));
expectType<PartialTezosDelegationOperation>(new PartialTezosDelegationOperation(undefined, undefined, undefined, undefined, undefined, "tz3ZmB8oWUmi8YZXgeRpgAcPnEMD8VgUa4Ve"));

expectType<TezosDelegationOperation>(new TezosDelegationOperation(
    'tz1...',
    '1000',
    '1',
    '10000',
    '5000',
    'tz2...',
));
