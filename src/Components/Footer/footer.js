import React from 'react';

class Footer extends React.Component{
    render(){
        return ( 
            <> 
                <footer className="main-footer">
                    <strong>Copyright &copy; 2022-2023 Apollo Tech.</strong>
                    All rights reserved.
                    <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b> 0.0.1
                    </div>
                </footer> 
            </>
        )}
}
export default Footer;