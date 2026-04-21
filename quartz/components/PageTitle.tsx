import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const PageTitle: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "page-title")}>
      <a href="https://shirleycounpsy.github.io">
        <span class="page-title-main">明心橡</span>
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
  color: var(--secondary);
}

.page-title-sub {
  font-family: var(--bodyFont);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--darkgray);
  opacity: 0.85;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
