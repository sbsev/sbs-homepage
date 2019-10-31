import React from 'react'

import { Body, Updated } from './styles'

const PageBody = ({ children, html, updated }) => (
  <Body>
    {children}
    <div dangerouslySetInnerHTML={{ __html: html }} />
    {updated && <Updated>Zuletzt bearbeitet: {updated}</Updated>}
  </Body>
)

export default PageBody
