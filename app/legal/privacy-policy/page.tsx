import type { Metadata } from 'next'
import LegalPage from '../LegalPage'

export const metadata: Metadata = { title: 'Privacy Policy — Crazy4Points' }

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="March 2026">
      <p>This Privacy Policy describes how Crazy4Points (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and shares information about you when you visit crazy4points.com.</p>
      <h2>Information We Collect</h2>
      <p>We may collect information you provide directly, such as your email address when you subscribe to our newsletter. We also collect usage data through analytics tools to understand how visitors use our site.</p>
      <h2>How We Use Your Information</h2>
      <p>We use your email address to send newsletters and updates you have subscribed to. We use analytics data to improve the site experience.</p>
      <h2>Sharing Your Information</h2>
      <p>We do not sell your personal information. We may share it with trusted service providers who help us operate the site (e.g., email delivery services), under confidentiality agreements.</p>
      <h2>Your Rights</h2>
      <p>You may unsubscribe from our newsletter at any time using the unsubscribe link in any email. For other requests, contact us at hello@crazy4points.com.</p>
      <h2>Contact</h2>
      <p>Questions? Email us at <a href="mailto:hello@crazy4points.com">hello@crazy4points.com</a>.</p>
    </LegalPage>
  )
}
