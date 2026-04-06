# Checkout regression after release 2026.04.06.2137

- release: 2026.04.06.2137
- stable target: 2026.04.06.2111
- rollback branch: rollback/checkout-2026-04-06-2111-20260406213702
- issue: https://github.com/czarflix/payments-service/issues/15

The release widened the retry budget and timeout window, causing checkout saturation.
This rollback warrant restores the last known good profile before production changes continue.
