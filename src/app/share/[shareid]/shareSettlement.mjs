// Match the mobile app's participant outcome pills using actual settlement data.
export function isShareProcessed(contest) {
    return ['settled', 'refunded', 'creator_won', 'opponent_won'].includes(contest?.statuses?.result_status)
        || [4, 5, 6, 7, 8, 9].includes(Number(contest?.contestResultStatusId))
}

export function shareParticipantResult(contest, participant, role) {
    const entry = role === 'creator'
        ? contest?.outcomes?.creator
        : contest?.outcomes?.opponents?.[participant?.id]
    if (!['won', 'lost', 'refund'].includes(entry?.outcome)) return null
    if (entry.outcome === 'refund') return { outcome: 'refund', label: 'Refunded' }
    const value = Number(entry.amount ?? 0)
    if (!Number.isFinite(value) || value < 0) return null
    const amount = `$${Number.isInteger(value) ? value : value.toFixed(2)}`
    return { outcome: entry.outcome, label: amount }
}
