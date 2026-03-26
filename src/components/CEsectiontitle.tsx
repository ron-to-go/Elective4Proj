type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionTitle({ eyebrow, title, subtitle, center }: Props) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <div className="text-sm font-bold ce-text-gold tracking-[0.2em] uppercase mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-black ce-text-navy tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}