import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const PageTitle: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "page-title")}>
      <a href="https://shirleycounpsy.github.io">
        <span class="page-title-main">
          <span class="title-base">明心</span><span class="title-accent">櫞</span>
        </span>
        <span class="page-title-sub">輔導心理 by Shirley</span>
      </a>
    </div>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}

.page-title a {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
  text-decoration: none;
}

.page-title-main {
  font-family: var(--titleFont);
  font-size: 1.75rem;
}

.title-base {
  color: var(--dark);
}

.title-accent {
  color: var(--secondary);
}

.page-title-sub {
  font-family: var(--headerFont);
  font-weight: 300;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--darkgray);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
