import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Effective Date: May 5, 2024

1. Acceptance of Terms
By accessing and using the LocalDUDE website (https://localdude.me), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of these Terms, do not use this site.

2. Service Description
LocalDUDE is an AI-powered chatbot that assists users with executing tasks and finding answers quickly.

3. User Accounts
When purchasing a subscription, you are granted the right to use the LocalDUDE platform. The ownership of the account is non-transferable. You may not resell or redistribute your access to the service.

4. Refunds
You are entitled to a full refund of your subscription within 7 days of purchase if you are not satisfied with the service.

5. User Data
We collect personal data such as your name, email, and payment information. For details on how we handle this information, please refer to our Privacy Policy at https://localdude.me/privacy-policy.

6. Non-Personal Data Collection
We use cookies to improve your experience on our site. By using LocalDUDE, you consent to the use of these cookies.

7. Governing Law
These Terms shall be governed by and construed in accordance with the laws of Germany, without regard to its conflict of law provisions.

8. Changes to Terms
We reserve the right to modify these Terms at any time. We will notify you of any changes by sending an email to the address associated with your account.

9. Contact Information
If you have any questions about these Terms, please contact us at andy@mail.localdude.me.

By using LocalDUDE, you acknowledge that you have read, understood, and agree to be bound by these Terms.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
