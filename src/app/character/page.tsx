"use client"
import React, { useState } from 'react';
import CreateChaStyle from './CreateChaStyle.module.css'  ;
import LoginStyle from '../login/LoginStyle.module.css'
//import line from './images/line.png';
import {log} from "util";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
    Button
  } from "@nextui-org/react";


type Props = {}



export default function createcharacter({ }: Props) {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Races"]));
    const [selectedKey, setSelectedKey] = React.useState(new Set(["Class"]));
    const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
    const total = randomNumbers.reduce((a, b) => a + b, 0);

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );
    const selectedValues = React.useMemo(
        () => Array.from(selectedKey).join(", ").replaceAll("_", " "),
        [selectedKey]
    );

    const allRace = {
        "Human":1,
        "Elf":2,
        "Dwarf":3,
        "Orc":4,
        "Gnome":5
    }

    const allClass = {
        "Barbarian":1,
        "Paladin":2,
        "Bard":3,
        "Mage":4,
        "Rogue":5
    }
    
    const generateRandomNumber = () => {
        let potentialRandom = Math.floor(Math.random() * (12 - randomNumbers.reduce((a, b) => a + b, 0) + 1));
        
        if (randomNumbers.reduce((a, b) => a + b, 0) + potentialRandom <= 12) {
            setRandomNumbers(prevNumbers => [...prevNumbers, potentialRandom]);
        }
    }
    return (
        
        <div style={{position:'fixed',width:'100%',height:'100%', backgroundSize: 'cover',backgroundRepeat: 'repeat',backgroundPosition: 'center'}}>
            <div className={CreateChaStyle.scroll}>
                <div style={{position: 'relative', display: 'flex'}}>
                    <div className={CreateChaStyle.topline}></div>
                    <h1 className={CreateChaStyle.topfont}
                        style={{position: 'absolute', top: '20%', left: '3%', color: 'White'}}>ITAG</h1>
                </div>

                <div className={CreateChaStyle.box}  style={{display:'flex', flexDirection:'column'}}>
                    <div className={CreateChaStyle.CreateCha} style={{display:'flex', flexDirection:'column'}}>
                        
                    </div>
                    <div className={CreateChaStyle.box2}>
                        <div style={{alignSelf:'flex-start',paddingLeft:'15%',paddingTop:'5%'}}>
                            <h1 className={CreateChaStyle.font}>Customize</h1>
                        </div>
                        <div className={CreateChaStyle.line} ></div>

                        <div style={{paddingTop:'50px'}}></div>
                        <input placeholder='Name' type='input' className={CreateChaStyle.inputBox}></input>
                        
                        <div style={{paddingTop:'30px'}}>
                            <Dropdown className={CreateChaStyle.wrapper} style={{paddingTop:'1%',alignSelf:'flex-start',paddingLeft:'25%'}}>
                                <DropdownTrigger className={CreateChaStyle.selectbtn}>
                                    <Button 
                                    variant="bordered" 
                                    >
                                        {selectedValue}
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu className={CreateChaStyle.content} aria-label="Static Actions"
                                    variant="flat"
                                    disallowEmptySelection={true}
                                    selectionMode="single"
                                    selectedKeys={selectedKeys}
                                    onSelectionChange={setSelectedKeys}
                                >
                                    <DropdownItem className={CreateChaStyle.options} key="Human">Human</DropdownItem>
                                    <DropdownItem className={CreateChaStyle.options} key="Elf">Elf</DropdownItem>
                                    <DropdownItem className={CreateChaStyle.options}  key="Dwarf">Dwarf</DropdownItem>
                                    <DropdownItem className={CreateChaStyle.options} key="Orc">Orc</DropdownItem>
                                    <DropdownItem className={CreateChaStyle.options} key="Gnome">Gnome</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>

                        <div style={{paddingTop:'30px'}}>
                            <Dropdown className={CreateChaStyle.wrapper} style={{paddingTop:'1%',alignSelf:'flex-start',paddingLeft:'25%'}}>
                                <DropdownTrigger className={CreateChaStyle.selectbtn}>
                                    <Button variant="bordered">
                                        {selectedValues}
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu className={CreateChaStyle.content} 
                                            variant="flat" disallowEmptySelection={true}
                                            selectionMode="single"
                                            selectedKeys={selectedKey}
                                            onSelectionChange={setSelectedKey}
                                >
                                        <DropdownItem className={CreateChaStyle.options} key="Barbarian">Barbarian</DropdownItem>
                                        <DropdownItem className={CreateChaStyle.options} key="Paladin">Paladin</DropdownItem>
                                        <DropdownItem className={CreateChaStyle.options} key="Bard">Bard</DropdownItem>
                                        <DropdownItem className={CreateChaStyle.options} key="Mage">Mage</DropdownItem>
                                        <DropdownItem className={CreateChaStyle.options} key="Rogue">Rogue</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>

                        <div style={{paddingTop:'20px'}}></div>
                        <button  onClick={generateRandomNumber} disabled={total >= 12} className={CreateChaStyle.inputBox} style={{}}><p>Random Stats: {randomNumbers.join(", ")}</p></button>

                        <div className={LoginStyle.submit} style={{marginTop:'10%'}} >
                            <button type={'submit'} ><a href='#' >Create Character</a></button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
    
}
