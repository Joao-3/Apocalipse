import type { DesignNode } from '../../shared/types/design'
import { nodeClassName } from '../../shared/utils/classNames'

export default function TableElement({ node, pageId }: { node: DesignNode; pageId: string }) {
  const columns = node.tableColumns?.length ? node.tableColumns : ['Column 1', 'Column 2']
  return <div className={['data-table', nodeClassName(pageId, node)].join(' ')}><table><caption className="sr-only">{node.text || 'Data table'}</caption>{node.tableHeaderVisible !== false && <thead><tr>{columns.map((column, index) => <th scope="col" key={index}>{column}</th>)}</tr></thead>}<tbody>{(node.tableRows ?? []).map((row, rowIndex) => <tr key={rowIndex}>{columns.map((_, columnIndex) => <td key={columnIndex}>{row[columnIndex] ?? ''}</td>)}</tr>)}</tbody></table></div>
}
