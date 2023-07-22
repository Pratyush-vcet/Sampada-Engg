import React, { useState } from 'react';
import './Values.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from './accordion';

const Values = () => {
    const [expandedItemIndex, setExpandedItemIndex] = useState(0);

    const handleAccordionChange = (index) => {
        setExpandedItemIndex(index);
    };

    return (

        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left side */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./worker.jpg" alt="" />
                    </div>
                </div>
                {/* right side */}
                <div className="flexColStarts v-right">
                    <h2 className="orangeTexts">About Us</h2>
                    <h2 className="primaryText">Sampada Engineering Works</h2>
                    
                    {/* ... (rest of the code remains the same) */}
                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[expandedItemIndex]}
                    >
                        {data.map((item, i) => (
                            <AccordionItem className={`accordionItem`} key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className="flexCenters accordianButton" onClick={() => handleAccordionChange(i)}>
                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className="primaryTexts">{item.heading}</span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20} />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Values;
