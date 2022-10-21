import styles from '../authpages/main.module.css'
const List = (props) => {
    const { id, label, list_id, formik } = props
    return (
        <div>
            <label htmlFor={id} className={`${styles.form_input__lable}`}>{label}</label>
            <br />
            <div className='position-relative'>
                <label htmlFor='position'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                    </svg>
                </label>

                <input {...formik.getFieldProps(`'${id}'`)} class={`${styles.form_input}`} list={list_id} name={id} id={id} />
            </div>

            <datalist id={list_id}>
                <option value="HR" />
                <option value="Developer" />
                <option value="CEO" />
                <option value="Manager" />
                <option value="Owner" />
            </datalist>
            {formik.touched[id] && formik.errors[id] ? (
                <div className='text__note'>{formik.errors[id]}</div>
            ) : null}
        </div>

    )
}
const TextInput = (props) => {
    const { id, label, formik, type = 'text' } = props
    return (
        <>
            <label htmlFor={id} className={`${styles.form_input__lable}`}>{label}</label>
            <input {...formik.getFieldProps(`'${id}'`)} type={type} class={`${styles.form_input}`} name={id} id={id} aria-label={label} />
            {formik.touched[id] && formik.errors[id] ? (
                <div className='text__note'>{formik.errors[id]}</div>
            ) : null}
        </>
    )
}
export { List, TextInput }