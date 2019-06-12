/* eslint-env jest */

import React from 'react'
import { render } from 'react-testing-library'
import Index from '../pages/index.js'

// Series of tests that account for all the different possible responses from calling the API e.g. HTTP 200, 401, etc. and ensures the component renders as indicated.
// Note: None of these tests are working and I ran out of time :(
describe('API HTTP Response: 200', () => {
  it('renders title "ZenDesk Ticket Data"', () => {
    const { getByText } = render(<Index errorCode='200' />);

    expect(getByText('ZenDesk Ticket Data')).toBeInTheDocument()
  })
})

describe('API HTTP Response: >200', () => {
  it('match Error component snapshot"', () => {
    const { asFragment } = render(
      <Error statusCode={this.props.errorCode} />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})