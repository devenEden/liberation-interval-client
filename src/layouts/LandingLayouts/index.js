import React,{ useState} from 'react';
import Hero from '../../components/landing/Hero'
import { Layout,Space,Button,Modal } from 'antd';
import events from '../../assets/images/events.jpg';
import music from '../../assets/images/music.jpg';
import news from '../../assets/images/news.jpg';
import mix from '../../assets/images/mix.jpg';


const { Content } = Layout;

const LandingLayout = () => {
    const [openEventsModal, setOpenEventsModal ] = useState(false);
    const [openMusicModal, setOpenMusicModal ] = useState(false);
    const [openNewsModal, setOpenNewsModal ] = useState(false);
    const [openMixModal, setOpenMixModal ] = useState(false);
    const [openAboutModal, setOpenAboutModal ] = useState(false);

    const showEventsModal = () => {
        setOpenEventsModal(true);
    };
  
    const handleEventsCancel = () => {
        setOpenEventsModal(false);
    };
    const showMusicModal = () => {
        setOpenMusicModal(true);
    };
  
    const handleMusicCancel = () => {
        setOpenMusicModal(false);
    };
    const showNewsModal = () => {
        setOpenNewsModal(true);
    };
  
    const handleNewsCancel = () => {
        setOpenNewsModal(false);
    };

    const showMixModal = () => {
        setOpenMixModal(true);
    };
  
    const handleMixCancel = () => {
        setOpenMixModal(false);
    };

    const showAboutModal = () => {
        setOpenAboutModal(true);
    };
  
    const handleAboutCancel = () => {
        setOpenAboutModal(false);
    };
  
    return (
        <div className='bgDarkGray' >
            <Content data-aos="fade-up"
                     data-aos-duration="2000"
                     className='content'>
                <Hero data-aos="zoom-in" />
                <div className="contentNav">
                <Space xs={{ direction:'vertical'}}>
                <Button onClick={showEventsModal} id='btn' >Events</Button>
                <Modal footer={null} 
                       onCancel={handleEventsCancel} 
                       visible={openEventsModal} 
                       title='Events'>
                           <div className="imageHolder">
                           <img src={events} alt="events"/>
                           </div>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut soluta veniam, porro quas et adipisci vero corrupti. Cumque enim molestiae, labore harum et voluptatem reiciendis consequuntur dolorum beatae, asperiores Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptatibus minus doloremque minima, dolore molestiae? Aperiam debitis molestias eum voluptas officia. Expedita sint optio commodi voluptates eaque molestias blanditiis deleniti.
                </Modal>
                <Button onClick={showMusicModal} id='btn' >Music</Button>
                <Modal footer={null} 
                       onCancel={handleMusicCancel} 
                       visible={openMusicModal} 
                       title='Music'>
                           <div className="imageHolder">
                           <img src={music} alt="music"/>
                           </div>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut soluta veniam, porro quas et adipisci vero corrupti. Cumque enim molestiae, labore harum et voluptatem reiciendis consequuntur dolorum beatae, asperiores Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptatibus minus doloremque minima, dolore molestiae? Aperiam debitis molestias eum voluptas officia. Expedita sint optio commodi voluptates eaque molestias blanditiis deleniti.
                </Modal>
                <Button onClick={showNewsModal} id='btn' >News</Button>
                <Modal footer={null} 
                       onCancel={handleNewsCancel} 
                       visible={openNewsModal} 
                       title='Entertainment News'>
                           <div className="imageHolder">
                           <img src={news} alt="music"/>
                           </div>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut soluta veniam, porro quas et adipisci vero corrupti. Cumque enim molestiae, labore harum et voluptatem reiciendis consequuntur dolorum beatae, asperiores Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptatibus minus doloremque minima, dolore molestiae? Aperiam debitis molestias eum voluptas officia. Expedita sint optio commodi voluptates eaque molestias blanditiis deleniti.
                </Modal>
                <Button onClick={showMixModal} id='btn' >MixTapes</Button>
                <Modal footer={null} 
                       onCancel={handleMixCancel} 
                       visible={openMixModal} 
                       title='DJ Mix Tapes'>
                           <div className="imageHolder">
                           <img src={mix} alt="music"/>
                           </div>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut soluta veniam, porro quas et adipisci vero corrupti. Cumque enim molestiae, labore harum et voluptatem reiciendis consequuntur dolorum beatae, asperiores Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptatibus minus doloremque minima, dolore molestiae? Aperiam debitis molestias eum voluptas officia. Expedita sint optio commodi voluptates eaque molestias blanditiis deleniti.
                </Modal>
                <Button onClick={showAboutModal} id='btn' >About</Button>
                <Modal footer={null} 
                       onCancel={handleAboutCancel} 
                       visible={openAboutModal} 
                       title='About'>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut soluta veniam, porro quas et adipisci vero corrupti. Cumque enim molestiae, labore harum et voluptatem reiciendis consequuntur dolorum beatae, asperiores Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptatibus minus doloremque minima, dolore molestiae? Aperiam debitis molestias eum voluptas officia. Expedita sint optio commodi voluptates eaque molestias blanditiis deleniti.
                </Modal>
                </Space>
                </div>
            </Content>
        </div>
    )
}

export default LandingLayout;
