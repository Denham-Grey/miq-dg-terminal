type BrandMarkProps = {
  size?: number;
};

export function BrandMark({ size = 32 }: BrandMarkProps) {
  return (
    <picture>
      <source srcSet="/mark.svg" media="(prefers-reduced-motion: reduce)" />
      <img src="/mark-motion.gif" alt="" width={size} height={size} />
    </picture>
  );
}
