import type { Metadata } from 'next'
import LegalPage from '../LegalPage'

export const metadata: Metadata = { title: 'Accessibility Statement — Crazy4Points' }

export default function AccessibilityPage() {
  return (
    <LegalPage title="Accessibility Statement" lastUpdated="March 2026">
      <p>Crazy4Points is committed to ensuring our website is accessible to everyone, including people with disabilities.</p>
      <h2>Our Commitment</h2>
      <p>We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines explain how to make web content more accessible to people with disabilities.</p>
      <h2>What We&apos;re Doing</h2>
      <ul>
        <li>Using semantic HTML to support screen readers</li>
        <li>Providing alt text for images</li>
        <li>Ensuring sufficient color contrast for text</li>
        <li>Making navigation keyboard-accessible</li>
        <li>Using clear, simple language</li>
      </ul>
      <h2>Known Limitations</h2>
      <p>We are continuously working to improve accessibility. Some older content or third-party embedded content may not fully meet our standards yet.</p>
      <h2>Feedback</h2>
      <p>If you experience barriers or have suggestions for improving accessibility on our site, please contact us at <a href="mailto:hello@crazy4points.com">hello@crazy4points.com</a>. We take all accessibility feedback seriously and will respond within a reasonable time.</p>
    </LegalPage>
  )
}
