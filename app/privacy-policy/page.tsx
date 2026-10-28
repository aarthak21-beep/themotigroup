import type { Metadata } from "next";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how The Moti Group handles information, cookies, advertising and privacy.",
  openGraph: {
    type: "website",
    url: "https://themotigroup.co.in/privacy-policy",
    siteName: "The Moti Group",
    title: "Privacy Policy | The Moti Group",
    description: "Learn how The Moti Group handles information, cookies, advertising and privacy.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | The Moti Group",
    description: "Learn how The Moti Group handles information, cookies, advertising and privacy.",
  },
};

export default function PrivacyPolicyPage() {
  return <InfoPage title="Privacy Policy" titleMr="गोपनीयता धोरण" description="This policy explains how The Moti Group handles information when you visit our website." descriptionMr="तुम्ही आमच्या वेबसाइटला भेट देता तेव्हा The Moti Group माहिती कशी हाताळतो, हे या धोरणात स्पष्ट केले आहे.">
    <section><h2>1. About this policy</h2><p>The Moti Group operates themotigroup.co.in and provides information about our initiatives in healthcare, technology, finance, deals and digital solutions. This policy describes our general privacy practices. Individual services or linked websites may have their own policies.</p><p>या धोरणात आमच्या वेबसाइटवरील माहिती आणि गोपनीयतेबाबतच्या सामान्य पद्धती स्पष्ट केल्या आहेत. आमच्या इतर सेवा किंवा बाह्य वेबसाइटची स्वतंत्र गोपनीयता धोरणे असू शकतात.</p></section>
    <section><h2>2. Information you provide</h2><p>If you contact us by email or WhatsApp, we may receive the contact details and message you choose to share. Please do not send sensitive personal information unless it is necessary for your enquiry.</p><p>तुम्ही ईमेल किंवा WhatsApp द्वारे संपर्क केल्यास, तुम्ही स्वेच्छेने दिलेली संपर्क माहिती आणि संदेश आम्हाला मिळू शकतो.</p></section>
    <section><h2>3. Technical information</h2><p>Like many websites, our hosting or security services may process technical information such as IP address, browser type, device information, requested pages and timestamps to deliver, maintain and protect the website. The exact information retained depends on the services in use.</p><p>वेबसाइट चालवणे आणि सुरक्षित ठेवण्यासाठी होस्टिंग किंवा सुरक्षा सेवा IP पत्ता, ब्राउझर आणि पानांच्या विनंत्यांसारखी तांत्रिक माहिती प्रक्रिया करू शकतात.</p></section>
    <section><h2>4. Cookies, advertising and Google AdSense</h2><p>Cookies and similar technologies may be used for essential site functions, preferences, measurement or advertising where enabled. If Google AdSense or other third-party advertising is used on this website, Google and its partners may use cookies or similar technologies to serve, measure or personalise ads, subject to applicable settings and law. Third-party providers process data under their own policies. You can learn more in <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">Google's advertising policies and technologies information</a> and manage available ad personalisation settings in your Google account.</p><p>आवश्यक कार्ये, पसंती, मोजमाप किंवा जाहिरातींसाठी कुकीज वापरल्या जाऊ शकतात. Google AdSense वापरल्यास, Google आणि त्याचे भागीदार त्यांच्या धोरणांनुसार जाहिराती दाखवण्यासाठी किंवा मोजण्यासाठी कुकीज वापरू शकतात.</p></section>
    <section><h2>5. How information is used</h2><p>Information may be used to respond to enquiries, operate and secure the website, understand general site performance, prevent abuse and comply with legal obligations. We do not state that every analytics or advertising tool is active at all times; practices depend on the tools actually configured.</p><p>माहितीचा वापर चौकशीला उत्तर देणे, वेबसाइट चालवणे व सुरक्षित ठेवणे, एकूण कामगिरी समजून घेणे आणि कायदेशीर जबाबदाऱ्या पूर्ण करणे यासाठी होऊ शकतो.</p></section>
    <section><h2>6. Sharing and retention</h2><p>We may share information with service providers that help operate the website, where required by law, or to protect rights and security. We do not sell personal information as a business practice. Information is retained only as reasonably needed for the stated purpose, security, dispute resolution or legal requirements.</p><p>वेबसाइट चालवण्यासाठी मदत करणाऱ्या सेवा पुरवठादारांशी किंवा कायद्याने आवश्यक असल्यास माहिती शेअर केली जाऊ शकते. माहिती आवश्यक तेवढ्याच कालावधीसाठी ठेवली जाते.</p></section>
    <section><h2>7. Your choices and children's privacy</h2><p>You can choose not to submit information and may control cookies through your browser settings. Browser controls may not replace consent tools required by law in your region. This website is not intended to knowingly collect personal information from children.</p><p>तुम्ही माहिती देणे टाळू शकता आणि ब्राउझरमधून कुकीज नियंत्रित करू शकता. लागू कायद्यानुसार आवश्यक असलेली संमती यामुळे नेहमीच पूर्ण होत नाही.</p></section>
    <section><h2>8. Contact and updates</h2><p>For privacy questions, contact <a href="mailto:info@themotigroup.co.in">info@themotigroup.co.in</a>. We may update this policy as our services or legal requirements change. The revised version will be published on this page.</p><p>गोपनीयतेबाबत प्रश्न असल्यास <a href="mailto:info@themotigroup.co.in">info@themotigroup.co.in</a> वर संपर्क करा.</p><p><strong>Last updated: 26 October 2026</strong></p></section>
  </InfoPage>;
}
