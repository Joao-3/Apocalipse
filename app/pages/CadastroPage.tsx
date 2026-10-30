import type { PageProps } from '../shared/types/design'
import GeneratedPage from '../core/GeneratedPage'
import { page } from '../pagesdata/CadastroPage'

export default function CadastroPage(props: PageProps) {
  return <GeneratedPage page={page} {...props} />
}
