import React from 'react'
import './Dashboard.css'
import LineChart from "./components/LineChart"
// import AreaChart from './components/Charts/LineChart'
import DonutChart from './components/DonutChart'
import ProjectCard from './components/ProjectCard'
import ColorData from './components/ColorData'
import Topbar from './components/Topbar'
import TopCard from './components/TopCard'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
const Dashboard = () => {
   
  return (
    <>
      <body id="page-top">

{/* //<!-- Page Wrapper --> */}
<div id="wrapper">

    {/* //<!-- Sidebar --> */}
    <Sidebar/>

    {/* //<!-- Content Wrapper --> */}
    <div id="content-wrapper" className="d-flex flex-column">

        {/* //<!-- Main Content --> */}
        <div id="content">

            {/* //<!-- Topbar --> */}
            {/* <nav > */}

                <Topbar/>

            {/* </nav> */}
            {/* //<!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">

                {/* //<!-- Page Heading --> */}
                <TopCard/>
                {/* //<!-- Content Row --> */}

                <div className="row">

                    {/* //<!-- Area Chart --> */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            {/* //<!-- Card Header - Dropdown --> */}
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                <div className="dropdown no-arrow">
                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                        aria-labelledby="dropdownMenuLink">
                                        <div className="dropdown-header">Dropdown Header:</div>
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            {/* //<!-- Card Body --> */}
                            <div className="card-body">
                                <div className="chart-area" >
                                    <LineChart/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* //<!-- Pie Chart --> */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                            {/* //<!-- Card Header - Dropdown --> */}
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                <div className="dropdown no-arrow">
                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                        aria-labelledby="dropdownMenuLink">
                                        <div className="dropdown-header">Dropdown Header:</div>
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            {/* //<!-- Card Body --> */}
                            <div className="card-body">
                                <div className="chart-pie pt-4 pb-2">
                                    <DonutChart/>
                                </div>
                                <div className="mt-4 text-center small">
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-primary"></i> Direct
                                    </span>
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-success"></i> Social
                                    </span>
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-info"></i> Referral
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* //<!-- Content Row --> */}
                <div className="row">

                    {/* //<!-- Content Column --> */}
                    <div className="col-lg-6 mb-4">

                        {/* //<!-- Project Card Example --> */}
                        {/* <div className="card shadow mb-4"> */}
                         
                               <ProjectCard/>
                            
                        {/* </div> */}

                        {/* //<!-- Color System --> */}
                                <ColorData/>

                    </div>

                    <div className="col-lg-6 mb-4">

                        {/* //<!-- Illustrations --> */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 a2" 
                                        src="img/undraw_posting_photo.svg" alt="..."/>
                                </div>
                                <p>Add some quality, svg illustrations to your project courtesy of <a
                                        target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                                    constantly updated collection of beautiful svg images that you can use
                                    completely free and without attribution!</p>
                                <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                    unDraw &rarr;</a>
                            </div>
                        </div>

                        {/* //<!-- Approach --> */}
                        <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
                                </div>
                                <div class="card-body">
                                    <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                                        CSS bloat and poor page performance. Custom CSS classes are used to create
                                        custom components and custom utility classes.</p>
                                    <p class="mb-0">Before working with this theme, you should become familiar with the
                                        Bootstrap framework, especially the utility classes.</p>
                                </div>
                            </div>

                    </div>
                </div>

            </div>
            {/* //<!-- /.container-fluid --> */}

        </div>
        {/* //<!-- End of Main Content --> */}

       <Footer/>

    </div>
    {/* //<!-- End of Content Wrapper --> */}

</div>
{/* //<!-- End of Page Wrapper --> */}

{/* //<!-- Scroll to Top Button--> */}
<a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up"></i>
</a>

{/* //<!-- Logout Modal--> */}
<div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a className="btn btn-primary" href="login.html">Logout</a>
            </div>
        </div>
    </div>
</div>



</body>
    </>
  )
}

export default Dashboard
