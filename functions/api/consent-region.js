const CONSENT_REQUIRED_COUNTRIES = new Set([
  "AT",
  "BE",
  "BG",
  "CH",
  "CY",
  "CZ",
  "DE",
  "DK",
  "EE",
  "ES",
  "FI",
  "FR",
  "GB",
  "GR",
  "HR",
  "HU",
  "IE",
  "IS",
  "IT",
  "LI",
  "LT",
  "LU",
  "LV",
  "MT",
  "NL",
  "NO",
  "PL",
  "PT",
  "RO",
  "SE",
  "SI",
  "SK",
]);

export async function onRequestGet({ request }) {
  const country = typeof request.cf?.country === "string"
    ? request.cf.country.toUpperCase()
    : null;
  const requiresConsent = country === null || CONSENT_REQUIRED_COUNTRIES.has(country);

  return Response.json(
    { country, requires_consent: requiresConsent },
    {
      headers: {
        "Cache-Control": "private, max-age=300",
      },
    },
  );
}
