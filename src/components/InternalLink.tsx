import Link from "next/link"

type Props = {
  text: string
  href: string
  className?: string
}

function InternalLink({ text, href, className }: Props) {
  return (
    <Link
      href={href}
      className={`relative inline-block no-underline after:absolute after:bottom-[-8px] after:left-0 after:h-[3px] after:w-full after:origin-top-left after:scale-x-[0] after:scale-y-[1] after:duration-[0.5s] hover:after:scale-[1] ${className}`}
    >
      {text}
    </Link>
  )
}

export default InternalLink
