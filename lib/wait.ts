
/**
 *
 * @param {number} ms
 * @returns {Promise<void>}
 */
async function wait(ms: number = (10 * 1000)): Promise<void> {
  await new Promise(
    (r) => setTimeout(r, ms)
  )
  return;
}
