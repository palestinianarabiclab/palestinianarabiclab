import { inject } from './vercel-analytics.mjs';

// Vercel's internal endpoint does not exist on localhost or static preview servers.
if (window.location.hostname.endsWith("vercel.app")) {
    inject();
}
