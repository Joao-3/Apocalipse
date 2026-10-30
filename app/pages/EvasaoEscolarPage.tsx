import type { PageProps } from '../shared/types/design'
import GeneratedPage from '../core/GeneratedPage'
import { page } from '../pagesdata/EvasaoEscolarPage'

export default function EvasaoEscolarPage(props: PageProps) {
  return <GeneratedPage page={page} {...props} />
}
