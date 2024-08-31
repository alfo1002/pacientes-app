import { usePatientStore } from "../store/store"
import { PatientDetail } from "./PatientDetail"

export const PatientList = () => {

    const patients = usePatientStore(state => state.patients)

    return (
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
            {patients.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus Pacientes y Citas: {''}
                    </p>
                    {
                        patients.map(patient => (
                            <PatientDetail
                                key={patient.id}
                                patient={patient}
                            />
                        ))
                    }
                </>
            ) : (
                <p className="text-indigo-600 font-bold">No hay pacientes</p>
            )}
        </div>
    )
}
