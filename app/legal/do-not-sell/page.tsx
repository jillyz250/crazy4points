import type { Metadata } from 'next'
import LegalPage from '../LegalPage'

export const metadata: Metadata = { title: 'Do Not Sell or Share My Personal Information — Crazy4Points' }

export default function DoNotSellPage() {
  return (
    <LegalPage title="Do Not Sell or Share My Personal Information" lastUpdated="March 2026">
      <p>This page describes your rights under the California Consumer Privacy Act (CCPA) and similar state privacy laws regarding the sale or sharing of your personal information.</p>
      <h2>Your Rights</h2>
      <p>If you are a California resident, you have the right to opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of your personal information as defined by the CCPA. You also have the right to request access to or deletion of your personal information.</p>
      <h2>Do We Sell Your Data?</h2>
      <p>We do not sell personal information in the traditional sense. We may share certain data with advertising and analytics partners (such as cookies and usage data) that may be considered &ldquo;sharing&rdquo; under California law.</p>
      <h2>How to Opt Out</h2>
      <p>To opt out of sharing your data with third-party advertising or analytics partners, you may:</p>
      <ul>
        <li>Use your browser&apos;s built-in privacy tools or a browser extension to block third-party cookies.</li>
        <li>Email us at <a href="mailto:privacy@crazy4points.com">privacy@crazy4points.com</a> with the subject line &ldquo;Do Not Sell My Information.&rdquo;</li>
      </ul>
      <h2>Contact</h2>
      <p>For privacy-related requests, email us at <a href="mailto:privacy@crazy4points.com">privacy@crazy4points.com</a>.</p>
    </LegalPage>
  )
}
