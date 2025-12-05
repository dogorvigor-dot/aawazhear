import React from "react";
import FAQSection from "../components/FAQSection"; // our accordion component

export default function FAQ() {
  const hearingAidFAQ = [
    {
      question: "What causes hearing loss?",
      answer:
        "Hearing loss can be caused by aging, noise exposure, infections, or genetic factors.",
    },
    {
      question: "Can hearing loss be cured?",
      answer:
        "Some types of hearing loss can be treated medically; others require hearing aids.",
    },
    {
      question: "What is a hearing aid?",
      answer: "A hearing aid amplifies sound to help improve hearing clarity.",
    },
  ];

  const centerFAQ = [
    {
      question: "What services do you provide?",
      answer: "We offer hearing tests, hearing aid fittings, and speech therapy.",
    },
    {
      question: "What is speech therapy?",
      answer:
        "Speech therapy helps improve communication and language skills.",
    },
  ];

  return (
    <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <FAQSection
        title="FAQ on Hearing Aid and Related Services"
        data={hearingAidFAQ}
      />
      
      <FAQSection
        title="FAQ on Speech & Hearing Care Center"
        data={centerFAQ}
      />
    </div>
  );
}
