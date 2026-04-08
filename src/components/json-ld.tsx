type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

// SEO: Render JSON-LD safely in the HTML so search engines can parse structured data directly from the page source.
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
