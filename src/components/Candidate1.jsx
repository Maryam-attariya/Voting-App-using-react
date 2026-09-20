import React from 'react'

const Candidate1 = (props) => {
    return (
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 flex justify-between items-center">
            <span className="text-gray-700 font-medium">
                {props.text}
            </span>

            <span className="text-xl font-bold text-purple-700">
                {props.title}
            </span>
        </div>
    )
}

export default Candidate1

