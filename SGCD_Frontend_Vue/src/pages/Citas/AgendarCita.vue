<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-8">
          <card>
            <template slot="header">
              <h3 class="card-title">Agendar Cita</h3>
              <p class="card-category">Captura el numero de paciente para continuar</p>
            </template>
            <div class="row">
              <div class="col-xl-2">
                <base-input type="text" label="Paciente" v-model="id_paciente"></base-input>
              </div>
              <div class="col-xl-3 pt-4">
                <button
                  type="submit"
                  class="btn btn-info btn-fill"
                  @click="buscarInformacionPaciente()"
                >Buscar</button>
              </div>
            </div>
            <hr v-if="Paciente.id_paciente != ''">
            <h4 v-if="Paciente.id_paciente != ''">Informacion Paciente</h4>
            <div v-if="Paciente.id_paciente != ''" class="row">
              <div class="col-xl-3">
                <base-input type="text" :disabled="true" label="Nombre" v-model="Paciente.nombre"></base-input>
              </div>
              <div class="col-xl-3">
                <base-input
                  type="text"
                  :disabled="true"
                  label="Apellido Paterno"
                  v-model="Paciente.apematerno"
                ></base-input>
              </div>
              <div class="col-xl-3">
                <base-input
                  type="text"
                  :disabled="true"
                  label="Apellido Materno"
                  v-model="Paciente.apematerno"
                ></base-input>
              </div>
            </div>
            <div class="row" v-if="Paciente.id_paciente != ''">
              <div class="col-xl-3">
                <base-input type="text" :disabled="true" label="Sexo" v-model="Paciente.sexo"></base-input>
              </div>
              <div class="col-xl-2">
                <base-input type="number" :disabled="true" label="Edad" v-model="Paciente.edad"></base-input>
              </div>
            </div>
            <div class="row" v-if="Paciente.id_paciente != ''">
              <div class="col-xl-6">
                <div class="form-group">
                  <label>Alergias</label>
                  <textarea
                    rows="3"
                    class="form-control border-input"
                    placeholder="Alergia a medicamentos"
                    :disabled="true"
                    v-model="Paciente.alergia"
                  ></textarea>
                </div>
              </div>
            </div>
            <hr v-if="Paciente.id_paciente != ''">
            <h3 v-if="Paciente.id_paciente != ''">Detalles de la cita</h3>
            <div class="row" v-if="Paciente.id_paciente != ''">
              <div class="col-xl-3">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Servicio</label>
                  <select class="form-control" id="exampleFormControlSelect1" v-model="serv">
                    <option
                      v-for="(servicio,index) in servicios"
                      :key="servicio.id_servicio"
                      :value="index"
                    >{{servicio.nombre}}</option>
                  </select>
                </div>
              </div>
              <div class="col-xl-3">
                <base-input v-model="servicios[serv].descripcion" label="Descripcion servicio"></base-input>
              </div>
              <div class="col-xl-3">
                <base-input v-model="servicios[serv].precio" label="Precio"></base-input>
              </div>
            </div>
            <div v-if="Paciente.id_paciente != ''" class="row">
              <div class="col-xl-3">
                <base-input label="Fecha" placeholder="YYYY-MM-DD" v-model="objetoCita.fecha"></base-input>
              </div>
              <div class="col-xl-3">
                <label for="exampleFormControlSelect1">Hora</label>
                <select class="form-control" id="exampleFormControlSelect1" v-model="hor">
                  <option
                    v-for="(hora,index) in horasservicio"
                    :key="hora.hora"
                    :value="index"
                  >{{hora.hora}}</option>
                </select>
              </div>
              <div class="col-xl-2 pt-4">
                <button
                  type="submit"
                  class="btn btn-fill btn-success"
                  @click="agendarCita()"
                >Agendar</button>
              </div>
            </div>
          </card>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-1">
          <div v-if="showModal">
            <transition name="modal fade">
              <div class="modal-mask">
                <div class="modal-wrapper">
                  <div class="modal-dialog modal-sm" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <div class="row justify-content-center">
                          <div class="col-xl-12">
                            <h3>Folio Cita Generado</h3>
                          </div>
                        </div>
                      </div>
                      <div class="modal-body">
                        <div class="row justify-content-center text-center">
                            <div class="col-xl-12">
                              <h4>{{Cita.folio}}</h4>
                            </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <div class="row">
                          <div class="col-xl-12">
                            <button @click="showModal = false" class="btn btn-fill btn-info">Cerrar</button>
                          </div>
                        </div>
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
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      Paciente: {
        id_paciente: "",
        nombre: "",
        apepaterno: "",
        apematerno: "",
        sexo: "",
        edad: "",
        alergia: ""
      },
      Cita: {
        folio: ""
      },
      servicios: [],
      horasservicio: [
        {
          hora: "8:00"
        },
        {
          hora: "9:00"
        },
        {
          hora: "10:00"
        },
        {
          hora: "11:00"
        },
        {
          hora: "12:00"
        },
        {
          hora: "13:00"
        },
        {
          hora: "14:00"
        },
        {
          hora: "15:00"
        },
        {
          hora: "16:00"
        },
        {
          hora: "17:00"
        }
      ],
      objetoServicio: {
        id_servicio: "",
        nombre: "",
        descripcion: "",
        precio: ""
      },
      showModal:false,
      serv: 1,
      hor: 1,
      opcion: "",
      id_paciente: "",
      folioCita: "",
      objetoCita: {
        id_paciente: "",
        id_servicio: "",
        fecha: "",
        hora: "",
        observaciones: ""
      },
      objetoPaciente: {
        id_paciente: "",
        nombre: "",
        apepaterno: "",
        apematerno: "",
        sexo: "",
        edad: "",
        calle: "",
        colonia: "",
        codigopostal: "",
        telefono: "",
        correo: "",
        alergia: ""
      }
    };
  },
  methods: {
    buscarInformacionPaciente() {
      if (this.id_paciente > 0) {
        axios
          .get(
            "http://178.128.13.15:8001/api/Paciente/PacientePorId/" +
              this.id_paciente
          )
          .then(response => {
            if (response.data.id_paciente > 0) {
              this.Paciente = response.data;
              this.cargarServicios();
            } else {
              this.notifyVue(
                "top",
                "center",
                "No hay informacion para ese paciente",
                "danger"
              );
            }
          })
          .catch(error => {
            this.notifyVue(
              "top",
              "center",
              "Hubo un error al obtener la informacion, favor de reportarlo con el administrador",
              "danger"
            );
          });
      } else {
        this.notifyVue(
          "top",
          "center",
          "No haz capturado un numero de paciente valido",
          "warning"
        );
      }
    },

    notifyVue(verticalAlign, horizontalAlign, mensaje, color) {
      this.$notifications.notify({
        message: mensaje,
        icon: "nc-icon nc-app",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: color
      });
    },

    cargarServicios() {
      axios
        .get("http://178.128.13.15:8001/api/servicio/VerServicios")
        .then(response => {
          this.servicios = response.data;
        })
        .catch(error => {
          this.notifyVue(
            "top",
            "center",
            "Hubo un error al obtener la informacion, favor de reportarlo con el administrador",
            "danger"
          );
        });
    },

    abrirModalCobrar() {
      this.showModal = true;
    },

    agendarCita() {
      this.llenarObjetoCita();
      axios
        .post(
          "http://178.128.13.15:8001/api/Cita/InsertarCita",
          this.objetoCita
        )
        .then(response => {
          if (response.data == 2) {
            this.notifyVue(
              "top",
              "center",
              "El paciente ya cuenta con una cita registrada para ese dia",
              "warning"
            );
          } else {
            this.showModal = true
            this.Cita.folio = response.data

          }
        })
        .catch(error => {
          this.notifyVue("top", "center", "Error", "danger");
        });
    },

    llenarObjetoCita() {
      this.objetoCita.id_paciente = this.Paciente.id_paciente;
      this.objetoCita.id_servicio = this.servicios[this.serv].id_servicio;
      this.objetoCita.hora = this.horasservicio[this.hor].hora;
    },

    limpiarDatos() {
      this.objetoPaciente.id_paciente = "";
      this.objetoPaciente.nombre = "";
      this.objetoPaciente.apepaterno = "";
      this.objetoPaciente.apematerno = "";
      this.objetoPaciente.sexo = "";
      this.objetoPaciente.edad = "";
      this.objetoPaciente.calle = "";
      this.objetoPaciente.colonia = "";
      this.objetoPaciente.codigopostal = "";
      this.objetoPaciente.telefono = "";
      this.objetoPaciente.correo = "";
      this.objetoPaciente.alergia = "";
    }
  }
};
</script>
