"use client"
import React, { useState } from 'react';
import CreateChaStyle from './CreateChaStyle.module.css'  ;
import LoginStyle from '../login/LoginStyle.module.css';
import axios from "axios";


import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
    Button
  } from "@nextui-org/react";


type Props = {}

interface Skill {
    name: string;
    details?: string;
  }
  
  interface BagItem {
    name: string;
    detail: string;
  }
  
  interface CharacterStatus {
    dex: number;
    wis: number;
    int: number;
    str: number;
    cha: number;
    con: number;
    hp: number;
  }
  
  interface Trait {
    name: string;
    detail: string;
  }
  
  interface ClassFeature {
    name: string;
    detail: string;
  }
  
  interface Spell {
    name: string;
    interval_time: number;
    duration: number;
    range: number;
    details: string;
  }
  
  interface Race {
    traits: Trait[];
    db: any;
    name: string;
  }
  
  interface CharacterClass {
    features: ClassFeature[];
    spell: Spell[];
    db: any;
    name: string;
  }
  
  interface Character {
    skills: Skill[];
    bag: BagItem[];
    status: CharacterStatus;
    db: any;
    user_id: number;
    _char_id: number;
    name: string;
    gold: number;
    background: string;
    active: boolean;
    race: Race;
    class: CharacterClass;
  }

  export interface User {
    user: {
      _char: Character[];
      db: any;
      _username: string;
      _password: string;
      _email: string;
      _user_id: number;
    };
  }


export default function createcharacter({ }: Props) {
    const [characterName, setCharacterName] = useState("");
    const [selectedRace, setSelectedRace] = useState("");
    const [selectedClass, setSelectedClass] = useState("");
 
  




    const handleCreate = async () => {
        try {
            const payload = {
                race: selectedRace,
                class: selectedClass,
                name: characterName,
            };
    
            const response = await axios.post("http://localhost:8080/users/characters/create", payload);
    
            if (response.data && response.data.success) {
                alert("Character created successfully!");
                // อัปเดต UI หรือ redirect ถ้าต้องการ
            } else {
                alert("Error creating character.");
            }
        } catch (error) {
            console.error("There was an error creating the character:", error);
            alert("Error creating character.");
        }
    };
    
    const [randomNumbers, setRandomNumbers] = useState<number[]>([]);


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
    const generateRandomNumbers = () => {
        let nums: number[] = [];
        let sum = 0;
    
        while (true) {
            sum = 0;
    
            for (let i = 0; i < 5; i++) {
                nums[i] = Math.floor(Math.random() * 13) - 6; // สุ่มตัวเลขระหว่าง -6 ถึง 6
                sum += nums[i];
            }
    
            // คำนวณตัวเลขที่ 6
            nums[5] = 12 - sum;
    
            // ตรวจสอบว่าตัวเลขที่ 6 อยู่ระหว่าง -6 ถึง 6 หรือไม่
            if (nums[5] >= -6 && nums[5] <= 6) break;
        }
    
        setRandomNumbers(nums);
    };
    return (
        <div className={CreateChaStyle.scroll}>
            <div style={{width:'100%',height:'100%', backgroundSize: 'cover',backgroundRepeat: 'repeat',backgroundPosition: 'center'}}>
                
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

                            <div style={{paddingTop:'40px'}}></div>
                            <input placeholder='Name' type='input' className={CreateChaStyle.inputBox} value={characterName} onChange={(e) => setCharacterName(e.target.value)}></input>
                            
                            
                            <div style={{paddingTop:'30px'}}>
                                <Dropdown className={CreateChaStyle.wrapper} style={{paddingTop:'1%',alignSelf:'flex-start',paddingLeft:'25%'}}>
                                    <DropdownTrigger className={CreateChaStyle.selectbtn}>
                                        <Button style={{whiteSpace:'nowrap'}}>
                                             {selectedRace || "Choose a Race"}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu className={CreateChaStyle.content}>
                                    {
                                        Object.keys(allRace).map(race => (
                                            <DropdownItem 
                                                className={CreateChaStyle.options} 
                                                key={race} 
                                                onClick={() => setSelectedRace(race)}>
                                                {race}
                                            </DropdownItem>
                                        ))
                                    }
                                    </DropdownMenu>
                                </Dropdown>
                            </div>

                            <div style={{paddingTop:'30px'}}>
                                <Dropdown className={CreateChaStyle.wrapper} style={{paddingTop:'1%',alignSelf:'flex-start',paddingLeft:'25%'}}>
                                    <DropdownTrigger className={CreateChaStyle.selectbtn}>
                                        <Button style={{whiteSpace:'nowrap'}}>
                                            {selectedClass || "Choose a class"}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu className={CreateChaStyle.content}>
                                    {
                                        Object.keys(allClass).map(className => ( 
                                            <DropdownItem 
                                                className={CreateChaStyle.options} 
                                                key={className} 
                                                onClick={() => setSelectedClass(className)}> 
                                                {className} 
                                            </DropdownItem>
                                        ))
                                    }
                                    </DropdownMenu>
                                </Dropdown>
                            </div>

                            <div style={{paddingTop:'20px'}}></div>
                            <button  onClick={generateRandomNumbers} className={CreateChaStyle.inputBox} style={{}}><p>Random Stats: {randomNumbers.join(", ")}</p></button>
                            <p style={{paddingTop:'10px'}}>
                                dex: {randomNumbers[0]},
                                &nbsp;wis: {randomNumbers[1]},
                                &nbsp;int: {randomNumbers[2]},
                                &nbsp;str: {randomNumbers[3]},
                                &nbsp;cha: {randomNumbers[4]},
                                &nbsp;con: {randomNumbers[5]}
                            </p>
                            
                            <div className={CreateChaStyle.font} style={{paddingTop:'30px'}}>
                                Backstory
                               
                                <p style={{paddingTop:'5px'}}>
                                     
                                    <textarea rows={5} cols={50}></textarea>
                                </p>
                            </div>
                            <div className={LoginStyle.submit} style={{marginTop:'2%'}} >
                                <button type={'submit'} ><a href='#' >Create Character</a></button>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </div>
        
    );
    
}
