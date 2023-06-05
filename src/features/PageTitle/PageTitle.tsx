import InternalLink from "components/InternalLink"
import { SiteTitle } from "util/constants"

type Props = {
  title: string
  className?: string
}

export function PageTitle({ title, className }: Props) {
  return (
    <div className={`mx-10 text-8xl ${className}`}>
      <InternalLink text={SiteTitle} href="/" className="after:bg-white" />
      {title === SiteTitle ? "" : "::" + title}
    </div>
  )
}
