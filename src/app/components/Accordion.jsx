// import styles from './Accordion.module.css';

const Accordion = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="accordion">
            <button className="accordionButton" onClick={onClick}>
                {title} <span>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && <div className="accordionContent">{content}</div>}
        </div>
    );
};

export default Accordion;
