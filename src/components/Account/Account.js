import React from 'react'
import './Account.css'
function Account() {
    return (
        <div className='container-form-account w-100'>
            <div className='row form-account-item '>
                <span >Bạn chưa đăng nhập</span>
                <button type="button" className='btn w-100 btn-login'>Đăng Nhập</button>
            </div>
            <div className='row form-account-item'>
                <span>Chưa có tài khoản tại NShop ?</span>
                <button type="button" className='btn w-100  btn-signin'>Đăng Ký</button>
            </div>
        </div>
    )
}

export default Account
