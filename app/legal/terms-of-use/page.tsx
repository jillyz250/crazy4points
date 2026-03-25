import type { Metadata } from 'next'
import LegalPage from '../LegalPage'

export const metadata: Metadata = { title: 'Terms of Use — Crazy4Points' }

export default function TermsOfUsePage() {
  return (
    <LegalPage title="Terms of Use" lastUpdated="March 2026">
      <p>By accessing or using crazy4points.com, you agree to be bound by these Terms of Use. If you do not agree, please do not use the site.</p>
      <h2>Use of the Site</h2>
      <p>You may use this site for lawful, personal, non-commercial purposes only. You may not reproduce, distribute, or create derivative works from site content without our written permission.</p>
      <h2>Disclaimer</h2>
      <p>The content on this site is for informational purposes only. We make no guarantees about the accuracy, completeness, or suitability of any information. Points programs, bonuses, and offers can change at any time without notice.</p>
      <h2>Affiliate Links</h2>
      <p>This site contains affiliate links. We may earn a commission when you click on links and make purchases or applications. This does not affect our editorial independence. See our <a href="/legal/affiliate-disclosure">Affiliate Disclosure</a>.</p>
      <h2>Changes</h2>
      <p>We reserve the right to modify these terms at any time. Continued use of the site constitutes acceptance of updated terms.</p>
      <h2>Contact</h2>
      <p>Questions? Email us at <a href="mailto:hello@crazy4points.com">hello@crazy4points.com</a>.</p>
    </LegalPage>
  )
}
