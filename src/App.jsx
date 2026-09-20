import React, { useState } from 'react'
import Candidate1 from './components/Candidate1'
import Candidate2 from './components/Candidate2'
import Candidate3 from './components/Candidate3'

const App = () => {
  const [candidate1, setCandidate1] = useState(0)
  const [candidate2, setCandidate2] = useState(0)
  const [candidate3, setCandidate3] = useState(0)

  function reset() {
    setCandidate1(0)
    setCandidate2(0)
    setCandidate3(0)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">

      <h1 className="text-4xl font-bold text-blue-900 mb-10">
        Voting App
      </h1>

      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">

        <div className="flex flex-col gap-4">

          <button
            className="bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition cursor-pointer"
            onClick={() => {
              setCandidate1(candidate1 + 1)
              alert("Vote submitted for Candidate 01")
            }}
          >
            Vote for Candidate 01
          </button>

          <button
            className="bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition cursor-pointer"
            onClick={() => {
              setCandidate2(candidate2 + 1)
              alert("Vote submitted for Candidate 02")
            }}
          >
            Vote for Candidate 02
          </button>

          <button
            className="bg-pink-700 text-white py-3 rounded-lg font-semibold hover:bg-pink-800 transition cursor-pointer"
            onClick={() => {
              setCandidate3(candidate3 + 1)
              alert("Vote submitted for Candidate 03")
            }}
          >
            Vote for Candidate 03
          </button>

        </div>

        <div className="mt-8 space-y-3">

          <Candidate1
            text="Total votes for candidate 01:"
            title={candidate1}
          />

          <Candidate2
            text="Total votes for candidate 02:"
            title={candidate2}
          />

          <Candidate3
            text="Total votes for candidate 03:"
            title={candidate3}
          />

        </div>

        <button
          onClick={reset}
          className="w-full mt-6 bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition cursor-pointer"
        >
          Reset Votes
        </button>

      </div>
    </div>
  )
}

export default App