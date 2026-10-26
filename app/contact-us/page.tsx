import type { Metadata } from "next";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = { title: "Contact Us", description: "Contact The Moti Group for general questions, feedback and business enquiries." };

export default function ContactUsPage() {
  return <InfoPage title="Contact The Moti Group" titleMr="The Moti Group शी संपर्क साधा" description="Have a question, feedback or business enquiry? Choose a contact method below." descriptionMr="प्रश्न, अभिप्राय किंवा व्यावसायिक चौकशी असल्यास खालील मार्गांनी संपर्क साधा.">
    <section><h2>General enquiries</h2><p>For general questions about The Moti Group, website feedback or business enquiries, email us at <a href="mailto:info@themotigroup.co.in">info@themotigroup.co.in</a>.</p><p>सामान्य प्रश्न, वेबसाइटबाबत अभिप्राय किंवा व्यावसायिक चौकशीसाठी आम्हाला ईमेल करा.</p><p><a href="mailto:info@themotigroup.co.in">Send an email / ईमेल पाठवा</a></p></section>
    <section><h2>WhatsApp</h2><p>You can also contact us on WhatsApp. Please use this channel for general enquiries and avoid sharing sensitive personal or medical information.</p><p>सामान्य चौकशीसाठी WhatsApp वरही संपर्क साधू शकता. संवेदनशील वैयक्तिक किंवा वैद्यकीय माहिती पाठवू नका.</p><p><a href="https://wa.me/918692823879" target="_blank" rel="noreferrer">Chat on WhatsApp / WhatsApp वर संदेश पाठवा</a></p></section>
    <section><h2>Before you contact us</h2><p>Please mention which Moti Group initiative your enquiry relates to so we can better understand your message. Response times may vary.</p><p>तुमची चौकशी कोणत्या उपक्रमाशी संबंधित आहे हे संदेशात नमूद करा. उत्तर देण्यासाठी लागणारा वेळ बदलू शकतो.</p></section>
  </InfoPage>;
}
