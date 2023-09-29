"use server"

import Link from 'next/link'
import Homestyle from './HomeStyle.module.css';
// import featured01 from '/images/featured01.png';
// import featured02 from '/images/featured02.png';
// import featured03 from '/images/featured03.png';
// import featured04 from '/images/featured04.png';
// import featured05 from '/images/featured05.png';
// import user from '/images/user.png';
// import bell from '/friends_image/bell.png';
// import boss from '/friends_image/boss.png';
// import cho from '/friends_image/cho.png';
// import gong from '/friends_image/gong.png';
// import mew from '/friends_image/mew.png';
// import pupha from '/friends_image/pupha.png';
// import email from '/images/email.png';
import React from 'react'
import Image from 'next/image'

type Props = {}

export default async function Home({}: Props) {
  return (
    <div className={Homestyle.scroll}> {/*ปรับให้หน้า Home มี scroll bar ให้ทำโค้ดภายใน div นี้*/}


            <div className={Homestyle.villageImageOne}> {/*ใส่รูป*/}


                <div className={Homestyle.headerMenu}>
                    <div style={{paddingTop: '2%'}}>
                        <div style={{display: 'inline-block'}}><Link href="/login">Login</Link></div>
                        <div style={{display: 'inline-block'}}><Link href="/regis">Sign Up</Link></div>
                        <div style={{display: 'inline-block', transform: 'translateY(20%) translateX(-30%)'}}><a
                            href="#"><Image src={ '/images/user.png' } alt='user image'></Image></a></div>
                    </div>
                </div>

                <div className={Homestyle.flexContainer}>

                    <div className={Homestyle.flexitemleft}>
                        <h1 className={Homestyle.mainfont} style={{textAlign: 'center'}}>
                            IT<br/>
                            ADVENTURER<br/>
                            GUILD
                        </h1>
                    </div>


                    <div className={Homestyle.flexitemright}>
                        <h1 className={Homestyle.mainfont} style={{whiteSpace: 'nowrap',}}>
                            Roll your Dice
                        </h1>
                        <Image src={'/images/RollNowBorder.png'} style={{marginLeft: '15%', position: 'relative'}} alt='roll now image'></Image>
                        <h1 className={Homestyle.mainfont}
                            style={{marginLeft: '22%', transform: 'translateY(-200%)', fontSize: '4rem', color: '#F6AA17', position: 'relative'}}>
                            NOW
                        </h1>
                    </div>
                </div>
            </div>

            <p>&nbsp;</p>


            <p>
                <div className={Homestyle.flexContainer}>
                    <div><h1 className={Homestyle.myfont}
                             style={{color: 'white', paddingLeft: '39.6vw', display: 'flex', flexWrap: 'nowrap'}}>F e a
                        t u r e d&nbsp; &nbsp; W e b s i t e</h1></div>
                </div>
            </p>

            <p>

                <div className={Homestyle.flexColumn} style={{display: 'inline-block'}}>
                    <div><Image src={'/images/featured01.png'} style={{paddingLeft: '15.5vw'}}
                              alt={"Design Character with your head"}></Image></div>
                    <div className={Homestyle.myfont} style={{paddingLeft: '15.5vw', color: 'white'}}>Design character
                        with your hand
                    </div>
                </div>
                <div className={Homestyle.flexColumn} style={{display: 'inline-block'}}>
                    <div><Image src={'/images/featured02.png'} style={{paddingLeft: '15.5vw'}}
                              alt={"Design Character with your head"}></Image></div>
                    <div className={Homestyle.myfont} style={{paddingLeft: '15.5vw', color: 'white'}}>Create your
                        journey
                    </div>
                </div>

                <div className={Homestyle.flexColumn} style={{display: 'inline-block'}}>
                    <div><Image src={'/images/featured03.png'} style={{paddingLeft: '15.5vw'}}
                              alt={"Design Character with your head"}></Image></div>
                    <div className={Homestyle.myfont} style={{paddingLeft: '15.5vw', color: 'white'}}>Doing or Create
                        quest
                    </div>
                </div>
            </p>
            <p>
                <div className={Homestyle.flexColumn} style={{display: 'inline-block'}}>
                    <div><Image src={'/images/featured04.png'} style={{paddingLeft: '30vw'}}
                              alt={"Design Character with your head"}></Image></div>
                    <div className={Homestyle.myfont} style={{paddingLeft: '29vw', color: 'white'}}>Role play with
                        another people
                    </div>
                </div>

                <div className={Homestyle.flexColumn} style={{display: 'inline-block'}}>
                    <div><Image src={'/images/featured05.png'} style={{paddingLeft: '15.5vw'}}
                              alt={"Design Character with your head"}></Image></div>
                    <div className={Homestyle.myfont} style={{paddingLeft: '16vw', color: 'white'}}>Roll your destiny
                        dice!!
                    </div>
                </div>
            </p>

            <div className={Homestyle.villageImageTwo}>
                <p className={Homestyle.myfont}
                   style={{color: 'white', fontSize: '3rem', paddingLeft: '39.2vw', transform: 'translateY(50vh)'}}>Start
                    your journey</p>
            </div>


            <p>&nbsp;</p>

            <p style={{paddingLeft: '42vw'}}>
                <h1 className={Homestyle.myfont} style={{color: 'white', fontSize: '3rem'}}> Hall of Fame</h1>
            </p>

            <p>&nbsp;</p>

            <div className={Homestyle.villageImageThree}>
                <p>
                    <div className={Homestyle.flexContainer} style={{paddingLeft: '25%', paddingTop: '5%'}}>
                        <div style={{display: 'inline-block'}}><Image src={'/friends_image/cho.png'} alt = 'cho'></Image></div>
                        <div
                            style={{display: 'inline-block', marginLeft: '17%', marginTop: '3%', position: 'absolute'}}>
                            <h1 className={Homestyle.mainfont}
                                style={{textAlign: 'center', color: 'white'}}>65070051<br></br>Guild master Croissant
                            </h1></div>
                    </div>
                </p>

                <p>
                    <div className={Homestyle.flexColumn}
                         style={{display: 'inline-block', paddingLeft: '10%', paddingTop: '5%'}}>
                        <div><h1 className={Homestyle.myfont}
                                 style={{fontSize: '1.5rem', paddingLeft: '2%', marginTop: '1vh', whiteSpace: 'nowrap', position: 'absolute'}}>65070056</h1>
                        </div>
                        <div><Image src={'/friends_image/mew.png'} style={{zIndex: '-1'}} alt='mew'></Image></div>
                        <div><h1 className={Homestyle.myfont}
                                 style={{fontSize: '1.5rem', paddingLeft: '10%', marginTop: '-4.5vh', whiteSpace: 'nowrap'}}>Plant
                            corn</h1></div>
                    </div>

                    <div className={Homestyle.flexColumn} style={{display: 'inline-block', paddingLeft: '7%'}}>
                        <div><h1 className={Homestyle.myfont}
                                 style={{fontSize: '1.5rem', paddingLeft: '2%', marginTop: '1vh', whiteSpace: 'nowrap', position: 'absolute'}}>65070015</h1>
                        </div>
                        <div><Image src={'/friends_image/gong.png'} style={{zIndex: '-1'}} alt='gong'></Image></div>
                        <div><h1 className={Homestyle.myfont}
                                 style={{fontSize: '1.5rem', paddingLeft: '0vw', marginTop: '-4.5vh', whiteSpace: 'nowrap'}}>Sir
                            Baguette 3rd</h1></div>
                    </div>

                    <div className={Homestyle.flexColumn} style={{display: 'inline-block', paddingLeft: '7%'}}>
                        <div><h1 className={Homestyle.myfont}
                                 style={{fontSize: '1.5rem', paddingLeft: '2%', marginTop: '1vh', whiteSpace: 'nowrap', position: 'absolute'}}>65070011</h1>
                        </div>
                        <div><Image src={'/friends_image/bell.png'} style={{zIndex: '-1'}} alt='bell'></Image></div>
                        <div><h1 className={Homestyle.myfont}
                                 style={{fontSize: '1.5rem', paddingLeft: '2vw', marginTop: '-4.5vh', whiteSpace: 'nowrap'}}>Inwza007</h1>
                        </div>
                    </div>

                    <div className={Homestyle.flexColumn} style={{display: 'inline-block', paddingLeft: '7%'}}>
                        <div><h1 className={Homestyle.myfont}
                                 style={{fontSize: '1.5rem', paddingLeft: '2%', marginTop: '1vh', whiteSpace: 'nowrap', position: 'absolute'}}>65070014</h1>
                        </div>
                        <div><Image src={'/friends_image/boss.png'} style={{zIndex: '-1'}} alt='boss'></Image></div>
                        <div><h1 className={Homestyle.myfont}
                                 style={{fontSize: '1.5rem', paddingLeft: '1vw', marginTop: '-4.5vh', whiteSpace: 'nowrap'}}>Valorant
                            Player</h1></div>
                    </div>

                    <div className={Homestyle.flexColumn} style={{display: 'inline-block', paddingLeft: '7%'}}>
                        <div><h1 className={Homestyle.myfont}
                                 style={{fontSize: '1.5rem', paddingLeft: '2%', marginTop: '1vh', whiteSpace: 'nowrap', position: 'absolute'}}>65070002</h1>
                        </div>
                        <div><Image src={'/friends_image/pupha.png'} style={{zIndex: '-1'}} alt='pupha'></Image></div>
                        <div><h1 className={Homestyle.myfont}
                                 style={{fontSize: '1.5rem', paddingLeft: '3vw', marginTop: '-4.5vh', whiteSpace: 'nowrap'}}>ชาวบ้าน
                            P</h1></div>
                    </div>

                </p>
            </div>
            <p style={{display: 'flex', justifyContent: 'flex-end'}}>
                <div className={Homestyle.flexColumn}
                     style={{color: 'white', paddingRight: '5%', alignItems: 'flex-end'}}>
                    <div>contact us</div>


                    <div className={Homestyle.flexContainer} style={{alignItems: 'center'}}>
                        <p>&nbsp;</p>
                        <div style={{display: 'inline-block'}}><Image src={'/images/email.png'} alt='email'></Image></div>
                        <div style={{display: 'inline-block'}}>65070051@kmitl.ac.th</div>
                    </div>

                </div>

            </p>


        </div>
    );
  
}