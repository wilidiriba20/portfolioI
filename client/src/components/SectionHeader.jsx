export default function SectionHeader({ label, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-primary uppercase">{label}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>}
    </div>
  );
}
