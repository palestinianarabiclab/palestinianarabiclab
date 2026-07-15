import { injectSpeedInsights } from './vercel-speed-insights.mjs';

// Vercel's internal endpoint does not exist on localhost or static preview servers.
if (window.location.hostname.endsWith("vercel.app")) {
    injectSpeedInsights();
}
