
import RegisStyle from './RegisStyle.module.css'  ;
import line from './images/line.png';
import LoginStyle from "../login/LoginStyle.module.css";
import Link from 'next/link'

function Regis() {
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

                    <div className={RegisStyle.inputBox} style={{paddingTop:'1%'}}>
                        <input placeholder='E-mail' type='input' className={RegisStyle.font}></input>
                    </div>
                    <p>&nbsp;</p>
                    <div className={RegisStyle.inputBox} style={{paddingTop:'1%'}}>
                        <input placeholder='Username' type='input' className={RegisStyle.font}></input>
                    </div>
                    <p>&nbsp;</p>

                    <div className={RegisStyle.inputBox} style={{paddingTop: '1%' }}>
                        <input placeholder='Password' type='input' className={RegisStyle.font}></input>
                    </div>
                    <p>&nbsp;</p>
                    <div className={RegisStyle.submit} style={{ marginTop:'-4%'}}>
                        <button type={'submit'}><a href='#' >Next</a></button>
                    </div>

                </div>

            </div>
        </div>

    );
}

export default Regis;
