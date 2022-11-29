import { useState } from 'react'
import styles from '../authpages/main.module.css'

const List = (props) => {
    const { id, label, list_id, formik, options, onChangeValue } = props
    const initialvalue = formik.values[id] //17
    return (
        <div>
            <label htmlFor={id} className={`${styles.form_input__lable}`}>{label}</label>
            <br />


            <select defaultChecked={17} onChange={(e) => onChangeValue(e)} value={formik.values[id]} {...formik.getFieldProps(`'${id}'`)} className={`${styles.form_input}`} name={id} id={list_id}>
                {
                    options && options.map((option, index) => {
                        const keys = Object.keys(option);
                        const value = option[keys[0]]
                        const lable = option[keys[1]]
                        return <option id={option.id} selected={(value == initialvalue) ? true : false} value={value} > {lable}</option>
                    })
                }
            </select>
            {formik.touched[id] && formik.errors[id] ? (
                <div className='text__note'>{formik.errors[id]}</div>
            ) : null}
        </div>

    )
}
const ListUpdate = (props) => {
    const { id, label, list_id, formik, options, onChangeValue } = props
    console.log(id)
    const initialvalue = formik.values[id] //17

    // loop through all the options and get lable for this id

    // const dlabel = options && options.filter(i => {

    //     const KEYS = Object.keys(i);
    //     const VALUE = i[KEYS[0]]
    //     const LABLE = i[KEYS[1]]
    //     return VALUE == initialvalue
    // })

    return (
        <div>
            <label htmlFor={id} className={`${styles.form_input__lable}`}>{label}</label>
            <br />


            <select onChange={(e) => onChangeValue(e)} value={formik.values[id]} {...formik.getFieldProps(`'${id}'`)} className={`${styles.form_input}`} name={id} id={list_id}>
                {
                    options && options.map((option, index) => {
                        const keys = Object.keys(option);
                        const value = option[keys[0]]
                        const lable = option[keys[1]]
                        return <option id={option.id} selected={(value == initialvalue) ? true : false} value={value} > {lable}</option>
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
const FileUpload = ({ setFileData, title, name, id, label, setImage }) => {
    const handleInputChange = (event) => {
        setFileData(event.target.files[0])
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    };
    return (<>
        <label htmlFor={id} className={`${styles.form_input__lable}`}>{label}</label>
        <input className={`${styles.form_input}`} onChange={handleInputChange} type="file" name={name} id={id} />
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
export { List, TextInput, FileUpload, ListUpdate }