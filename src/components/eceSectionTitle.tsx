type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionTitle({ 
  eyebrow, 
  title, 
  subtitle, 
  center = true 
}: Props) {
  return (
    <div className={`mb-6 md:mb-12 ${center ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <div className="text-gray-400 tracking-[0.6em] text-[10px] md:text-[10px] font-bold mb-4 uppercase">
          {eyebrow}
        </div>
      )}

      <h2 className="mt-2 text-3xl md:text-4xl font-black uppercase italic bg-gradient-to-r from-[#2B1C50] via-[#5A418E] to-[#8B65CF] bg-clip-text text-transparent leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-6 text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed border-t border-gray-100 pt-6 ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}