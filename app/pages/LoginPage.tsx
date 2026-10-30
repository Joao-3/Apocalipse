import type { PageProps } from '../shared/types/design'
import GeneratedPage from '../core/GeneratedPage'
import { page } from '../pagesdata/LoginPage'

export default function LoginPage(props: PageProps) {
  return <GeneratedPage page={page} {...props} />
}
