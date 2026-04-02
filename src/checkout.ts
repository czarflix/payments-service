export const checkoutConfig = {
  service: "checkout-service",
  retryBudget: 7,
  timeoutMs: 4200,
  circuitBreaker: "aggressive",
  notes: "Release 2026.04.02.3 increases retries to chase transient failures.",
};

export function buildChargePayload(orderId: string) {
  return {
    orderId,
    mode: "aggressive-retry",
    retryBudget: checkoutConfig.retryBudget,
    timeoutMs: checkoutConfig.timeoutMs,
  };
}
