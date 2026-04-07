# Checkout regression after release 2026.04.07.1323

- release: 2026.04.07.1323
- stable target: 2026.04.06.2137
- rollback branch: rollback/checkout-2026-04-06-2137-20260407132332
- issue: https://github.com/czarflix/payments-service/issues/17

The release widened the retry budget and timeout window, causing checkout saturation.
This rollback warrant restores the last known good profile before production changes continue.
