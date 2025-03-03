import { MouseEvent, useState } from "react";

interface Props{
    items: string[];
    heading: string;
}

function ListGroup({items, heading}: Props){

    const [selectedIndex, setSelectedIndex] = useState(-1);
    


    const message = items.length === 0 ? <p>No items found!</p> : null;
    const messagebetter = items.length === 0 && <p>No items found!</p>;

    const handleClick = (event: MouseEvent) => {
        console.log(event);
    };

    return(
        <>
            <h1>{heading}</h1>
            <ul className="list-group">
                {messagebetter}
                {items.map((item, index) =>
                <li key={index}
                    className={selectedIndex === index ? 'list-item active' : 'list-item inactive'}
                    onClick={() => {setSelectedIndex(index)}}>
                        {item}
                </li>)}
            </ul>
            <h4>Total queried items: {items.length}</h4>
        </>);
}

export default ListGroup;