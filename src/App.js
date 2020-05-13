import React from 'react';
import './App.scss';
import Button from './components/button';
import News from './components/news';
import Card from './components/card';
import Info from './components/info';

const logo = <svg t="1589350668877" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7289"><path d="M899.6 117c9.9 7.1 13.8 16.7 12 28.5L797.3 831.2c-1.5 8.6-6.3 15.3-14.3 20.1-4.1 2.3-8.8 3.6-13.8 3.6-3.3 0-6.9-0.8-10.7-2.3L556.3 770 448.2 901.8c-5.4 6.9-12.7 10.2-21.9 10.2-3.8 0-7.1-0.6-9.9-1.8-5.6-2.1-10.2-5.5-13.6-10.5-3.4-4.9-5.2-10.3-5.2-16.3V727.7l385.7-472.8-477.2 413-176.3-72.3c-11-4.1-17-12.3-17.8-24.6-0.6-11.9 4.1-20.7 14.3-26.4L869.1 116c4.5-2.7 9.2-4 14.3-4 6 0 11.4 1.7 16.2 5z" fill="#4280dc" p-id="7290"></path></svg>

function App() {
  return (
    <div className="App">
        <header>
           <div className='menu-list'>
             <ul className='menu-list'>
               <li>关于我们</li>
               <li>事业内容</li>
             </ul>
           </div>
           <div className='logo'>
             {logo}
           </div>
           <div className='menu-list'>
           <ul className='menu-list'>
               <li>公司资料</li>
               <li>采用情报</li>
             </ul>
           </div>
           <div className='contact-btn'>
             <Button value='联系我们' />
           </div>
        </header>
        <div className='body'>
            <div className='home'>
               <div className='compony-name'>
                 <div><span>S</span>oftware</div>
                 <div><span>T</span>oTal</div>
                 <div><span>S</span>ervice</div>
               </div>
            </div>
            <div className='section-1'>
               <div className='title'>
                 <span>
                   Information
                 </span>
               </div>
               <div class='content'>
                 <ul>
                   <li>
                     <span className='time'>2020.05.07</span>
                     <span className='text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </span>
                   </li>
                   <li>
                     <span className='time'>2020.05.09</span>
                     <span className='text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </span>
                   </li>
                   <li>
                     <span className='time'>2020.07.09</span>
                     <span className='text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </span>
                   </li>
                 </ul>
               </div>
               <div className='btn'>
                 <Button value='VIEW MORE' />
               </div>

            </div>

            <div className='section-2'>
               <div className='sec2-left'>
                 <div className='title'>
                    <div className='en'>About us</div>
                    <div className='ch'>关于我们</div>
                 </div>
                 <div className='btn'>
                    <Button value='详情' />
                 </div>
               </div>
               <div className='sec2-right'>
                 <News 
                     title='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
                     content='Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. '
                  />
               </div>
            </div>

            <div class='section-3'>
               <div className='title'>
                 Service
               </div>
               <div className='content'>
                 <div className='pic'>
                    <img src={require('./img/pexels-photo-1665722.jpeg')} alt='' />
                 </div>
                 <div className='introduction'>
                 <News 
                     title='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
                     content='Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. '
                  />
                   <Button value='详情' />
                 </div>
               </div>
               <div className='content'>
                 <div className='introduction'>
                 <News 
                     title='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
                     content='Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. '
                  />
                   <Button value='详情' />
                 </div>
                 <div className='pic'>
                    <img src={require('./img/pexels-photo-1755195.jpeg')} alt='' />
                 </div>
               </div>
            </div>
            <div className='section-4'>
              <div className='title'>
                Company
              </div>
              <div className='lists'>

              </div>
            </div>
            <div className='section-5'>
               <div className='sec5-left'>
                 <Info en='Recruit' ch='公司信息' content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' />
               </div>
               <div className='sec5-right'>
                 <Info en='Contact' ch='联系我们' content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' />
               </div>
            </div>
            <div className='footer'>
              
            </div>
        </div>
    </div>
  );
}

export default App;

