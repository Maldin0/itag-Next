"use client"
import React, { useState } from 'react';
import CreateChaStyle from './CreateChaStyle.module.css'  ;
import LoginStyle from '../login/LoginStyle.module.css'
import line from './images/line.png';
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

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );
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

                        <div className={LoginStyle.inputBox} style={{paddingTop:'10%',alignSelf:'flex-start',paddingLeft:'20%'}}>
                            <input placeholder='Name' type='input' className={CreateChaStyle.font}></input>
                        </div>
        
                        <Dropdown className={CreateChaStyle.wrapper} style={{paddingTop:'1%',alignSelf:'flex-start',paddingLeft:'20%'}}>
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
                        

                        <div className={CreateChaStyle.wrapper} style={{paddingTop:'1%',alignSelf:'flex-start',paddingLeft:'20%'}}>
                            <div className={CreateChaStyle.selectbtn}>
                                <span>Classes</span>
                                
                            </div>
                            <div className={CreateChaStyle.content}>
                                <ul className={CreateChaStyle.options}>
                                    <li>Barbarian</li>
                                    <li>Paladin</li>
                                    <li>Bard</li>
                                    <li>Mage</li>
                                    <li>Rogue</li>
                                </ul>
                            </div>
                        </div>

                        <div className={LoginStyle.submit} style={{marginTop:'10%'}} >
                            <button type={'submit'} ><a href='#' >Create Character</a></button>
                            
                        </div>

                    </div>
                   

                    

                </div>
            </div>
        </div>
        
    );
    
}
