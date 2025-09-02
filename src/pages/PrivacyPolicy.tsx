
const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: `a. Information You Provide to Us
- Full name, date of birth, phone number, email address
- BVN, NIN, passport or government-issued ID details
- Business registration documents (for business users)
- Residential or office address
- KYC verification data and supporting documentation
- Payment and wallet details

b. Information Collected Automatically
- IP address and device information
- Login timestamps, geolocation, and device identifiers
- Browsing behavior on the platform
- Log data and session information

c. Information from Third Parties
- Verification partners (e.g., KYC and AML service providers)
- Financial institutions
- Regulatory bodies (as required)`,
    },
    {
      title: "2. How We Use Your Information",
      content: `- User onboarding, identity verification, and KYC compliance
- Enabling wallet transactions and remittances
- Managing user accounts and preferences
- Fraud detection and transaction monitoring
- Providing customer support and user engagement
- Compliance with legal obligations`,
    },
    {
      title: "3. Sharing of Personal Data",
      content: `- Licensed KYC/AML verification partners
- Government and regulatory agencies (as required by law)
- Financial partners for transaction processing
- Cloud service providers for secure hosting and backups
- Law enforcement when legally mandated

We do not sell your data to third parties.`,
    },
    {
      title: "4. Your Rights",
      content: `- Access, update or delete your personal data
- Object to or restrict processing
- Withdraw consent at any time (where processing is based on consent)
- Lodge a complaint with a data protection authority

To exercise your rights, contact: privacy@spidapp.io or compliance@ideospay.com`,
    },
    {
      title: "5. Data Retention",
      content: `We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy, including legal, regulatory, or accounting requirements.`,
    },
    {
      title: "6. Data Security",
      content: `- End-to-end encryption
- Firewalls and secure servers
- Role-based access controls
- Regular audits and penetration testing

However, no method of transmission over the Internet is 100% secure.`,
    },
    {
      title: "7. Use of Cookies",
      content: `We use cookies and similar technologies to enhance user experience, remember preferences, and perform analytics. You can manage cookie preferences in your browser settings.`,
    },
    {
      title: "8. Cross-Border Data Transfers",
      content: `If data is transferred outside Nigeria or your local jurisdiction, we ensure adequate safeguards are in place, including standard contractual clauses or binding corporate rules.`,
    },
    {
      title: "9. Children’s Privacy",
      content: `SPID is not intended for children under the age of 18. We do not knowingly collect data from children. If we discover such data has been collected, it will be deleted promptly.`,
    },
    {
      title: "10. Changes to This Policy",
      content: `We may update this Privacy Policy periodically. We will notify you via email or a notice on our platform prior to significant changes. Please review this page regularly.`,
    },
    {
      title: "11. Contact Us",
      content: `For any questions or requests relating to your privacy or this policy, contact:
privacy@spidapp.io
[Insert Office Address]
[Insert Support Phone Number]`,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#F5F5FF] to-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-[#000000]">
        {/* Main heading */}
        <h1 className="font-bold text-[48px]  text-center mb-4">
          SPID Privacy Policy
        </h1>

        {/* Dates under heading */}
        <div className="text-center font-normal text-[18px] mb-12">
          <p>Effective Date: 01/08/2025</p>
          <p>Last Updated: 01/08/2025</p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="font-normal text-[32px] mb-4">{section.title}</h2>
              <p className="whitespace-pre-line font-normal text-[18px] leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
