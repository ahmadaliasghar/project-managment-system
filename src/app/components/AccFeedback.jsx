// import styles from './Accordion.module.css';

const AccFeedback = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="feedaccordion">
            <button className="feedaccordionButton" onClick={onClick}>
                {title} <span>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && <div className="feedaccordionContent">{content}</div>}
        </div>
    );
};

export default AccFeedback;
