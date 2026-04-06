export const checkoutConfig = {
  service: "checkout-service",
  retryBudget: 7,
  timeoutMs: 4200,
  circuitBreaker: "disabled",
  notes: "Regression injected for Warrant live demo.",
};

export function buildChargePayload(orderId: string) {
  return {
    orderId,
    mode: "degraded",
    retryBudget: checkoutConfig.retryBudget,
    timeoutMs: checkoutConfig.timeoutMs,
  };
}
