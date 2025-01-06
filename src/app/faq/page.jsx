import { redirect } from "next/navigation";
import faqContent from "@/content/pages/faq.json";

export default function FAQRootPage() {
  const defaultCategory = faqContent.categories[0].title
    .toLowerCase()
    .replace(/\s+/g, "-");
  redirect(`/faq/${defaultCategory}`);
}
