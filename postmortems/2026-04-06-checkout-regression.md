# Checkout regression after release 2026.04.06.1106

- release: 2026.04.06.1106
- stable target: 2026.04.01.7
- rollback branch: rollback/checkout-2026-04-01-7-20260406110655
- issue: https://github.com/czarflix/payments-service/issues/11

The release widened the retry budget and timeout window, causing checkout saturation.
This rollback warrant restores the last known good profile before production changes continue.
