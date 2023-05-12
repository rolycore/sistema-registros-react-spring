import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';

const Home =()=>{
    const [dropdownItem, setDropdownItem] = useState(null);
    const dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];

    return(
    <><h1>Informacion general del Cliente</h1>
    <div className="card p-fluid">
            <h5>Registro de Clientes</h5>
            <div className="field">
                <label htmlFor="name1">Name</label>
                <InputText id="name1" type="text" placeholder='Name'/>
            </div>
            <div className="field">
                <label htmlFor="email1">Email</label>
                <InputText id="email1" type="text" placeholder='Email' />
            </div>
            <div className="field">
                <label htmlFor="age1">Age</label>
                <InputText id="age1" type="text" placeholder='Age' />
            </div>
            <div className="field col-12 md:col-3">
                            <label htmlFor="state">State</label>
                            <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                        </div>
                        <div><Button label="Save" rounded /></div>
                        
        </div></>
);
};
export default Home;


