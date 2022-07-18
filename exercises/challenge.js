/*
=============== JS Finite State Machine Challenge ==================
GOAL: Read each question and write code to complete each task
      given. Do not change starter code or function names.
      
TEST: To test run the commands `npm run test` in your terminal
      at the root of this directory.(double-base-palindrome-challenge)
      Don't worry about capitalization.
*/

/*
Question 1

Implement a SubwayGate constructor function that represents a Finite-State Machine. Each instance should have its own immutable _state property that starts as 'closed'. Each instance of SubwayGate should have access to five methods: state, tapCard, insertTicket, exit, and walkThrough.

Invoking the state method should return the value of _state.

The gate's _state should transition to 'open' only under three circumstances:

- a charlieCard with a monthlyValue of true is tapped on the gate
- a charlieTicket with a high enough value (2.25) is inserted into the gate
- a person is exiting the station

The gate's _state should only transition to 'closed' when the walkThrough method is invoked.

While the gate's _state is 'open', tapping a card or inserting a ticket should not transition the state to 'closed', also no further value should be deducted from the ticket.

The tests will handle the creation of the charlieCard and charlieTicket which will look like so:

const charlieCard = {
  monthlyValue: Boolean
}

const charlieTicket = {
  value: Number
}

module.exports = {
  charlieCard,
  charlieTicket
}

You must use them as parameters to your tapCard and insertTicket methods.
*/
const SubwayGate = function () {
  Object.defineProperty(this, '_state', {
    value: 'closed',
    configurable: true
  })

  Object.defineProperty(SubwayGate.prototype, 'state', {
    enumerable: true,
    value: function () {
      return this._state
    }
  })
}

SubwayGate.prototype.exit = function () {
  Object.defineProperty(this, '_state', {
    value: 'open'
  })
}

SubwayGate.prototype.walkThrough = function () {
  if (this.state() === 'open') {
    Object.defineProperty(this, '_state', {
      value: 'closed'
    })
    return true
  }
  return false
}

SubwayGate.prototype.tapCard = function (charlieCard) {
  if (charlieCard.monthlyValue) {
    Object.defineProperty(this, '_state', {
      value: 'open'
    })
    return true
  }
  return false
}

SubwayGate.prototype.insertTicket = function (charlieTicket) {
  if (this.state() === 'closed') {
    if (charlieTicket.value >= 2.25) {
      Object.defineProperty(this, '_state', {
        value: 'open'
      })
      charlieTicket.value -= 2.25
      return true
    }
    return false
  }
}


// DO NOT MODIFY!!!
module.exports = {
	SubwayGate,
}