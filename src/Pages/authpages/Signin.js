import React from 'react'
import styles from './main.module.css'
function Signin() {
    return (
        <div className={`${styles.auth_page} py-5 container-fluid px-5 primary-bg`}>
            <div className={` ${styles.auth_page__model} row `}>
                <div className="col-md-6 py-md-4 py-2 px-md-5 px-2 ">
                    <h1>
                        Logo
                    </h1>
                    <h3 className={`${styles.form_heading_1}`}>
                        User Registeration
                    </h3>
                    <p className={`${styles.form_description}`}>

                        Registration with OGS (Pvt) Ltd is 100% free <br />
                        Please fill up this form to register free at OGS
                    </p>
                    <div className="container">
                        <form action="
                        
                        ">
                            <div class="row g-3">
                                <div class="col-12">
                                    <input type="text" class={`${styles.form_input}`} placeholder="First name" aria-label="First name" />
                                </div>
                                <div class="col-12">
                                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={`col-md-6 bg-secondary ${styles.auth_img} `}>

                </div>
            </div>
        </div>
    )
}

export default Signin