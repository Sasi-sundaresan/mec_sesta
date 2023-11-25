const expRef = require('express')
const sqlRef = require('mysql2')
const bodyParser = require('body-parser')
const db = require("./db")
// const cors=require('cors')

const app = expRef.Router()
// app.use(cors())
//DB connect

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


//post mapping
app.post('/addNptel',async(req,res)=>{
    const {academic_year,sem_id,name_of_the_student,Academic_year_of_the_student,semester_year,section,course_name,year,session,score_optained,certificate_type,certificate_pdf} = req.body
    const sql = "insert into data_sesta_nptel values (?,?,?,?,?,?,?,?,?,?,?,?)"
    db.query(sql,[academic_year,sem_id,name_of_the_student,Academic_year_of_the_student,semester_year,section,course_name,year,session,score_optained,certificate_type,certificate_pdf],(err,result)=>{
        if(err){
            res.status(500).json({"error":err.message})
        }
        res.status(200).json({"message":result.affectedRows})
    })
})

app.post('/addInternship',async(req,res)=>{
    const {name_of_the_contact_person, 
        phone_numberr_of_contact_person ,
        email_id_of_contact_person , 
        website_of_the_organization , 
        outcome_of_the_activity , 
        certificate_pdf} = req.body
    const sql = "insert into data_sesta_internship values (?,?,?,?,?,?)"
    db.query(sql,[name_of_the_contact_person,
        phone_numberr_of_contact_person,email_id_of_contact_person,  
        website_of_the_organization, 
        outcome_of_the_activity,  
        certificate_pdf],(err,result)=>{
        if(err){
            res.status(500).json({"error":err.message})
        }
        res.status(200).json({"message":result.affectedRows})
    })
})

app.post('/addOnlineCertification',async(req,res)=>{
    const {academic_year, semester_id,department_id,name_of_the_event ,year,semester,section,online_certification,name_of_the_couse,date,duration,details_of_the_organization,awards_and_recognitions,outcome_of_the_activity,certificate_pdf} = req.body
    const sql = "insert into data_sesta_online_certification values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    db.query(sql,[academic_year, semester_id,department_id,name_of_the_event ,year,semester,section,online_certification,name_of_the_couse,date,duration,details_of_the_organization,awards_and_recognitions,outcome_of_the_activity,certificate_pdf],(err,result)=>{
        if(err){
            res.status(500).json({"error":err.message})
        }
        res.status(200).json({"message":result.affectedRows})
    })
})

app.post('/addStudentTechtalk',async(req,res)=>{
    const {student_name, 
        date, 
        title , 
        no_of_students_participated, 
        faculty_co_ordinator, 
        po_and_pos_mapping, 
        attendance , 
        photo_1,
        photo_2} = req.body
    const sql = "insert into data_sesta_student_techtalk values (?,?,?,?,?,?,?,?,?)"
    db.query(sql,[student_name, 
        date, 
        title,
        no_of_students_participated, 
        faculty_co_ordinator, 
        po_and_pos_mapping,
        attendance, 
        photo_1,
        photo_2],(err,result)=>{
        if(err){
            res.status(500).json({"error":err.message})
        }
        res.status(200).json({"message":result.affectedRows})
    })
})

app.post('/addStudentsParticipation',async(req,res)=>{
    const {academic_year, 
        sem_id, 
        department_id, 
        name_of_the_student, 
        year, 
        semester, 
        section, 
        nature_of_the_participation, 
        name_of_the_program,
        date,
        duration, 
        name_of_the_organization,
        awards_and_recognitions , 
        certificate_pdf} = req.body
    const sql = "insert into data_sesta_students_participation values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    db.query(sql,[academic_year, 
        sem_id, 
        department_id, 
        name_of_the_student, 
        year, 
        semester, 
        section, 
        nature_of_the_participation, 
        name_of_the_program,
        date,
        duration, 
        name_of_the_organization,
        awards_and_recognitions , 
        certificate_pdf],(err,result)=>{
        if(err){
            res.status(500).json({"error":err.message})
        }
        res.status(200).json({"message":result.affectedRows})
    })
})

app.post('/addStudentsTechtalks(st2)',async(req,res)=>{
    const {academic_year,
        sem_id,  
        department_id,
        date,
        title_of_the_event, 
        name_of_the_student, 
        year,
        semester, 
        section, 
        no_of_beneficiaries} = req.body
    const sql = "insert into data_sesta_students_techtalks(st2) values (?,?,?,?,?,?,?,?,?)"
    db.query(sql,[academic_year, 
        sem_id,
        department_id,  
        date, 
        title_of_the_event,
        name_of_the_student,
        year,
        semester, 
        section , 
        no_of_beneficiaries],(err,result)=>{
        if(err){
            res.status(500).json({"error":err.message})
        }
        res.status(200).json({"message":result.affectedRows})
    })
})

app.post('/addVac',async(req,res)=>{
    const {academic_year, 
        sem_id, 
        department_id,
        name_of_the_value_added_course, 
        address_of_the_resource_person, 
        designation_id, 
        organization_of_resources_person,
        mobile_of_resource_person ,
        email_id_of_rresource_person, 
        students_participated_in_the_event,
        outcome_of_the_activity, 
        ccr_first_page_pdf} = req.body
    const sql = "insert into data_sesta_vac values (?,?,?,?,?,?,?,?,?,?,?)"
    db.query(sql,[academic_year, 
        sem_id, 
        department_id,
        name_of_the_value_added_course, 
        address_of_the_resource_person, 
        designation_id, 
        organization_of_resources_person,
        mobile_of_resource_person ,
        email_id_of_rresource_person, 
        students_participated_in_the_event,
        outcome_of_the_activity, 
        ccr_first_page_pdf],(err,result)=>{
        if(err){
            res.status(500).json({"error":err.message})
        }
        res.status(200).json({"message":result.affectedRows})
    })
})


module.exports=app


