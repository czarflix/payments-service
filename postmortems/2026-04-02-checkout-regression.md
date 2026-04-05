# Checkout Regression: 2026-04-02.3

- Symptom: checkout latency and duplicate charge retries increased after release `2026.04.02.3`
- Suspected cause: aggressive retry budget raised from `2` to `7`
- Mitigation: merge rollback PR back to `2026.04.01.7`
- Comms: post an internal update to the incident Slack lane and open a 20 minute war-room hold
