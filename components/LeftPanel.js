import { Component } from 'react';

class LeftPanel extends Component {
  render() {
    return (
     
      <aside id="left-panel" className="borsetta left-panel">
     
        <nav className="navbar navbar-expand-sm navbar-default">
            <div className="navbar-header">
            
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="./"><img className="borsetta-logo" src="static/images/borsetta_logo.svg" alt="Logo"/></a>
                <a className="navbar-brand hidden" href="./"><img className="borsetta-icon" src="static/images/borsetta_icon.svg" alt="Logo"/></a>
            </div>

            <div id="main-menu" className="main-menu collapse navbar-collapse">
                <ul className="nav navbar-nav">

                    <h3 className="menu-title">
                      <div className="row"> 
                        <div className="col-sm-3 pull-right">
                              <img className="user-avatar rounded-circle" src="https://picsum.photos/200/300/?random" alt="User Avatar"/>
                        </div>
                        <div className="col-sm-9 pull-left">
                          <div className="avatar-label">
                            <p><small>Username</small></p>
                            <h6>Lucent Diamonds</h6>
                          </div>
                        </div>
                      </div>
                    </h3>

                    <hr />

                    <li className="active">
                        <a href="/"> <i className="menu-icon fas fa-tachometer-alt"></i>Dashboard </a>
                    </li>

                    <h3 className="menu-title">Activities &amp; Services</h3>

                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fas fa-tags"></i>MarketPlace</a>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fas fa-briefcase"></i>Business Services</a>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon far fa-gem"></i>Titling and Tracking</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fas fa-file-invoice-dollar"></i><a href="#">Title Assets</a></li>
                            <li><i className="menu-icon fas fa-file-alt"></i><a href="forms-basic.html">Title Memo Assets</a></li>
                            <li><i className="menu-icon fas fa-layer-group"></i><a href="forms-advanced.html">All Title Assets</a></li>
                        </ul>
                    </li>

                    <h3 className="menu-title">Finance &amp; Data</h3>

                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-tasks"></i>Contracts</a>
                    </li>
                    <li>
                        <a href="#"> <i className="menu-icon ti-email"></i>Wallet</a>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-bar-chart"></i>Inventory</a>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-area-chart"></i>Account</a>
                    </li>
                </ul>
            </div>
        </nav>
    </aside>
    )
  }
}

export default LeftPanel;