import axios from "axios";
import RegisStyle from './RegisStyle.module.css'  ;
import line from './images/line.png';
import LoginStyle from "../login/LoginStyle.module.css";
import Link from 'next/link'

type Props = {}

export default async function Regis({ }: Props) {
    async function Regis() {}
    return (

        <div className={RegisStyle.myImages}>
            <div className={RegisStyle.scroll}>
                <div style={{position: 'relative', display: 'flex'}}>
                    <div className={LoginStyle.topline}></div>
                    <h1 className={RegisStyle.topfont} style={{ position: 'absolute', top: '20%', left: '3%', color: 'white' }}>
                        <Link href="/" style={{ textDecoration: 'none', color: 'white' }} className={RegisStyle.topfont}>ITAG</Link>
                    </h1>
                </div>

                <div className={RegisStyle.box} style={{display:'flex', flexDirection:'column'}}>

                    <div className={RegisStyle.font}>
                        <h1>Sign up</h1>
                    </div>

                    <div className={RegisStyle.line} style={{paddingTop:'0%'}} ></div>

                   
                    <input placeholder='E-mail' type='input' className={RegisStyle.inputBox}></input>
                    
                    <p>&nbsp;</p>
                    
                    <input placeholder='Username' type='input' className={RegisStyle.inputBox}></input>
                    
                    <p>&nbsp;</p>

                   
                    <input placeholder='Password' type='input' className={RegisStyle.inputBox}></input>
                    
                    <p>&nbsp;</p>
                    <div className={LoginStyle.submit} >
                        <button type={'submit'}><a href='#' >Next</a></button>
                    </div>

                </div>

            </div>
        </div>

    );
}

