<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12">
                    <card>
                        <card 
                            class="striped-tabled-with-hover"
                            body-classes="table-full-width table-responsive"
                        >
                            <template slot="header">
                                <div class="row ">
                                    <div class="col-xl-8 col-lg-6">
                                        <h3 class="card-title">Informacion Pacientes</h3>
                                        <p class="card-category">Informacion General de los Ultimos 15 Pacientes Registrados</p>
                                    </div>
                                    <div class="col-xl-2 col-lg-3">
                                        <h6>Buscar Paciente</h6>
                                        <base-input
                                            class="pt-1"
                                            placeholder="No.Paciente"
                                            v-model="id_paciente">
                                        </base-input>
                                    </div>
                                    <div class="col-xl-1 col-lg-1 pt-3">
                                        <button class="btn btn-fill btn-info float-right" @click="buscarPaciente()">
                                            Buscar
                                        </button>
                                    </div>
                                </div>
                                
                                
                                <hr>
                            </template>
                            <div class="table-responsive">
                                <l-table 
                                    class="table-hover"
                                    :columns="tableColumns"
                                    :data="tableData">

                                        <template slot="columns"></template>
                                        <template slot-scope="{row}">
                                            <td>{{row.id_paciente}}</td>
                                            <td>{{row.nombre}}</td>
                                            <td>{{row.apepaterno}}</td>
                                            <td>{{row.apematerno}}</td>
                                            <td>{{row.sexo}}</td>
                                            <td>{{row.edad}}</td>
                                            <td>{{row.alergia}}</td>
                                            <td>{{row.calle}}</td>
                                            <td>{{row.colonia}}</td>
                                            <td>{{row.codigopostal}}</td>
                                            <td>{{row.telefono}}</td>
                                            <td>{{row.correo}}</td>
                                            <td>
                                                <button class="btn btn-icon btn-info" @click="cargarDatosModal(row)"><i class="fa fa-edit"></i></button>
                                                <button class="btn btn-icon btn-danger" @click="eliminarPaciente(row)"><i class="fa fa-trash"></i></button>
                                            </td>
                                        </template>
                                </l-table>
                            </div>
                        </card>
                    </card>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-2">
                    <div v-if="showModal">
                        <transition name="modal">
                            <div class="modal-mask">
                                <div class="modal-wrapper">
                                    <div class="modal-dialog modal-lg" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <div class="row justify-content-center">
                                                    <div class="col-xl-12">
                                                        <h3>Editar Informacion</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row">
                                                    <div class="col-xl-3">
                                                        <base-input
                                                            type="text"
                                                            label="Nombre"
                                                            placeholder="Nombre del paciente"
                                                            v-model="objetoPaciente.nombre">
                                                        </base-input>
                                                    </div>
                                                    <div class="col-xl-3">
                                                        <base-input
                                                            type="text"
                                                            label="Apellido Paterno"
                                                            placeholder="Primer apellido"
                                                            v-model="objetoPaciente.apepaterno">
                                                        </base-input>
                                                    </div>
                                                    <div class="col-xl-3">
                                                        <base-input
                                                            type="text"
                                                            label="Apellido Materno"
                                                            placeholder="Segundo apellido"
                                                            v-model="objetoPaciente.apematerno">
                                                        </base-input>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-xl-3">
                                                        <base-input
                                                            type="text"
                                                            label="Sexo"
                                                            placeholder="Sexo"
                                                            v-model="objetoPaciente.sexo">
                                                        </base-input>
                                                    </div>
                                                    <div class="col-xl-3">
                                                        <base-input
                                                            type="text"
                                                            label="Edad"
                                                            v-model="objetoPaciente.edad">
                                                        </base-input>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-xl-4">
                                                        <div class="form-group">
                                                            <label>Alergias</label>
                                                            <textarea rows="3" class="form-control border-input"
                                                                    placeholder="Alergia a medicamentos"
                                                                    v-model="objetoPaciente.alergia">
                                                            </textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                     <div class="col-xl-3">
                                                        <base-input
                                                            type="text"
                                                            label="Calle"
                                                            v-model="objetoPaciente.calle">
                                                        </base-input>
                                                    </div>
                                                     <div class="col-xl-3">
                                                        <base-input
                                                            type="text"
                                                            label="Colonia"
                                                            v-model="objetoPaciente.colonia">
                                                        </base-input>
                                                    </div>
                                                     <div class="col-xl-3">
                                                        <base-input
                                                            type="number"
                                                            label="Codigo Postal"
                                                            v-model="objetoPaciente.codigopostal">
                                                        </base-input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="submit" class="btn btn-info btn-fill float-right" @click="showModal = false"> 
                                                    Cerrar
                                                </button>
                                                <button type="submit" class="btn btn-success btn-fill float-right" @click="editarInformacion()">
                                                    Editar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
</style>

<script>
    
import LTable from 'src/components/Table.vue'
import Card from 'src/components/Cards/Card.vue'
const axios = require('axios');

export default {
    name:'InformacionPacientes',
    components: {
      LTable,
      Card
    },
    data(){
        return{
            tableColumns : ['Id', 'Nombre', 'Apellido Paterno', 'Apellido Materno', 'Sexo', 'Edad' ,
             'Alergia' , 'Calle' , 'Colonia' , 'Codigo Postal' , 'Telefono' , 'Correo Electronico','Acciones'],
            tableData:[],
            showModal:false,
            objetoPaciente:{
                id_paciente:'',
                nombre:'',
                apepaterno:'',
                apematerno:'',
                sexo:'',
                edad:'',
                calle:'',
                colonia:'',
                codigopostal:'',
                telefono:'',
                correo:'',
                alergia:''
            },
            objetoPacienteNuevo:{
                id_paciente:'',
                nombre:'',
                apepaterno:'',
                apematerno:'',
                sexo:'',
                edad:'',
                calle:'',
                colonia:'',
                codigopostal:'',
                telefono:'',
                correo:'',
                alergia:''
            },
            index:'',
            id_paciente:''
        }
    },
    mounted: function(){
        this.llenarTablaPacientes()
    },
    methods:{
        llenarTablaPacientes(){
            axios.get('http://178.128.13.15:8001/api/paciente/VerPacientes')
            .then(response =>{
                this.tableData = response.data
            }).catch(error => {
                this.notifyVue('top','center','Hubo un error al obtener la informacion, favor de reportarlo con el administrador','danger')
            })
        },

        cargarDatosModal(row){
            this.index = this.tableData.indexOf(row)
            this.objetoPaciente = Object.assign({},row)
            this.showModal = true
        },

        editarInformacion(){
            axios.post('http://178.128.13.15:8001/api/paciente/ActualizarPaciente',this.objetoPaciente)
            .then(response =>{
                this.notifyVue('top','center','Se edito la informacion del paciente','success')
                this.actualizarRowTable()
                this.showModal = false;
            }).catch(error => {
                this.notifyVue('top','center','Se detecto un error con la informacion proporcionada, favor de validar','danger')
            })
        },

        actualizarRowTable(){
            if(this.index > -1){
                Object.assign(this.tableData[this.index],this.objetoPaciente)
            }
            else{
                this.tableData.push(this.objetoPaciente)
            }
            /*this.tableData.forEach(element => {
                if(element.id_paciente == this.paciente.id_paciente){
                    alert('Entre')
                    this.index = this.tableData.indexOf(element)
                    alert(this.index)
                    this.tableData[this.index] = this.paciente
                }
            });*/
        },

        notifyVue (verticalAlign, horizontalAlign,mensaje,color) {
            this.$notifications.notify(
            {
                message: mensaje,
                icon: 'nc-icon nc-app',
                horizontalAlign: horizontalAlign,
                verticalAlign: verticalAlign,
                type: color
            })
        },


        eliminarPaciente(row){
            this.index = this.tableData.indexOf(row)
            this.objetoPaciente = Object.assign({}, row)
            axios.get('http://178.128.13.15:8001/api/paciente/EliminarPaciente/'+this.objetoPaciente.id_paciente
            )
            .then(response => {
                this.tableData.splice(this.index, 1)
            })
            .catch(error => {
                alert(error+' '+this.objetoPaciente.id_paciente)
            })
        },

        buscarPaciente(){

            if(this.id_paciente != "" || this.id_paciente > 0){
                axios.get('http://178.128.13.15:8001/api/paciente/PacientePorId/'+this.id_paciente)
                .then(response => {

                if(response.data != -1){
                    this.tableData = []
                    this.objetoPaciente = response.data      
                    this.tableData.push(this.objetoPaciente)
                }else{
                    this.tableData = []
                    this.notifyVue('top','center','No existe el paciente proporcionado','warning')
                }

                })
                .catch(error => {
                    this.notifyVue('top','center','Hubo un error al obtener la informacion, favor de reportarlo con el administrador','danger')
                })
            }
            else{
                this.notifyVue('top','center','No haz proporcionado un numero de paciente valido','warning')
            }
        },
    }
}
</script>