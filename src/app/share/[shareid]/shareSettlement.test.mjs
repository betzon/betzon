import test from 'node:test'
import assert from 'node:assert/strict'
import { isShareProcessed, shareParticipantResult } from './shareSettlement.mjs'

test('uses actual payouts independently for creator and multiple opponents', () => {
    const contest = { statuses: { result_status: 'settled' }, outcomes: {
        creator: { outcome: 'lost', amount: 0 }, opponents: {
            12: { outcome: 'won', amount: 25.5 }, 13: { outcome: 'won', amount: 60 },
        },
    } }
    assert.equal(isShareProcessed(contest), true)
    assert.deepEqual(shareParticipantResult(contest, {}, 'creator'), { outcome: 'lost', label: '$0' })
    assert.deepEqual(shareParticipantResult(contest, { id: 12 }, 'opponent'), { outcome: 'won', label: '$25.50' })
    assert.deepEqual(shareParticipantResult(contest, { id: 13 }, 'opponent'), { outcome: 'won', label: '$60' })
    assert.equal(shareParticipantResult(contest, { id: 99 }, 'opponent'), null)
})

test('handles creator wins, refunds, pending, and invalid amounts', () => {
    assert.equal(shareParticipantResult({ outcomes: { creator: { outcome: 'won', amount: 100 } } }, {}, 'creator').label, '$100')
    assert.equal(shareParticipantResult({ outcomes: { creator: { outcome: 'refund' } } }, {}, 'creator').label, 'Refunded')
    assert.equal(shareParticipantResult({}, {}, 'creator'), null)
    assert.equal(shareParticipantResult({ outcomes: { creator: { outcome: 'won', amount: 'bad' } } }, {}, 'creator'), null)
    assert.equal(isShareProcessed({ statuses: { result_status: 'not_started' } }), false)
    assert.equal(isShareProcessed({ statuses: { result_status: 'refunded' } }), true)
    assert.equal(isShareProcessed({ contestResultStatusId: 6 }), true)
})
