import { Patient } from "../types"
import { PatientDetailItem } from "./PatientDetailItem"


interface PatientDetailProps {
    patient: Patient
}

export const PatientDetail = ({ patient }: PatientDetailProps) => {
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-sm rounded-lg">
            <PatientDetailItem label="Id" data={patient.id} />
            <PatientDetailItem label="Nombre" data={patient.name} />
            <PatientDetailItem label="Propietario" data={patient.caretaker} />
            <PatientDetailItem label="Email" data={patient.email} />
            <PatientDetailItem label="Fecha" data={patient.date.toString()} />
            <PatientDetailItem label="Síntomas" data={patient.symptoms} />
        </div>
    )
}
