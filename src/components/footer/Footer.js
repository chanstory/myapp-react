import React, { Component } from 'react';

import './Footer.css';

const propTypes = {
};
const defaultProps = {
};
class Footer extends Component {
    render() {
        return(
            <footer className="py-4 bg-dark">
              <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; 태찬컴퓨터 2020</p>
              </div>
              {/*.container end*/}
            </footer>
        );
    }
}
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
export default Footer;
