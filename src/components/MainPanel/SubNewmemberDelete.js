import React from 'react';

const SubNewmemberDelete = () => {
    const [members, setNewMembers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/members')
            .then(res => res.json())
            .then(data => setNewMembers(data));
    }, []);
    return (

        <div>

        </div>
    );
};

export default SubNewmemberDelete;