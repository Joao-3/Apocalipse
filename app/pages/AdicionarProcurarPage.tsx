import type { PageProps } from '../shared/types/design'
import GeneratedPage from '../core/GeneratedPage'
import { page } from '../pagesdata/AdicionarProcurarPage'

export default function AdicionarProcurarPage(props: PageProps) {
  return <GeneratedPage page={page} {...props} />
}
