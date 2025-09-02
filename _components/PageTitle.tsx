interface PageTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageTitle({
  title,
  subtitle,
  className,
}: PageTitleProps) {
  return (
    <div>
      <h1 className={className || 'title'}>{title}</h1>
      <h2 className={className || 'subtitle'}>{subtitle}</h2>
    </div>
  );
}
