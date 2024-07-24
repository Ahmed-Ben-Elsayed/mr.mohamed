import React from 'react'
import '../departments/depart.css'
import back_img from '../../src/imges/wtast.png'
import back_img2 from '../../src/imges/back2.jpg'
import {Link} from 'react-router-dom'
export const Department = () => {
    return (
        <>
        <div className='departments'>
            <h1 className='address'>السنوات الدراسية </h1>
            <span className='mark'></span>
            <span className='mark2'></span>
            <div className='departs'>
                <div data-aos-duration='1000' data-aos="fade-left" className="depart">
                    <div className='img'>
                    <img src="" alt="" srcSet={back_img} />
                    </div>
                    <hr className='mark-img' />
                    <div className="depart-address">
                        <h2>المرحلة الثانوية </h2>
                        <p>جميع كورسات المرحلة الثانوية  </p>
                    </div>
                </div>
                <div data-aos-duration='1000' data-aos="fade-right" className="depart sc">
                    <div className='img'>
                    <img src="" alt="" srcSet={back_img} />
                    </div>
                    <hr className='mark-img' />
                    <div className="depart-address">
                        <h2>المرحلة الإعدادية</h2>
                        <p>جميع كورسات المرحلة الإعدادية </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
