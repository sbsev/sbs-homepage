import algoliasearch from 'algoliasearch/lite'
import React, { createRef, useMemo, useState } from 'react'
import { connectStateResults, Index, InstantSearch } from 'react-instantsearch-dom'
import { useOnClickOutside } from 'hooks'
import Hits from './Hits'
import Input from './Input'
import { HitsWrapper, PoweredBy, Root } from './styles'

const Results = connectStateResults(
  ({ searching, searchState: state, searchResults: res }) =>
    (searching && <div>Suche läuft...</div>) ||
    (res && res.nbHits === 0 && (
      <div>Keine Ergebnisse für &apos;{state.query}&apos;</div>
    ))
)

const Stats = connectStateResults(
  ({ searchResults: res }) => res && res.nbHits > 0 && `${res.nbHits} Treffer`
)

export default function Search({ indices, collapse }) {
  const ref = createRef()
  const [query, setQuery] = useState(``)
  const [focus, setFocus] = useState(false)
  const appId = process.env.GATSBY_ALGOLIA_APP_ID
  const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY
  // useMemo prevents the searchClient from being recreated on every render.
  // Avoids unnecessary XHR requests (see https://tinyurl.com/yyj93r2s).
  const searchClient = useMemo(() => algoliasearch(appId, searchKey), [
    appId,
    searchKey,
  ])
  useOnClickOutside(ref, () => setFocus(false))
  return (
    <Root ref={ref}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <Input onFocus={() => setFocus(true)} {...{ collapse, focus }} />
        <HitsWrapper show={query.length > 0 && focus}>
          {indices.map(({ name, title, type }) => (
            <Index key={name} indexName={name}>
              <header>
                <h2>{title}</h2>
                <Stats />
              </header>
              <Results />
              <Hits type={type} onClick={() => setFocus(false)} />
            </Index>
          ))}
          <PoweredBy />
        </HitsWrapper>
      </InstantSearch>
    </Root>
  )
}
