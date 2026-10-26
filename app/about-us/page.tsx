import type { Metadata } from "next";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = { title: "About Us", description: "Learn about The Moti Group and its information, service and technology initiatives." };

export default function AboutUsPage() {
  return <InfoPage title="About The Moti Group" titleMr="The Moti Group बद्दल" description="The Moti Group brings together information, services and technology initiatives intended to make everyday tasks and decisions easier." descriptionMr="दैनंदिन कामे आणि निर्णय सोपे करण्यासाठी The Moti Group माहिती, सेवा आणि तंत्रज्ञान उपक्रम एकत्र आणतो.">
    <section><h2>Who we are</h2><p>The Moti Group is an umbrella for initiatives across healthcare information and diagnostics, technology education, financial awareness, shopping deals and digital business solutions. Our goal is to make useful information and services easier to discover.</p><p>The Moti Group अंतर्गत आरोग्यविषयक माहिती व डायग्नोस्टिक्स, तंत्रज्ञान, आर्थिक साक्षरता, खरेदी ऑफर्स आणि डिजिटल व्यवसाय उपाय यांसारखे उपक्रम आहेत.</p></section>
    <section><h2>Our initiatives</h2><ul><li><a href="https://diagnostics.themotigroup.co.in/">Moti Diagnostics Centre</a> — diagnostic and laboratory services.</li><li><a href="https://health.themotigroup.co.in/">Moti Health</a> — health and wellness information.</li><li><a href="https://techlab.themotigroup.co.in/">Moti TechLab</a> — accessible technology explainers and digital awareness.</li><li><a href="https://financial.themotigroup.co.in/">Moti Financial</a> — financial literacy and money-management information.</li><li><a href="https://dealz.themotigroup.co.in/">Moti Dealz</a> — shopping deals and offers.</li><li><a href="http://billing.themotigroup.co.in/">Moti Technologies</a> — business software and digital solutions.</li></ul></section>
    <section><h2>Our approach</h2><p>We aim to publish helpful, understandable information and make our services easy to navigate. Information on this site is general in nature and should not be treated as a substitute for professional medical, legal or financial advice.</p><p>आम्ही उपयुक्त आणि समजण्यास सोपी माहिती देण्याचा प्रयत्न करतो. या वेबसाइटवरील सामान्य माहिती व्यावसायिक वैद्यकीय, कायदेशीर किंवा आर्थिक सल्ल्याचा पर्याय नाही.</p></section>
    <section><h2>Get in touch</h2><p>Questions, feedback or business enquiries are welcome. Visit our <a href="/contact-us">Contact Us page</a> or email <a href="mailto:info@themotigroup.co.in">info@themotigroup.co.in</a>.</p></section>
  </InfoPage>;
}
