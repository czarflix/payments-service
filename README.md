# payments-service

Demo checkout/payments service used by the Warrant rollback-warrant flow.

## Scenario

- `2026.04.01.7` is the last known good release
- `2026.04.02.3` introduces an aggressive retry regression in checkout
- the rollback PR restores the stable retry behavior

## Files

- `src/checkout.ts` holds the checkout retry logic
- `release.json` tracks the current simulated release
