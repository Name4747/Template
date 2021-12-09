import React, {useState, useEffect} from 'react'

const Answers = () => {

    const [answerList,setAnswerList] = useState([
        {
            id: 1,
            content: "bmw",
            score: 0,
            used: false
        },
        {
            id: 2,
            content: "ford",
            score: 0,
            used: false
        },
        {
            id: 3,
            content: "gm",
            score: 0,
            used: false
        },
        {   
            id: 4,
            content: "mercedes",
            score: 0,
            used: false
        },
        {
            id: 5,
            content: "honda",
            score: 0,
            used: false
        },
        {
            id: 6,
            content: "tesla",
            score: 0,
            used: false
        },
        {
            id: 7,
            content: "toyota",
            score: 0,
            used: false
        },
        {
            id: 8,
            content: "crysler",
            score: 0,
            used: false
        },
        {
            id: 9,
            content: "audi",
            score: 0,
            used: false
        },{
            id: 10,
            content: "nissan",
            score: 0,
            used: false
        },{
            id: 11,
            content: "cadillac",
            score: 0,
            used: false
        },{
            id: 12,
            content: "aston martin",
            score: 0,
            used: false
        },{
            id: 13,
            content: "ferrari",
            score: 0,
            used: false
        },{
            id: 14,
            content: "porsche",
            score: 0,
            used: false
        },
    ])

    /*useEffect(() => {
        fetch('/things')
            .then(res => res.json())
            .then(data => {
                setAnswerList(data)
            })
    },[])*/

    const [a1,setA1] = useState(answerList[Math.floor(Math.random()*answerList.length)])

    const [a2,setA2] = useState()
    
    for (var i = 0; i < 100; i++) {
        const randomBase = answerList[Math.floor(Math.random()*answerList.length)]
        if(randomBase != a1) {
            setA2(randomBase)
            break;
        }
    }

    function getNextAnswer(answer) {

        if(answer == a1) {
            answerList[a2.id-1].used = true
            console.log(a2)
            var isA2Set = false;
            for (var i = 0; i < 100; i++) {
                const randomThing = answerList[Math.floor(Math.random()*answerList.length)]
                if(randomThing.used == false && randomThing != a1) {
                    setA2(randomThing)
                    isA2Set = true
                    break;
                }
            }
            if(!isA2Set) {
                console.log("DONE!")
            }
        }
        else if(answer == a2) {
            answerList[a1.id-1].used = true
            console.log(a1)
            var isA1Set = false;
            for (var j = 0; j < 100; j++) {
                const randomThing = answerList[Math.floor(Math.random()*answerList.length)]
                if(randomThing.used == false && randomThing != a2) {
                    setA1(randomThing)
                    isA1Set = true
                    break;
                }
                
            }
            if(!isA1Set) {
                console.log("DONE!")
            }
        }
    }

    return (
        <>
        <div onClick={() => {getNextAnswer(a1)}} className="answers" id="a1">
          <span>{a1.content}</span>
        </div>

        <div onClick={() => {getNextAnswer(a2)}} className="answers" id="a2">
          <span>{a2.content}</span>
        </div>
        </>
    )

}

export default Answers
