import { useState } from 'react';
import axios from 'axios';

const PlayerForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newPlayer = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email
        };

        axios.post('http://localhost:4000/players', newPlayer)
            .then((response) => {
                console.log('Player added successfully:', response.data);
                setFirstName('');
                setLastName('');
                setPhone('');
                setEmail('');
            })
            .catch((error) => {
                console.error('Error adding player:', error);
            });
    };

    return (
        <div className="row">
            <h1 className="center">Add a new player</h1>
            <form onSubmit={handleSubmit} className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="input-field col s6">
                        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <button className="btn waves effect waves-light" type='submit' name='action'>Add Player</button>
            </form>
        </div>
    );
};

export default PlayerForm;
