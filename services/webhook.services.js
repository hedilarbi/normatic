export const launchScanWebhook = async (
  uuid,
  cgvUrl,
  rgpdUrl,
  legalUrl,
  intensity
) => {
  try {
    const webhookUrl = process.env.WEBHOOK_URL;

    const webhookKey = process.env.WEBHOOK_SECRET;

    const payload = {
      uuid,
      notify_url: process.env.BASE_URL
        ? `${process.env.BASE_URL}/api/scans/webhook-scan-results`
        : null,
      scanType: intensity || "lite",
      urls: {},
    };

    if (legalUrl) payload.urls.legals = legalUrl;
    if (rgpdUrl) payload.urls.privacy = rgpdUrl;
    if (cgvUrl) payload.urls.cgv = cgvUrl;

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        Authorization: webhookKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await res.text().catch(() => null);

    if (!res.ok) {
      return {
        ok: false,
        error: `Webhook error: ${res.status} ${text || ""}`.trim(),
      };
    }
    return { ok: true, data: text };
  } catch (err) {
    return {
      ok: false,
      error: `Webhook exception: ${err.message}`,
    };
  }
};
