import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Grid, Row, Col, Image, PageHeader, Panel, Button } from 'react-bootstrap'
import { AddModal } from '../components/Modal/Modal'

import { getUserProfile } from '../actions/api'

class MyProfileContainer extends Component {
  constructor(props) {
    super(props)

    // State variables to be tracked in the component
    this.state = {
      showModal: false,
      type: '',
      addValue: ''
    }

    // ADD FUNCTION BINDINGS HERE

  }

  componentDidMount() {

    // ADD CHECK FOR USER QUERY PARAMETER HERE

  }

  // ADD FUNCTION TO HANDLE OPENING THE MODAL HERE (with "type" variable)
  handleModalOpen(type) { }

  // ADD FUNCTION TO HANDLE CLOSING THE MODAL HERE
  handleModalClose() { }

  // ADD FUNCTION TO TRACK TEXT CHANGES HERE (with event variable)
  handleTextChange(e) { }

  // ADD FUNCTION TO HANDLE SUBMITTING "ADD" FORM HERE
  handleAddSubmit() { }

  render() {
    return (
      <div>
        <Grid>
          <PageHeader>
            Anderson Moffitt and Blake Robinson
          </PageHeader>

        <Row className="show-grid">
            <PageHeader>
              Pac-Man
          </PageHeader>
            <iframe style={{ height: '400px', width: '1000px' }} src='https://www.google.com/logos/2010/pacman10-i.html'></iframe>

            {/* Include all sections in the following column */}
            <Col xs={12}>

              {/* ADD HEADER FOR SECTION HERE */}

              {/* ADD PANEL FOR SECTION INFORMATION WITH LIST HERE */}

              {/* ADD BUTTON FOR ADDITIONAL INFORMATION HERE */}

            </Col>
          </Row>
          <Row className="show-grid valign-wrapper">
            <Col xs={12} md={8} lg={4}>
              {/* ADD PROFILE IMAGE HERE */}
              {/* <Image src="/assets/images/person-plaeholder.jpg" thumbnail/> */}
            </Col>
            <Col xs={12} md={4} lg={8}>
              {/* ADD PAGE HEADER WITH NAME AND ABOUT ME HEADINGS HERE */}
              <PageHeader>
                {/* Snake Game */}
              <br />
              </PageHeader>
              {/* A simple snake game */}
              {/* ADD ABOUT ME DESCRIPTION HERE */}
              {/* <iframe src="https://codepen.io/CaioPaiola/pen/GFpuK" width="1000" height="1000" scrolling="no"></iframe> */}

            </Col>
          </Row>
          <Row className="show-grid">
            <PageHeader>
              Diablo
          </PageHeader>
            <iframe style={{ height: '800px', width: '1000px' }} src='http://mitallast.github.io/diablo-js/'></iframe>

            {/* Include all sections in the following column */}
            <Col xs={12}>

              {/* ADD HEADER FOR SECTION HERE */}

              {/* ADD PANEL FOR SECTION INFORMATION WITH LIST HERE */}

              {/* ADD BUTTON FOR ADDITIONAL INFORMATION HERE */}

            </Col>
          </Row>
          <Row className="show-grid">
            <PageHeader>
              T-Rex game
          </PageHeader>
            <iframe style={{ height: '800px', width: '1000px' }} src='https://apps.thecodepost.org/trex/trex.html'></iframe>

            {/* Include all sections in the following column */}
            <Col xs={12}>

              {/* ADD HEADER FOR SECTION HERE */}

              {/* ADD PANEL FOR SECTION INFORMATION WITH LIST HERE */}

              {/* ADD BUTTON FOR ADDITIONAL INFORMATION HERE */}

            </Col>
          </Row>
          <Row className="show-grid">
            <PageHeader>
              Snake game
          </PageHeader>
            <iframe style={{ height: '800px', width: '1000px' }} src='https://codepen.io/CaioPaiola/pen/GFpuK'></iframe>

            {/* Include all sections in the following column */}
            <Col xs={12}>

              {/* ADD HEADER FOR SECTION HERE */}

              {/* ADD PANEL FOR SECTION INFORMATION WITH LIST HERE */}

              {/* ADD BUTTON FOR ADDITIONAL INFORMATION HERE */}

            </Col>
          </Row>
          
        </Grid>

        {/* ADD MODAL HERE */}

      </div>
    )
  }
}

// Uses withRouter to grab query paramters in URL (ex: http://localhost:3000?user=1 where user is the query parameter)
export default withRouter(MyProfileContainer)