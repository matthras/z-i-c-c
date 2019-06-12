import React from 'react'
import { render } from 'react-testing-library'

// Tests that each component renders as expected with pre-filled information

// Test for Ticket - given a single dummy ticket data, renders the component as expected.
import Ticket from '../pages/components/Ticket'

describe('Ticket snapshot with example ticket data', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Ticket
        id="36"
        status="open"
        priority="high"
        subject="this is a test ticket"
        description="of course this is fake"
        created_at=""
        recipient="you!"
        url="dummy.url" 
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})


// Test for TicketList - given a list of dummy ticket data, correctly calculates pagination factors (e.g. correct number of tickets, and correct number of pages)