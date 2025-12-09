import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { obtenerUsuario } from "../auth/auth";
import { ALUMNOS, INSCRIPCIONES, GRUPOS } from "../data/mockData";

export function generarPDFCargaAcademica() {
    const user = obtenerUsuario();
    if (!user) return;

    const alumno = ALUMNOS.find(a => a.usuario_id === user.id);
    if (!alumno) return;

    const inscripciones = INSCRIPCIONES.filter(i => i.alumno_id === alumno.id);

    const doc = new jsPDF();

    // Encabezado
    doc.setFontSize(14);
    doc.text("Carga Académica", 14, 20);
    doc.setFontSize(11);
    doc.text(`Nombre: ${alumno.usuario_id === 1 ? "Steven Reyes Alvarado" : user.nombre}`, 14, 30);
    doc.text(`Matrícula: ${alumno.matricula}`, 14, 36);
    doc.text(`Carrera: ${alumno.carrera}`, 14, 42);
    doc.text(`Cuatrimestre: ${alumno.cuatrimestre_actual}`, 14, 48);
    doc.text(`Promedio: ${alumno.promedio}`, 14, 54);
    doc.text(`Créditos acumulados: ${alumno.creditos_acumulados}`, 14, 60);

    // Tabla con materias
    const rows = inscripciones.map(i => {
        const grupo = GRUPOS.find(g => g.id_grupo === i.grupo_id);
        return [
            i.materia_clave || "",
            grupo?.nombre_materia || "",
            grupo?.codigo || "",
            grupo?.profesor || "",
            i.estatus || ""
        ];
    });


    autoTable(doc, {
        head: [["Clave", "Materia", "Grupo", "Profesor", "Estado"]],
        body: rows,
        startY: 70,
    });


    // Descargar PDF
    doc.save(`Carga_Academica_${alumno.matricula}.pdf`);
}
