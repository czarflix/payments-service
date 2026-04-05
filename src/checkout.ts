export const checkoutConfig = {
  service: "checkout-service",
  retryBudget: 5,
  timeoutMs: 420,
  circuitBreaker: "aggressive",
  notes: "Regression release profile that retries too quickly under load.",
};

export function buildChargePayload(orderId: string) {
  return {
    orderId,
    mode: "regression",
    retryBudget: checkoutConfig.retryBudget,
    timeoutMs: checkoutConfig.timeoutMs,
  };
}
