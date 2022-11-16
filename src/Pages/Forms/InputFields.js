import styles from '../authpages/main.module.css'
const List = (props) => {
    const { id, label, list_id, formik, options, onChangeValue } = props

    return (
        <div>
            <label htmlFor={id} className={`${styles.form_input__lable}`}>{label}</label>
            <br />


            <select onChange={(e) => onChangeValue(e)} value={formik.values[id]} {...formik.getFieldProps(`'${id}'`)} className={`${styles.form_input}`} name={id} id={list_id}>
                {
                    options && options.map(option => {
                        const keys = Object.keys(option);
                        const value = option[keys[0]]
                        const lable = option[keys[1]]
                        return <option id={option.id} value={value} > {lable}</option>
                    })
                }
            </select>
            {formik.touched[id] && formik.errors[id] ? (
                <div className='text__note'>{formik.errors[id]}</div>
            ) : null}
        </div>

    )
}
const TextInput = (props) => {

    const { id, label, formik, type = 'text', onChangeValue } = props


    return (
        <>
            <label htmlFor={id} className={`${styles.form_input__lable}`}>{label}</label>
            <input onChange={(e) => onChangeValue(e)} {...formik.getFieldProps(`'${id}'`)} type={type} value={formik.values[id]} className={`${styles.form_input}`} name={id} id={id} aria-label={label} />
            {formik.touched[id] && formik.errors[id] ? (
                <div className='text__note'>{formik.errors[id]}</div>
            ) : null}
        </>
    )
}
// const FixedList = (props) => {
//     const { id, label, list_id, formik, options, onChangeValue } = props

//     return (
//         <div>
//             <label htmlFor={id} className={`${styles.form_input__lable}`}>{label}</label>
//             <br />


//             <select onChange={(e) => onChangeValue(e)} value={formik.values[id]} {...formik.getFieldProps(`'${id}'`)} className={`${styles.form_input}`} name={id} id={list_id}>
//                 {
//                     options && options.map(option => {
//                         const keys = Object.keys(option);
//                         return <option id={option.id} value={value} > {lable}</option>
//                     })
//                 }
//             </select>
//             {formik.touched[id] && formik.errors[id] ? (
//                 <div className='text__note'>{formik.errors[id]}</div>
//             ) : null}
//         </div>

//     )
// }
export { List, TextInput, }