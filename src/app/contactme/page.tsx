import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with Matt G. Wagner.",
};

export default function ContactMe() {
  return (
    <>
      <h1>Contact Me</h1>
      <iframe
        className="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrP58qcMlnJOR8Hb?backgroundColor=red"
        frameBorder="0"
        width="100%"
        height="755"
        style={{ background: "transparent", border: "1px solid #ccc" }}
        title="Contact Form"
      />
    </>
  );
}
