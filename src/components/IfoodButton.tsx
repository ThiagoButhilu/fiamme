type IfoodButtonProps = {
  className?: string
  size?: 'sm' | 'md'
}

export default function IfoodButton({ className = '', size = 'md' }: IfoodButtonProps) {
  const sizing = size === 'sm' ? 'px-5 py-2.5 text-sm' : 'px-7 py-3.5 text-base'
  return (
    <a
      href="#"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-flame font-body font-bold text-crust shadow-[3px_3px_0_var(--color-char)] transition-transform hover:-translate-y-0.5 hover:bg-flame-dark hover:shadow-[5px_5px_0_var(--color-char)] ${sizing} ${className}`}
    >
      Pedir pelo iFood
    </a>
  )
}
