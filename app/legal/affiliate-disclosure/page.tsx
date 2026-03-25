import type { Metadata } from 'next'
import LegalPage from '../LegalPage'

export const metadata: Metadata = { title: 'Affiliate Disclosure — Crazy4Points' }

export default function AffiliateDisclosurePage() {
  return (
    <LegalPage title="Affiliate Disclosure" lastUpdated="March 2026">
      <p>Crazy4Points participates in affiliate advertising programs. This means we may earn a commission if you click on certain links and complete a purchase, application, or other qualifying action — at no additional cost to you.</p>
      <h2>How This Works</h2>
      <p>When you click an affiliate link on this site and complete a qualifying action (such as applying for a credit card or booking travel), we may receive compensation from the company. This helps us keep the site free and the content independent.</p>
      <h2>Our Editorial Integrity</h2>
      <p>Affiliate relationships do not influence which products or services we recommend. We only feature offers we believe are genuinely valuable to our readers. Our opinions are our own.</p>
      <h2>FTC Compliance</h2>
      <p>In accordance with the FTC&apos;s guidelines on endorsements and testimonials, we disclose this relationship clearly. Any post containing affiliate links will note this relationship.</p>
      <h2>Contact</h2>
      <p>Questions about our affiliate relationships? Email us at <a href="mailto:hello@crazy4points.com">hello@crazy4points.com</a>.</p>
    </LegalPage>
  )
}
