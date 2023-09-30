import React from 'react';
import Link from 'next/link'
import profileStyle from './profileStyle.module.css'  ;
import line from './images/line.png';
import {log} from "util";

type Props = {}

export default async function Profile({ }: Props) {
    async function Profile() {}
    return (
        <div className={profileStyle.myImages}>
            <div className={profileStyle.scroll}>
                <div style={{position: 'relative', display: 'flex'}}>
                    <div className={profileStyle.topline}></div>
                    <h1 className={profileStyle.topfont}
                        style={{position: 'absolute', top: '20%', left: '3%', color: 'White'}}>ITAG</h1>
                </div>

                <div className={profileStyle.profile} style={{display:'flex', flexDirection:'column'}}>
                    <div className={profileStyle.circle}>
                    </div>
                    <div className={profileStyle.username}>Username :</div>
                    <div className={profileStyle.email}>Email :</div>
                </div>

                <div className={profileStyle.line} >

                </div>

                <div className={profileStyle.char}>Your character</div>

                <div className={profileStyle.button} style={{marginTop: '10%',marginLeft:'40vw'}}>
                <Link href="/character"><button type={'submit'} style={{marginTop: '5%'}}><a href='#'>create</a></button></Link>
                </div>

            </div>
        </div>
    );
}