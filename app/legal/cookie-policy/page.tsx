import type { Metadata } from 'next'
import LegalPage from '../LegalPage'

export const metadata: Metadata = { title: 'Cookie Policy — Crazy4Points' }

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" lastUpdated="March 2026">
      <p>This Cookie Policy explains how Crazy4Points uses cookies and similar tracking technologies when you visit our site.</p>
      <h2>What Are Cookies?</h2>
      <p>Cookies are small text files stored on your device when you visit a website. They help websites remember information about your visit and improve your experience.</p>
      <h2>Cookies We Use</h2>
      <p><strong>Essential cookies:</strong> Required for the site to function. These cannot be disabled.</p>
      <p><strong>Analytics cookies:</strong> Help us understand how visitors interact with the site (e.g., Google Analytics). This data is aggregated and anonymous.</p>
      <p><strong>Advertising/affiliate cookies:</strong> Set by third-party affiliate programs when you click links on our site. These help track commissions.</p>
      <h2>Managing Cookies</h2>
      <p>You can control or delete cookies through your browser settings. Note that disabling certain cookies may affect site functionality. Most browsers allow you to refuse new cookies, delete existing cookies, or be notified when cookies are set.</p>
      <h2>Contact</h2>
      <p>Questions? Email us at <a href="mailto:hello@crazy4points.com">hello@crazy4points.com</a>.</p>
    </LegalPage>
  )
}
