import DatabaseComp from './DatabaseComp';
import ListGroup from './ListGroup';

const items = [
    'giovanni',
    'is',
    'a',
    'sexy',
    'beast',
    'Wow'
]

function InnerBodyComp(){
    return (
        <div className="InnerBodyComp">
            <DatabaseComp/>
        </div>
    );
}

export default InnerBodyComp;