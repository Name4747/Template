import React, {useState} from 'react'

const Answers = () => {
    
    var a2 = {
        content: "ford",
        score: 0,
        used: false
    }

    const [a1,setA1] = useState(
        {
            content: "bmw",
            score: 0,
            used: false
        }
    )

    const getNextAnswer = () => {
        const newAnswer = {
            content: "fff",
            score: 0,
            used: false
        }
        setA1(newAnswer)
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
