import InnerBodyComp from './InnerBodyComp';
import ListGroup from './ListGroup';
import SideHeaderComp from './SideHeaderComp';



function BodyComp(){
    return(<div className="BodyComp">
        <SideHeaderComp/>
        <InnerBodyComp/>
    </div>)
}

export default BodyComp;