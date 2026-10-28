import test from 'node:test'
import assert from 'node:assert/strict'
import {
    parseShareContestId,
    buildShareTitle,
    buildShareDescription,
    pickContestImage,
    shareContestUrl,
    shareContestImageUrl,
    fetchShareContest,
} from './shareContestMeta.mjs'

const contest191 = {
    id: 191,
    caption: null,
    prop: '+0.5 goals',
    config: {
        prop: '+0.5 goals',
        prop_explainer: {
            opponent: 'You win if Will Hughes does not score +0.5 goals more than Jake Bidwell.',
        },
    },
    winners: [{ athlete_name: 'Will Hughes' }],
    losers: [{ athlete_name: 'Jake Bidwell' }],
    creator: { username: 'zackovando' },
}

test('parses contest ids', () => {
    assert.equal(parseShareContestId('191'), '191')
    assert.equal(parseShareContestId('0'), null)
    assert.equal(parseShareContestId('abc'), null)
})

test('builds contest 191 title and description', () => {
    assert.equal(buildShareTitle(contest191), 'Will Hughes vs Jake Bidwell · +0.5 Goals')
    assert.match(buildShareDescription(contest191), /Will Hughes/)
})

test('falls back when contest data is missing', () => {
    assert.equal(buildShareTitle(null), 'Betzon Contest')
    assert.equal(buildShareDescription(null), 'Open this contest on Betzon to win.')
    assert.equal(pickContestImage(contest191), null)
})

test('picks a public contest image when present', () => {
    const url = 'https://cdn.example.com/contest.png'
    assert.equal(pickContestImage({ image_url: url }), url)
    assert.equal(pickContestImage({ winners: [{ image: 'http://insecure.example/a.png' }] }), null)
})

test('builds public share and og image urls', () => {
    assert.equal(shareContestUrl('191'), 'https://www.betzon.com/share/191')
    assert.equal(shareContestImageUrl('191'), 'https://www.betzon.com/api/share-contest/191/og')
})

test('fetchShareContest returns the contest body', async () => {
    const contest = await fetchShareContest('191', {
        fetchImpl: async (url) => {
            assert.match(url, /\/landing\/share\/191$/)
            return { ok: true, json: async () => ({ contest: contest191 }) }
        },
    })
    assert.equal(contest.id, 191)
})
