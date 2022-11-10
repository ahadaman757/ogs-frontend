import styles from '../authpages/main.module.css'
const List = (props) => {
    const { id, label, list_id, formik, options, } = props
    console.log(options)
    return (
        <div>
            <label htmlFor={id} className={`${styles.form_input__lable}`}>{label}</label>
            <br />
            <div className='position-relative'>
                <label htmlFor='position'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                    </svg>
                </label>

                <input value={formik.values[id]} {...formik.getFieldProps(`'${id}'`)} className={`${styles.form_input}`} list={list_id} name={id} id={id} />
            </div>

            <datalist id={list_id}>
                {
                    options && options.map(option => {
                        const keys = Object.keys(option);
                        const value = option[keys[1]]
                        return <option id={option.id} value={value} />
                    })
                }

            </datalist>
            {formik.touched[id] && formik.errors[id] ? (
                <div className='text__note'>{formik.errors[id]}</div>
            ) : null}
        </div>

    )
}
const TextInput = (props) => {

    const { id, label, formik, type = 'text' } = props
    console.log(formik)
    return (
        <>
            <label htmlFor={id} className={`${styles.form_input__lable}`}>{label}</label>
            <input {...formik.getFieldProps(`'${id}'`)} type={type} value={formik.values[id]} className={`${styles.form_input}`} name={id} id={id} aria-label={label} />
            {formik.touched[id] && formik.errors[id] ? (
                <div className='text__note'>{formik.errors[id]}</div>
            ) : null}
        </>
    )
}
export { List, TextInput }