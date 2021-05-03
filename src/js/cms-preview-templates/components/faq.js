import React from "react"
import ReactMarkdown from "react-markdown"

export default ({question, answer}) =>
    <div className="faq faq-is-open">
        <button className="faq--questionBox">
            <div className="faq--question">{question}</div>
            <div className="faq--plus">+</div>
        </button>
        <div className="faq--answer">
            <ReactMarkdown>{answer}</ReactMarkdown>
        </div>
    </div>
