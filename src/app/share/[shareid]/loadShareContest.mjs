export async function loadShareContest(contestId, {
    fetchImpl = fetch,
    controller = new AbortController(),
    timeoutMs = 12000,
} = {}) {
    let timer
    const deadline = new Promise((_, reject) => {
        timer = setTimeout(() => {
            reject(new Error('Contest request timed out'))
            controller.abort()
        }, timeoutMs)
    })

    try {
        return await Promise.race([
            (async () => {
                const response = await fetchImpl(`/api/share-contest/${contestId}`, {
                    signal: controller.signal,
                    cache: 'no-store',
                })
                // Include reading the body in the deadline as well.
                const data = await response.json()
                if (!response.ok || !data?.contest) {
                    const error = new Error('Contest unavailable')
                    error.status = response.status
                    throw error
                }
                return data
            })(),
            deadline,
        ])
    } finally {
        clearTimeout(timer)
    }
}
