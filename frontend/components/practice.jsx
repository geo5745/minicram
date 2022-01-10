import React, {useState, useEffect} from 'react';
import {addStyles, EditableMathField} from 'react-mathquill'

addStyles()

const Practice = () => {

    const [questionParts, setQuestionParts] = useState(['']);
    const [latex, setLatex] = useState('\\frac{4}{2}')

    useEffect(()=>{
        if (questionParts[questionParts.length-1].length > 0) {
            let questionArray = Object.assign([],questionParts);
            questionArray.push('')
            setQuestionParts(questionArray);
        }
    },[questionParts])

    const setOneQuestionPart = (idx,val) => {
        let questionArray = Object.assign([],questionParts);
        questionArray[idx] = val;
        setQuestionParts(questionArray);
    }


    // const populateQuestionParts = () => {
    //     let partList;
    //     partList = questionParts.map((part,i)=>{
    //         return (
    //             <TextField
    //                 placeholder = {i===0 ? "type something to start ..." : "click to continue building your question..."}
    //                 setOneQuestionPart = {setOneQuestionPart}
    //                 part = {part}
    //                 key = {i}
    //                 idx = {idx}
    //             />
    //         )
    //     })
    //     return partList;
    // }

    return (
        <div className = "practice-main-container">
            {/* {populateQuestionParts()} */}
            <div>
                <EditableMathField
                    latex={latex}
                    onChange={(mathField) => {
                    setLatex(mathField.latex())
                    }}
                />
                <p>{latex}</p>
             </div>
            {/* <FlexField/> */}
            {/* <EditableSpan/> */}
        </div>
    )
};

const TextField = (props) => {
    const [textContent, setTextContent] = useState(props.part);
    const [textSubstring, setTextSubstring] = useState("");

    const captureSelection = (e) => {
        let textStart = e.target.selectionStart;
        let textEnd = e.target.selectionEnd;
        let chosenText = textContent.substring(textStart,textEnd);
        setTextSubstring(chosenText);
    }

    return (
        <div className="practice-block">  
            hello world
        </div>
    )
}

const FlexField = (props) => {

    const [innerText,setInnerText] = useState("")
    const [textBlock,toggleTextBlock] = useState(false)

    return (
        <div className = "flex-field"
            //onFocus = {()=>toggleTextBlock(true)}
            onClick = {()=>toggleTextBlock(true)}
            onBlur = {()=>toggleTextBlock(false)}>
            {textBlock ? 
                <textarea
                    className = "flex-field-textarea"
                    value = {innerText}
                    onChange = {({target: {value}})=>setInnerText(value)}
                ></textarea>
            :
                <span
                    className = "flex-field-span">
                        {innerText}
                </span>}
        </div>
    )

}


export default Practice;

const EditableSpan = (props) => {
    
    const  [editableContent,setEditableContent] = useState("Edit Here")

    return (
    <div>
        <span
            onChange = {({target: {value}})=>setEditableContent(value)}
        >{editableContent}</span>
    </div>
    )
}