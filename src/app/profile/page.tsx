"use client"
import React from 'react';
import Link from 'next/link'
import axios from "axios";
import profileStyle from './profileStyle.module.css'  ;
import line from './images/line.png';
import {log} from "util";

type Props = {}


export default function Profile({ }: Props) {
    
    // const [user, setUser] = React.useState<User | null>(null);
    // const [email, setEmail] = React.useState<User | null>(null);
    // React.useEffect(() => {
    //     async function fetchUser() {
    //       try {
    //         const res = await axios.get("http://localhost:8080/users");
    //         setUser(res.data);
    //         setEmail(res.data);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     }
    //     fetchUser();
    //   }, []);
      
    return (
        <div className={profileStyle.myImages}>
            <div className={profileStyle.scroll}>
                <div style={{position: 'relative', display: 'flex'}}>
                    <div className={profileStyle.topline}></div>
                    <h1 className={profileStyle.topfont}
                        style={{position: 'absolute', top: '20%', left: '3%', color: 'White'}}>ITAG</h1>
                </div>

                <div className={profileStyle.profile} style={{display:'inline-flex'}}>
                    <div className={profileStyle.username}style={{display:'inline-block'}}>Username : </div>
                    <div className={profileStyle.email} style={{display:'inline-block'}}>Email :</div>
                </div>

                <div className={profileStyle.line} >

                </div>

                <div className={profileStyle.char}>Your character</div>

                <Link href="/character"><div className={profileStyle.button} style={{marginTop: '10%',marginLeft:'40vw',position:'absolute'}}>
                <button type={'submit'} style={{marginTop: '5%'}}>create</button>
                </div></Link>

            </div>
        </div>
    );
}