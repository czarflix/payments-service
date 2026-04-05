# Checkout regression after release 2026.04.05.1320

- release: 2026.04.05.1320
- stable target: 2026.04.01.7
- rollback branch: rollback/checkout-2026-04-01-7-20260405132053
- issue: https://github.com/czarflix/payments-service/issues/9

The release widened the retry budget and timeout window, causing checkout saturation.
This rollback warrant restores the last known good profile before production changes continue.
