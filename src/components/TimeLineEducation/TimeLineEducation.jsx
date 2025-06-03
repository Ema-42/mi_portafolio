import {
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle,
  Clock,
} from "lucide-react";

const datosEducativos = [
  {
    año: "2012-2017",
    título: "Escuela Secundaria",
    escudo: "/assets/club2.jpg",
    institución: "Unidad Educativa Club de Leones II",
    descripción:
      "Complete y adquiri conocimientos educativos de nivel secundario.",
    estado: "Concluido",
    logros: ["Mejor promedio Bachiller"],
  },
  {
    año: "2018-2024",
    título: "Estudios Universitarios",
    escudo: "/assets/usfx2.png",
    institución:
      "Universidad Mayor real y Potificia de San Francisco Xavier de Chuquisaca",
    descripción: "Licenciatura en Ingenieria de Sistemas.",
    estado: "Concluido",
    logros: [
      "Beca de Auxiliar de Docencia en multiples ocaciones",
      "3er lugar Competencia Huawei ICT",
    ],
    habilidades: [
      "Programación en varios lenguajes",
      "Análisis de datos",
      "Diseño y Analisis de sistemas",
 
    ],
  },
  {
    año: "2023-2024",
    título: "Programa de Diplomado",
    escudo: "/assets/cepi2.png",
    institución: "Centro de Estudios de Posgrado e Investigación",
    descripción: "Diplomado en DevOps v1.",
    estado: "Concluido",
    logros: [
      "Proyecto final Aprobado",
      "Defensa de Proyecto con nota sobresaliente",
    ],
    habilidades: [
      "CI/CD (Integración continua y entrega continua)",
      "Monitorización y logging",
      "Gestión de contenedores con Docker",
    ],
  },
  
];

export default function TimelineEducation() {
  const getStatusColor = (estado) => {
    switch (estado.toLowerCase()) {
      case "concluido":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "en curso":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "pausado":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getStatusIcon = (estado) => {
    switch (estado.toLowerCase()) {
      case "concluido":
        return <CheckCircle className="w-4 h-4" />;
      case "en curso":
        return <Clock className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-violet-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              Formación Académica
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mi trayectoria educativa y desarrollo profesional a lo largo de los
            años
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Timeline - Horizontal */}
          <div className="hidden lg:block">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-purple-500 to-violet-600 transform -translate-y-1/2 rounded-full shadow-lg shadow-violet-500/20"></div>

            {/* Timeline Items */}
            <div className="flex justify-between items-center relative z-10">
              {datosEducativos.map((item, index) => (
                <div key={index} className="flex flex-col items-center w-80">
                  {/* Connection Point */}

                  {/* Card */}
                  <div className="bg-gradient-to-br from-slate-800/60 to-gray-800/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-2xl shadow-black/50 hover:shadow-violet-500/10 transition-all duration-300 hover:scale-105 hover:border-violet-500/30 group">
                    {/* Status Badge */}
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${getStatusColor(
                        item.estado
                      )}`}
                    >
                      {getStatusIcon(item.estado)}
                      {item.estado}
                    </div>

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative">
                        <img
                          src={item.escudo || "/placeholder.svg"}
                          alt={`Escudo de ${item.institución}`}
                          className="w-16 h-16 rounded-xl object-cover border-2 border-slate-600 group-hover:border-violet-500/50 transition-colors duration-300"
                        />
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                          <Award className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-violet-300 transition-colors duration-300">
                          {item.título}
                        </h3>
                        <p className="text-violet-400 font-semibold text-sm mb-1">
                          {item.año}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.institución}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {item.descripción}
                    </p>

                    {/* Logros */}
                    {item.logros && (
                      <div className="mb-4">
                        <h5 className="text-violet-300 font-semibold text-sm mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Logros
                        </h5>
                        <ul className="space-y-1">
                          {item.logros.map((logro, i) => (
                            <li
                              key={i}
                              className="text-gray-400 text-xs flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-1.5 flex-shrink-0"></div>
                              {logro}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Habilidades */}
                    {item.habilidades && (
                      <div>
                        <h5 className="text-violet-300 font-semibold text-sm mb-2 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Habilidades
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {item.habilidades.slice(0, 3).map((habilidad, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md border border-slate-600/50"
                            >
                              {habilidad}
                            </span>
                          ))}
                          {item.habilidades.length > 3 && (
                            <span className="px-2 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-md border border-violet-500/30">
                              +{item.habilidades.length - 3} más
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="lg:hidden">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-600 via-purple-500 to-violet-600 rounded-full shadow-lg shadow-violet-500/20"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {datosEducativos.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Connection Point */}
                  <div className="absolute left-8 w-6 h-6 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full border-4 border-slate-900 shadow-lg shadow-violet-500/30 transform -translate-x-1/2 z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full animate-pulse opacity-75"></div>
                  </div>

                  {/* Card */}
                  <div className="ml-16 bg-gradient-to-br from-slate-800/90 to-gray-900/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-2xl shadow-black/50 hover:shadow-violet-500/10 transition-all duration-300 hover:border-violet-500/30 group w-full">
                    {/* Status Badge */}
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${getStatusColor(
                        item.estado
                      )}`}
                    >
                      {getStatusIcon(item.estado)}
                      {item.estado}
                    </div>

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative">
                        <img
                          src={item.escudo || "/placeholder.svg"}
                          alt={`Escudo de ${item.institución}`}
                          className="w-16 h-16 rounded-xl object-cover border-2 border-slate-600 group-hover:border-violet-500/50 transition-colors duration-300"
                        />
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                          <Award className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-violet-300 transition-colors duration-300">
                          {item.título}
                        </h3>
                        <p className="text-violet-400 font-semibold text-sm mb-1">
                          {item.año}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.institución}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {item.descripción}
                    </p>

                    {/* Logros */}
                    {item.logros && (
                      <div className="mb-4">
                        <h5 className="text-violet-300 font-semibold text-sm mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Logros
                        </h5>
                        <ul className="space-y-1">
                          {item.logros.map((logro, i) => (
                            <li
                              key={i}
                              className="text-gray-400 text-sm flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                              {logro}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Habilidades */}
                    {item.habilidades && (
                      <div>
                        <h5 className="text-violet-300 font-semibold text-sm mb-2 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Habilidades
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {item.habilidades.map((habilidad, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-lg border border-slate-600/50"
                            >
                              {habilidad}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
