import React from "react";
import { CourseData } from "../Data/CourseData";

function MainContent() {
  return (
    <>
      <div className="">
            <div className="info-blocks">
                <div className="row">
                    <div className="col-12 top-info">
                        <h5 className="top-title">Sessions</h5>
                        <h5 className="top-title">Status</h5>
                        <h5 className="top-title">Course Name</h5>
                        <h5 className="top-title">Begin Date</h5>
                        <h5 className="top-title">End Date</h5>
                        <h5 className="top-title">Registrants</h5>
                        <h5 className="top-title">Trainers</h5>
                        <h5 className="top-title">Certificate</h5>
                    </div>
                        {CourseData.Course.map((item,index)=>{
                                return(
                                    <>
                    <div className="col-12 down-info" key={index}>
                    <div classname='down-data'>
                      <a href="" className="navImgs"><img className="dataIcon" src={item.img1}/>{item.imgtitle}</a>
                        </div>
                        <div classname='down-data'>
                        <a href="" className="navImgs"><img className="dataImg" src={item.img2}/>{item.imgtitle2}</a>
                        </div>
                        <div classname='down-data' id='Coursenmae'>
                        <h6 className="dataValue">{item.CourseName}</h6>
                        </div>
                        <div classname='down-data'>                        
                            <h6 className="dataValue">{item.BeginDate}</h6>
                        </div>
                        <div classname='down-data'>
                            <h6 className="dataValue">{item.EndDate}</h6>
                            </div>
                        <div classname='down-data'>
                            <h6 className="dataValue">{item.Registrants}</h6>
                        </div>
                        <div classname='down-data'>
                            <div className="dataimgs">
                        <img className="overlayImg1" src={item.Trainers1}/>
                        <img className="overlayImg2" src={item.Trainers2}/>
                        <img className="overlayImg3" src={item.Trainers3}/>
                        <img className="overlayImg4" src={item.Trainers4}/>
                            </div>
                        </div>
                        <div classname='down-data'>
                        <h6 className="dataValues">{item.Certificate}</h6>
                        </div>
                        <div classname='down-data'>
                        <img className="dataIcon" src={item.img3} />
                            
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                        </div>

                        
                    </div>  
                                    </>
                                )
                        })}
                       

            </div>
          </div>
        </div>
    </>
  );
}

export default MainContent;
