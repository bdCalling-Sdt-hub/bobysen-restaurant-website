export const GA_TRACKING_ID = "G-CQB7P96T7Y";

// Track page views
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
