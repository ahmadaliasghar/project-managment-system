
const WhiteAccordion = ({ title, content, isOpen, onClick }) => {
    return (
        <div className={isOpen ? 'bordercolor' : "whiteaccordion"} >
            <button className="whiteaccordionButton" onClick={onClick}>
                {title} 
            </button>
            {isOpen && <div className="whiteaccordionContent px-5">{content}</div>}
        </div>
    );
};

export default WhiteAccordion;
