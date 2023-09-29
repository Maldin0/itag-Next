
import React, { useState } from 'react';
import CreateChaStyle from './CreateChaStyle.module.css'  ;
import LoginStyle from '../login/LoginStyle.module.css'
import line from './images/line.png';
import {log} from "util";


type Props = {}



export default async function createcharacter({ }: Props) {

  async function createcharacter() {

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

                        <div className={LoginStyle.inputBox} style={{paddingTop:'10%',alignSelf:'flex-start',paddingLeft:'20%'}}>
                            <input placeholder='Name' type='input' className={CreateChaStyle.font}></input>
                        </div>

                        <div style={{paddingTop:'1%',alignSelf:'flex-start',paddingLeft:'20%'}}>
                            <p>
                                <select className={CreateChaStyle.font}>
                                    <option value="" disabled hidden>Race</option>
                                    <option value="Option1">Option 1</option>
                                    <option value="Option2">Option 2</option>
                                    <option value="Option3">Option 3</option>
                                    {/* เพิ่ม options เพิ่มเติมตามต้องการ */}
                                </select>
                            </p>
                        </div>
                       

                        <div style={{alignSelf:'flex-start',paddingLeft:'20%'}}>
                            <p>
                                <select className={CreateChaStyle.font} >
                                    <option value="" disabled hidden>Class</option>
                                    <option value="Option1">Option 1</option>
                                    <option value="Option2">Option 2</option>
                                    <option value="Option3">Option 3</option>
                                    {/* เพิ่ม options เพิ่มเติมตามต้องการ */}
                                </select>
                            </p>                         
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
