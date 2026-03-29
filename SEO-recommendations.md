# SEO Recommendations for Vendaroo Website

## 1) High-Priority Technical SEO (Do First)

1. Add a `sitemap.xml` at the site root and include all indexable pages.
2. Add a `robots.txt` at the site root.
3. Add canonical tags on every page to avoid duplicate URL issues.
4. Ensure each page has a unique `<title>` and `<meta name="description">`.
5. Add Open Graph and Twitter meta tags for better sharing/snippet quality.
6. Compress large images and serve modern formats (`.webp`) where possible.
7. Add width/height attributes or layout constraints for images to reduce layout shift.
8. Set one clear `H1` per page and keep heading hierarchy consistent.
9. Ensure internal links are crawlable and no orphan pages exist.
10. Verify mobile performance in Lighthouse and fix Core Web Vitals issues.

## 2) On-Page SEO by Page Type

### Homepage (`/`)

1. Target keyword cluster:
	- Free vending machine installation Melbourne
	- Vending machine service Melbourne
	- Office vending machines Melbourne
2. Keep title under ~60 chars and include location + service intent.
3. Include primary CTA text that matches search intent: free install, no hidden costs.
4. Add short FAQ block (2-4 questions) to capture long-tail queries.

### Services Hub (`/services/`)

1. Add 150-250 words introducing service types and who they are for.
2. Link prominently to both service detail pages and back to enquiry page.
3. Add location modifiers naturally: Melbourne CBD, inner suburbs, etc.

### Service Detail Pages

Pages:
- `/services/vending-machine-installation.html`
- `/services/healthy-snack-options.html`

Recommendations:
1. Expand each page to 600-900 words with practical, unique detail.
2. Add sections:
	- Who this is for
	- Typical install timeline
	- Payment options (cashless/tap-and-go)
	- Maintenance/restocking frequency
	- Coverage areas
3. Add FAQ section at bottom with 4-6 questions.
4. Add internal links to related blog posts for contextual relevance.

### Blog Index and Blog Posts

Pages:
- `/blogs/`
- 3 current blog post pages

Recommendations:
1. Keep blog slugs short, keyword-focused, and stable.
2. Add publish date and author name on each post (trust signal).
3. Add “Related Posts” links in each article.
4. Add stronger internal links from blogs to service pages and enquiry page.
5. Add article schema (`BlogPosting`) for each post.

### Location and Enquiry Pages

1. Add local intent content to `/locations/` (suburbs served, response times).
2. Add NAP consistency (name, address/service area, phone) in footer and contact pages.
3. Add conversion-focused headings on `/enquire/` (request callback, free consultation).

## 3) Local SEO (Very Important for This Business)

1. Create/optimize Google Business Profile with:
	- Primary category aligned with vending services
	- Service area set to Melbourne and target suburbs
	- Real photos, services, business description, UTM-tagged website URL
2. Build local citations with consistent NAP on key directories.
3. Add location mentions naturally in core pages, not keyword stuffing.
4. Encourage client reviews and reply to all reviews.
5. Add `LocalBusiness` schema (or most specific business type available).

## 4) Structured Data to Implement

Use JSON-LD in `<head>` or near end of `<body>`:

1. `Organization` schema on homepage.
2. `LocalBusiness` schema with phone, service area, opening hours.
3. `Service` schema on service detail pages.
4. `BlogPosting` schema on each blog article.
5. `FAQPage` schema where FAQ blocks are added.

## 5) Content Strategy (Next 8-12 Weeks)

1. Publish 2-4 blog posts per month targeting local/commercial intent.
2. New topic ideas:
	- Vending machines for offices in Melbourne CBD
	- Best vending options for gyms and fitness studios
	- Hospital and warehouse shift-friendly vending setups
	- Healthy vending product trends in Melbourne
3. Create one comparison/guide page:
	- “How to choose the right vending machine for your workplace”
4. Add case-study style pages with outcomes (uptime, staff satisfaction, convenience metrics).

## 6) Internal Linking Rules

1. Every blog post should link to at least:
	- One service page
	- Enquiry page
	- One other blog post
2. Service pages should link to:
	- Relevant blog posts
	- Locations page
	- Enquiry page (high visibility)
3. Homepage should feature latest blogs with descriptive anchor text.

## 7) Conversion + SEO Alignment

1. Keep phone CTA visible site-wide (header/footer).
2. Add click-to-call links with event tracking.
3. Use trust elements:
	- “Free installation” explanation
	- Service coverage clarity
	- Response time expectations
4. Add simple testimonial section when available.

## 8) Measurement and Tracking Setup

1. Install Google Analytics 4.
2. Connect Google Search Console and submit sitemap.
3. Track events:
	- Click-to-call
	- Enquiry form submit
	- CTA button clicks
4. Monitor:
	- Impressions/clicks for Melbourne-targeted queries
	- Top landing pages
	- Conversion rate by page

## 9) Quick Wins (Can Be Done This Week)

1. Add missing meta titles/descriptions/canonical tags to all pages.
2. Add `robots.txt` and `sitemap.xml`.
3. Add Organization + LocalBusiness schema.
4. Improve image sizes and alt text quality.
5. Add 1 FAQ section to homepage and 1 to each service page.

## 10) Suggested Title and Meta Direction

Use these as direction, then refine for CTR and character limits:

1. Homepage title:
	- Free Vending Machine Installation Melbourne | Vendaroo
2. Services page title:
	- Vending Machine Services Melbourne | Installation & Healthy Options
3. Installation service title:
	- Vending Machine Installation Melbourne | Fast & Reliable Setup
4. Healthy snacks service title:
	- Healthy Snack Vending Machines Melbourne | Better On-Site Choices
5. Blog index title:
	- Vending Insights Blog Melbourne | Workplace & Smart Vending Tips

## 11) 30/60/90 Day SEO Plan

### Days 1-30

1. Complete technical SEO foundation (sitemap, robots, metadata, schema basics).
2. Improve service page depth and add FAQs.
3. Set up GA4 + Search Console and baseline reporting.

### Days 31-60

1. Publish 4-6 additional location and intent-driven blogs.
2. Add internal link framework between blogs/services/enquiry.
3. Start local citation cleanup and Google Business Profile optimization.

### Days 61-90

1. Evaluate top performing pages and optimize titles/descriptions for CTR.
2. Expand high-performing content into deeper guides/case studies.
3. Build simple backlink outreach (local business listings/partners).

## 12) Priority Order Summary

1. Technical basics (crawl/index/metadata/schema)
2. Service page content expansion
3. Local SEO signals (GBP + citations + location relevance)
4. Consistent blog publishing with strong internal links
5. Ongoing measurement and optimization

