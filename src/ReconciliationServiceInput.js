
import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Col from 'react-bootstrap/lib/Col';
import fetchJsonp from 'fetch-jsonp';

export default class ReconciliationServiceInput extends React.Component {

  constructor() {
     super();
     this.state = {
        endpoint: '',
        manifest: undefined
     };
  }

  componentWillMount() {
     this.timer = null;
  }

  setService(endpoint, manifest) {
     this.setState({
        endpoint: endpoint,
        manifest: manifest,
     });
  }

  handleChange(e) {
     clearTimeout(this.timer);

     this.setState({
        endpoint: e.target.value,
        error: undefined
     });
 
     this.timer = setTimeout(() => this.validateEndpoint(), 1000);
  }

  validateEndpoint() {
     let endpoint = this.state.endpoint;
     fetchJsonp(endpoint)
      .then(result => result.json())
      .then(result => this._setManifest(endpoint, result))
      .catch(e => this._setError(endpoint, e));
  }

  _setManifest(endpoint, manifest) {
    if(this.state.endpoint === endpoint) {
        this.setState({
          endpoint: endpoint,
          manifest: manifest
        });
    }
  }

  _setError(endpoint, error) {
    if(this.state.endpoint === endpoint) {
      this.setState({manifest: undefined, error: error})
    }
  }
  
  getValidationState() {
     if (this.state.manifest !== undefined) {
        return 'success';
     } else if(this.state.error !== undefined) {
        return 'error';
     }
     return null;
  }

  render() {
     return (
        <Form horizontal>
          <FormGroup controlId="endpointField" validationState={this.getValidationState()}>
            <Col componentClass={ControlLabel} sm={1}>Endpoint:</Col>
            <Col sm={10}>
                <FormControl type="text" value={this.state.endpoint} placeholder="URL of the reconciliation service endpoint" onChange={e => this.handleChange(e)}/>
                <FormControl.Feedback />
                <HelpBlock>The endpoint must return a JSONP document describing the service.</HelpBlock>
            </Col>
          </FormGroup>
        </Form>
     );
  }
}
