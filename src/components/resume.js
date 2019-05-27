import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';




class Resume extends Component {
  render() {
    return(
  <form>
  <h2>Buses</h2>
  <p>______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</p>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="text" class="form-control" id="nombre" placeholder="Nombre del Conductor"/>
    </div>
    <div class="form-group col-md-6">
      <input type="text" class="form-control" id="placa" placeholder="Placa del bus"/>
    </div>
     <div class="form-group col-md-6">
      <input type="text" class="form-control" id="ruta" placeholder="Ruta del bus"/>
    </div>
  </div>
  <h2>Ruta</h2>
  <div class="form-group">
    <input type="text" class="form-control" id="desc" placeholder="Descripción"/>
  </div>
      <h2>Horarios</h2>
  <div class="form-row">
    <div class="form-group col-md-4">
      <select id="inputState" class="form-control">
        <option selected>Escoger..</option>
        <option>Mañana</option>
        <option>Tarde</option>
        <option>Noche</option>
      </select>
    </div>
    <div class="form-group col-md-4">
      <select id="inputState" class="form-control">
        <option selected>Hora..</option>
        <option>12:00 pm</option>
        <option>6:00 pm</option>
        <option>9:25 pm</option>
      </select>
    </div>
  </div>

  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
         )
  }
}

export default Resume;
