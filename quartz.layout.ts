import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
  links: {
    Instagram: "https://www.instagram.com/shirley.counsellingpsy",
  },
}),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs({ rootName: "首頁", rootPath: "https://shirleycounpsy.github.io" }),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
  title: "目錄",
  sortFn: (a, b) => {
    const dateA = (a.data as any)?.dates?.modified ?? (a.data as any)?.dates?.created ?? new Date(0);
    const dateB = (b.data as any)?.dates?.modified ?? (b.data as any)?.dates?.created ?? new Date(0);

    if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    }

    return a.isFolder ? -1 : 1;
  },
}),
  ],
  right: [
    // Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs({ rootName: "首頁", rootPath: "https://shirleycounpsy.github.io" }), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
  title: "目錄",
  sortFn: (a, b) => {
    const dateA = (a.data as any)?.dates?.modified ?? (a.data as any)?.dates?.created ?? new Date(0);
    const dateB = (b.data as any)?.dates?.modified ?? (b.data as any)?.dates?.created ?? new Date(0);

    if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    }

    return a.isFolder ? -1 : 1;
  },
}),
  ],
  right: [],
}
