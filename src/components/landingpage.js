import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              class="avatar-img" width="23%" height="100%"
              />
            <div className="banner-text">
              <h1>BusTec</h1>

                <p>Una app para alumnos y maestros de Tecsup</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
