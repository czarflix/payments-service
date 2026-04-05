export const checkoutConfig = {
  service: "checkout-service",
  retryBudget: 2,
  timeoutMs: 1800,
  circuitBreaker: "balanced",
  notes: "Stable release profile for checkout traffic.",
};

export function buildChargePayload(orderId: string) {
  return {
    orderId,
    mode: "stable",
    retryBudget: checkoutConfig.retryBudget,
    timeoutMs: checkoutConfig.timeoutMs,
  };
}
