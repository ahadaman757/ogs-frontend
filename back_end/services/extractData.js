class Extractdata {
    constructor(body) {
        this.orderedData = body
    }
    static EmployerSignUp = (body) => {
        const data = {
            first_name: body.first_name,
            last_name: body.last_name,
            password: body.password,
            repeat_password: body.repeat_password,
            position: body.position,
            company_name: body.businessName,
            company_logo: body.file,
            business_webpage: body.businessWebpage,
            business_mobile_number: body.mobileNumber,
            business_address: body.address,
            country: body.country,
            city: body.city,
            contact_person_name: body.employerName,
            contact_person_number: body.employerNumber,
            contact_person_email: body.employerEmail
        }
        return new Extractdata(data)
    }
    static SeekerSignUp = (body) => {
        const data = {
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            password: body.password,
            repeat_password: body.repeatPassword,
            position: body.position,
        }
        return new Extractdata(data)
    }
    static JobPost = (body) => {
        const data = {
            job_title: body.job_title,
            job_description: body.job_description,
            supervisor_gender_title: body.supervisor_gender_title,
            co_worker_percentage: body.co_worker_percentage,
            valid_upto: body.valid_upto,
            experience_info: body.experience_info,
            degree_title: body.degree_title,
            country_id: body.country,
            city_id: body.city,
            career_level_id: body.career_level,
            min_salary_id: body.min_salary,
            max_salary_id: body.max_salary,
            functional_area_id: body.functional_area,
            gender_title_id: body.gender_title,
            job_shift_id: body.job_shift,
            job_type_id: body.job_type_title,
            required_qualification_id: body.required_qualification,
            min_experience_id: body.min_experience,
            max_experience_id: body.max_experience,
            min_age_id: body.min_age,
            max_age_id: body.max_age,
        }
        return new Extractdata(data)
    }
}
export default Extractdata
