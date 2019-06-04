(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74cc9f5c"],{"1ffb":function(e,t,a){"use strict";var i=a("cd68"),o=a.n(i);o.a},cce0:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-8"},[a("card",[a("template",{slot:"header"},[a("h3",{staticClass:"card-title"},[e._v("Agendar Cita")]),a("p",{staticClass:"card-category"},[e._v("Captura el numero de paciente para continuar")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-2"},[a("base-input",{attrs:{type:"text",label:"Paciente"},model:{value:e.id_paciente,callback:function(t){e.id_paciente=t},expression:"id_paciente"}})],1),a("div",{staticClass:"col-xl-3 pt-4"},[a("button",{staticClass:"btn btn-info btn-fill",attrs:{type:"submit"},on:{click:function(t){return e.buscarInformacionPaciente()}}},[e._v("Buscar")])])]),""!=e.Paciente.id_paciente?a("hr"):e._e(),""!=e.Paciente.id_paciente?a("h4",[e._v("Informacion Paciente")]):e._e(),""!=e.Paciente.id_paciente?a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3"},[a("base-input",{attrs:{type:"text",disabled:!0,label:"Nombre"},model:{value:e.Paciente.nombre,callback:function(t){e.$set(e.Paciente,"nombre",t)},expression:"Paciente.nombre"}})],1),a("div",{staticClass:"col-xl-3"},[a("base-input",{attrs:{type:"text",disabled:!0,label:"Apellido Paterno"},model:{value:e.Paciente.apematerno,callback:function(t){e.$set(e.Paciente,"apematerno",t)},expression:"Paciente.apematerno"}})],1),a("div",{staticClass:"col-xl-3"},[a("base-input",{attrs:{type:"text",disabled:!0,label:"Apellido Materno"},model:{value:e.Paciente.apematerno,callback:function(t){e.$set(e.Paciente,"apematerno",t)},expression:"Paciente.apematerno"}})],1)]):e._e(),""!=e.Paciente.id_paciente?a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3"},[a("base-input",{attrs:{type:"text",disabled:!0,label:"Sexo"},model:{value:e.Paciente.sexo,callback:function(t){e.$set(e.Paciente,"sexo",t)},expression:"Paciente.sexo"}})],1),a("div",{staticClass:"col-xl-2"},[a("base-input",{attrs:{type:"number",disabled:!0,label:"Edad"},model:{value:e.Paciente.edad,callback:function(t){e.$set(e.Paciente,"edad",t)},expression:"Paciente.edad"}})],1)]):e._e(),""!=e.Paciente.id_paciente?a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Alergias")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.Paciente.alergia,expression:"Paciente.alergia"}],staticClass:"form-control border-input",attrs:{rows:"3",placeholder:"Alergia a medicamentos",disabled:!0},domProps:{value:e.Paciente.alergia},on:{input:function(t){t.target.composing||e.$set(e.Paciente,"alergia",t.target.value)}}})])])]):e._e(),""!=e.Paciente.id_paciente?a("hr"):e._e(),""!=e.Paciente.id_paciente?a("h3",[e._v("Detalles de la cita")]):e._e(),""!=e.Paciente.id_paciente?a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleFormControlSelect1"}},[e._v("Servicio")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.serv,expression:"serv"}],staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.serv=t.target.multiple?a:a[0]}}},e._l(e.servicios,function(t,i){return a("option",{key:t.id_servicio,domProps:{value:i}},[e._v(e._s(t.nombre))])}),0)])]),a("div",{staticClass:"col-xl-3"},[a("base-input",{attrs:{label:"Descripcion servicio"},model:{value:e.servicios[e.serv].descripcion,callback:function(t){e.$set(e.servicios[e.serv],"descripcion",t)},expression:"servicios[serv].descripcion"}})],1),a("div",{staticClass:"col-xl-3"},[a("base-input",{attrs:{label:"Precio"},model:{value:e.servicios[e.serv].precio,callback:function(t){e.$set(e.servicios[e.serv],"precio",t)},expression:"servicios[serv].precio"}})],1),a("div",{staticClass:"col-xl-2"},[a("base-input",{attrs:{label:"Duracion"},model:{value:e.servicios[e.serv].tiempoestimado,callback:function(t){e.$set(e.servicios[e.serv],"tiempoestimado",t)},expression:"servicios[serv].tiempoestimado"}})],1)]):e._e(),""!=e.Paciente.id_paciente?a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3"},[a("base-input",{attrs:{label:"Fecha",placeholder:"YYYY-MM-DD"},model:{value:e.objetoCita.fecha,callback:function(t){e.$set(e.objetoCita,"fecha",t)},expression:"objetoCita.fecha"}})],1),a("div",{staticClass:"col-xl-3"},[a("label",{attrs:{for:"exampleFormControlSelect1"}},[e._v("Hora")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.hor,expression:"hor"}],staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.hor=t.target.multiple?a:a[0]}}},e._l(e.horasservicio,function(t,i){return a("option",{key:t.hora,domProps:{value:i}},[e._v(e._s(t.hora))])}),0)]),a("div",{staticClass:"col-xl-2 pt-4"},[a("button",{staticClass:"btn btn-fill btn-success",attrs:{type:"submit"},on:{click:function(t){return e.abrirModalCobrar()}}},[e._v("Cobrar")])])]):e._e()],2)],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-2"},[e.showModal?a("div",[a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-xl-12"},[a("h3",[e._v("Editar Informacion")])])])]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3"},[a("base-input",{attrs:{type:"text",label:"Nombre",placeholder:"Nombre del paciente"},model:{value:e.objetoPaciente.nombre,callback:function(t){e.$set(e.objetoPaciente,"nombre",t)},expression:"objetoPaciente.nombre"}})],1),a("div",{staticClass:"col-xl-3"},[a("base-input",{attrs:{type:"text",label:"Apellido Paterno",placeholder:"Primer apellido"},model:{value:e.objetoPaciente.apepaterno,callback:function(t){e.$set(e.objetoPaciente,"apepaterno",t)},expression:"objetoPaciente.apepaterno"}})],1),a("div",{staticClass:"col-xl-3"},[a("base-input",{attrs:{type:"text",label:"Apellido Materno",placeholder:"Segundo apellido"},model:{value:e.objetoPaciente.apematerno,callback:function(t){e.$set(e.objetoPaciente,"apematerno",t)},expression:"objetoPaciente.apematerno"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3"},[a("base-input",{attrs:{type:"text",label:"Sexo",placeholder:"Sexo"},model:{value:e.objetoPaciente.sexo,callback:function(t){e.$set(e.objetoPaciente,"sexo",t)},expression:"objetoPaciente.sexo"}})],1),a("div",{staticClass:"col-xl-3"},[a("base-input",{attrs:{type:"text",label:"Edad"},model:{value:e.objetoPaciente.edad,callback:function(t){e.$set(e.objetoPaciente,"edad",t)},expression:"objetoPaciente.edad"}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-4"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Alergias")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.objetoPaciente.alergia,expression:"objetoPaciente.alergia"}],staticClass:"form-control border-input",attrs:{rows:"3",placeholder:"Alergia a medicamentos"},domProps:{value:e.objetoPaciente.alergia},on:{input:function(t){t.target.composing||e.$set(e.objetoPaciente,"alergia",t.target.value)}}})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3"},[a("base-input",{attrs:{type:"text",label:"Calle"},model:{value:e.objetoPaciente.calle,callback:function(t){e.$set(e.objetoPaciente,"calle",t)},expression:"objetoPaciente.calle"}})],1),a("div",{staticClass:"col-xl-3"},[a("base-input",{attrs:{type:"text",label:"Colonia"},model:{value:e.objetoPaciente.colonia,callback:function(t){e.$set(e.objetoPaciente,"colonia",t)},expression:"objetoPaciente.colonia"}})],1),a("div",{staticClass:"col-xl-3"},[a("base-input",{attrs:{type:"number",label:"Codigo Postal"},model:{value:e.objetoPaciente.codigopostal,callback:function(t){e.$set(e.objetoPaciente,"codigopostal",t)},expression:"objetoPaciente.codigopostal"}})],1)])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-info btn-fill float-right",attrs:{type:"submit"},on:{click:function(t){e.showModal=!1}}},[e._v("Cerrar")]),a("button",{staticClass:"btn btn-success btn-fill float-right",attrs:{type:"submit"},on:{click:function(t){return e.editarInformacion()}}},[e._v("Editar")])])])])])])])],1):e._e()])])])},o=[],s=a("bc3a"),c={data:function(){return{Paciente:{id_paciente:"",nombre:"",apepaterno:"",apematerno:"",sexo:"",edad:"",alergia:""},Cita:{folio:""},servicios:[],horasservicio:[{hora:"8:00"},{hora:"9:00"},{hora:"10:00"},{hora:"11:00"},{hora:"12:00"},{hora:"13:00"},{hora:"14:00"},{hora:"15:00"},{hora:"16:00"},{hora:"17:00"}],objetoServicio:{id_servicio:"",nombre:"",descripcion:"",precio:"",tiempoestimado:""},showModal:!1,serv:1,hor:1,opcion:"",id_paciente:"",folioCita:"",objetoCita:{id_paciente:"",id_servicio:"",fecha:"",hora:"",observaciones:""},objetoPaciente:{id_paciente:"",nombre:"",apepaterno:"",apematerno:"",sexo:"",edad:"",calle:"",colonia:"",codigopostal:"",telefono:"",correo:"",alergia:""}}},methods:{buscarInformacionPaciente:function(){var e=this;this.id_paciente>0?s.get("http://178.128.13.15:8000/api/Paciente/PacientePorId/"+this.id_paciente).then(function(t){t.data.id_paciente>0?(e.Paciente=t.data,e.cargarServicios()):e.notifyVue("top","center","No hay informacion para ese paciente","danger")}).catch(function(t){e.notifyVue("top","center","Hubo un error al obtener la informacion, favor de reportarlo con el administrador","danger")}):this.notifyVue("top","center","No haz capturado un numero de paciente valido","warning")},generarFolio:function(){this.folioCita=1},notifyVue:function(e,t,a,i){this.$notifications.notify({message:a,icon:"nc-icon nc-app",horizontalAlign:t,verticalAlign:e,type:i})},cargarServicios:function(){var e=this;s.get("http://178.128.13.15:8000/api/servicio/VerServicios").then(function(t){e.servicios=t.data}).catch(function(t){e.notifyVue("top","center","Hubo un error al obtener la informacion, favor de reportarlo con el administrador","danger")})},abrirModalCobrar:function(){this.showModal=!0},agendarCita:function(){var e=this;this.llenarObjetoCita(),s.post("http://178.128.13.15:8000/api/Cita/InsertarCita",this.objetoCita).then(function(t){alert("asasas"),e.notifyVue("top","center","Agendado","success")}).catch(function(t){e.notifyVue("top","center","Error","danger")})},llenarObjetoCita:function(){this.objetoCita.id_paciente=this.Paciente.id_paciente,this.objetoCita.id_servicio=this.servicios[this.serv].id_servicio,this.objetoCita.hora=this.horasservicio[this.hor].hora}}},n=c,l=(a("1ffb"),a("2877")),r=Object(l["a"])(n,i,o,!1,null,null,null);t["default"]=r.exports},cd68:function(e,t,a){}}]);
//# sourceMappingURL=chunk-74cc9f5c.b3c69a68.js.map