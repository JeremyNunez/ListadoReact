import React, { Component } from 'react';


class About extends Component {
  render() {
    return(
      <div>
      <p>Listado</p>
      <p></p>
      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Placa del bus</th>
      <th scope="col">Conductor</th>
      <th scope="col">Ruta</th>
      <th scope="col">Descripción </th>
      <th scope="col">Horario</th>
      <th scope="col">Acciones</th>
      

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">B6L-123</th>
      <td>Marcos</td>
      <td>Tecsup-U. Lima</td>
      <td>ASD</td>
      <td>6:00 pm</td>
      <td button class="btn btn-success">Editar</td>
      <td button class="btn btn-danger">Borrar</td>


    </tr>
    <tr>
      <th scope="row">J3D-343</th>
      <td>Mario</td>
      <td>Tecsup - Mega Plaza</td>
      <td>ASD</td>
      <td>6:00 pm</td>
      <td button class="btn btn-success">Editar</td>
      <td button class="btn btn-danger">Borrar</td>
    </tr>

  </tbody>
</table>

      </div>
    )
  }
}

export default About;
