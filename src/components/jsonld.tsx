import type { Graph } from 'schema-dts'

/**
 * Renders a JSON-LD graph. Kept in one component so every page emits the same
 * shape and escaping rules.
 */
export function JsonLd({ graph }: { graph: Graph }) {
  return (
    <script
      type="application/ld+json"
      // `<` is escaped so a stray sequence in content cannot close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }}
    />
  )
}
