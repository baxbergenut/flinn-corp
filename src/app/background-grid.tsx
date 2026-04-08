// SEO/performance: Keep the decorative backdrop server-rendered and static to avoid shipping pointer-tracking JavaScript on every page.
export default function BackgroundGrid() {
  return <div aria-hidden="true" className="site-background-grid" />;
}
