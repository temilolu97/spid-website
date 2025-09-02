import React from "react";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms and Conditions",
      content: `By accessing or using the SPID platform ("SPID"), including any associated subdomains or the mobile application (collectively, the "Platform"), you agree to comply with and be bound by these Terms and Conditions ("Terms"). These Terms govern your access and use of the services provided through the Platform, including any content, functionality, or services offered by Ideos Technology Limited ("Company," "we," "us," or "our"). If you do not agree with these Terms, you must not access or use the Platform.

These Terms apply to all users, whether registered or using the Platform as a guest. If you are accessing the Platform on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms.`,
    },
    {
      title: "2. Eligibility and Age Restriction",
      content: `You must be at least 18 years of age and capable of entering into legally binding agreements to access and use the Platform. By using the Platform, you represent and warrant that you meet these eligibility requirements. We do not knowingly provide services to individuals under the age of 18.`,
    },
    {
      title: "3. Account Registration and Responsibilities",
      content: `a. To access certain features of the Platform, you may be required to create an account ("Account"). You agree to provide accurate, current, and complete information during the registration process and to update such information as needed to ensure its accuracy.

b. You are responsible for maintaining the confidentiality of your account login credentials and for all activities that occur under your account.

c. You agree to immediately notify us of any unauthorized use of your account or any other breach of security. We reserve the right to suspend or terminate your account at our sole discretion.`,
    },
    {
      title: "4. Notifications and Communications",
      content: `By creating an account on SPID, you consent to receive electronic communications from us, including notifications about transactions, system alerts, and promotional content. You may opt out of non-essential communications via your account settings.`,
    },
    {
      title: "5. Currency Conversion and Payment Services",
      content: `When you use the SPID payment services, including funding your wallet via a static account payment channel, you accept and authorize the conversion of your local currency to other currencies (e.g., United States Dollars) at the prevailing market rate as determined by SPID at the time of the transaction. You are solely responsible for verifying the applicable exchange rate before initiating any currency conversion.`,
    },
    {
      title: "6. Use of the Platform",
      content: `You agree to use the Platform solely for lawful purposes. Prohibited uses include, but are not limited to:

1. Impersonating any individual or entity  
2. Engaging in fraudulent or deceptive practices  
3. Uploading viruses or malicious code  
4. Accessing data or systems without authorization  
5. Violating any applicable local, national, or international laws`,
    },
    {
      title: "7. Third-Party Services",
      content: `SPID may offer or link to services provided by third-party providers. We are not responsible for the content, policies, or services of such third parties. If you access third-party services, you do so at your own risk and may be required to enter into separate agreements with the provider. SPID is not liable for any issues arising from your use of third-party services.`,
    },
    {
      title: "8. Intellectual Property",
      content: `All content, design elements, and software associated with SPID are the intellectual property of Ideos Technology Limited or its licensors. You may not use, reproduce, or distribute any part of the Platform content without our express written permission.`,
    },
    {
      title: "9. External Links",
      content: `The Platform may contain links to external websites or resources. SPID does not control or endorse such sites and is not responsible for their content, availability, or accuracy. Your use of third-party links is at your own risk.`,
    },
    {
      title: "10. Disclaimer of Warranties",
      content: `THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE." WE MAKE NO WARRANTIES OR REPRESENTATIONS, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT THE PLATFORM WILL BE ERROR-FREE, UNINTERRUPTED, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.`,
    },
    {
      title: "11. Limitation of Liability",
      content: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SPID AND ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, REVENUE, GOODWILL, OR DATA, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE PLATFORM.`,
    },
    {
      title: "12. Account Termination",
      content: `We reserve the right to terminate or suspend your access to the Platform, without notice and at our sole discretion, for any reason including but not limited to violations of these Terms or applicable law.`,
    },
    {
      title: "13. Modifications and Updates",
      content: `SPID may modify or update these Terms from time to time without prior notice. Changes will be effective immediately upon posting. Your continued use of the Platform constitutes your acceptance of the updated Terms. We recommend reviewing these Terms regularly.`,
    },
    {
      title: "14. Governing Law and Jurisdiction",
      content: `These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising out of or related to these Terms or the Platform shall be subject to the exclusive jurisdiction of the courts of Lagos State, Nigeria.`,
    },
    {
      title: "15. Contact Information",
      content: `For inquiries or concerns regarding these Terms and Conditions, please contact us at: support@spid.io.`,
    },
  ];

  return (
    <div className=" bg-gradient-to-b from-[#F5F5FF] to-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-[#08091A]">
        <h1 className="font-bold text-[48px] text-center mb-12">
          SPID Terms and Conditions
        </h1>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="font-normal text-[32px] mb-4 text-[#000000]">{section.title}</h2>
              <p className="whitespace-pre-line font-normal text-[16px] text-[#000000] leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
