const { syncDB } = require("../../tasks/sync-db")

describe('syncDB', () => {
  it('run 2 times', () => {
    syncDB()
    const result = syncDB();

    expect(result).toBe(2)
  })
})
