import React from 'react'

const Answers = () => {
    var a1 = {
        content: "bmw",
        score: 0,
        used: false
    }
    var a2 = {
        content: "ford",
        score: 0,
        used: false
    }

    const getNextAnswer = () => {
        a1.content = "fff";
        console.log(a1.content)
    }

    return (
        <>
        <div onClick={getNextAnswer} className="answers" id="a1">
          <span>{a1.content}</span>
        </div>

        <div onClick={getNextAnswer} className="answers" id="a2">
          <span>{a2.content}</span>
        </div>
        </>
    )

}

export default Answers
