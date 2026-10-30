import type { PageProps } from '../shared/types/design'
import GeneratedPage from '../core/GeneratedPage'
import { page } from '../pagesdata/TurmasPage'

export default function TurmasPage(props: PageProps) {
  return <GeneratedPage page={page} {...props} />
}
