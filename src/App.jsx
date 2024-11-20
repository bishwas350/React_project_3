import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './component/Container'
import Image from './component/Image'
import Logo from './assets/image/Logo.png'
import Flex from './component/Flex'
import Menu from './component/Menu'
import Button from './component/Button'
import Banner from './assets/image/Banner.png'
import Heading from './component/Heading'
import online_Logo from './assets/image/onlineLogo.png'
import online_Logo_2 from './assets/image/onlineLogo2.png'
import online_Logo_3 from './assets/image/onlineLogo3.png'
import online_Logo_4 from './assets/image/onlineLogo4.png'
import Join from './assets/image/joinUs.png'
import populer_1 from './assets/image/populer_1.png'
import { FaStar } from "react-icons/fa";
import student from './assets/image/Student.png'
import das from './assets/image/dash.png'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Menu part start  */}
      <div className="py-5 ">
        <Container>
          <Flex className={'justify-between'}>
            <div className="">
              <Image imgSrc={Logo} />
            </div>
            <div className="font-pop text-menuColor text-[22px] leading-[150%] ">
              <Flex className={'space-x-10'}>
                <Menu mText={'Home'} className={''} />
                <Menu mText={'Course '} />
                <Menu mText={'Monitors'} />
                <Menu mText={'About'} />
              </Flex>
            </div>
            <div className="">
              <Button bText={'Get Started'} className={'px-[29px] py-[16px] bg-buttonColor text-buttonTextColor leading-[150%] font-pop font-semibold text-[20px] rounded-3xl'} />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Menu part End  */}
      {/* Banner Part Start  */}
      <div className="Banner_Part">
        <Container>
          <div className="pt-[86px]">
            <Image imgSrc={Banner} />
          </div>
        </Container>
      </div>
      {/* Banner Part End  */}
      {/* Counter Part start  */}
      <div className="Counter_Part pt-[180px] ">
        <Container className={' py-4 bg-counterColor max-w-full '}>
          <Flex className={'justify-between'}>
            <div className="pt-[50px] pl-[100px] border-r border-white pr-[100px]">
              <Heading as={'h5'} text={'8200'} className={'font-kar leading-[125%] font-bold text-[30px] text-white'} />
              <Heading as={'p'} text={'Success Stories'} className={'font-pop leading-[150%]  text-[20px] text-white'} />
            </div>
            <div className="pt-[50px] pl-[100px] border-r border-white pr-[100px]">
              <Heading as={'h5'} text={'12200'} className={'font-kar leading-[125%] font-bold text-[30px] text-white'} />
              <Heading as={'p'} text={'Expert Mentors'} className={'font-pop leading-[150%]  text-[25p0] text-white'} />
            </div>
            <div className="pt-[50px] pl-[100px] border-r border-white pr-[100px]">
              <Heading as={'h5'} text={'50000'} className={'font-kar leading-[125%] font-bold text-[30px] text-white'} />
              <Heading as={'p'} text={'Hours  Course'} className={'font-pop leading-[150%]  text-[25px0 text-white'} />
            </div>
            <div className="pt-[50px] pl-[100px] border-r border-white pr-[100px]">
              <Heading as={'h5'} text={'70000'} className={'font-kar leading-[125%] font-bold text-[30px] text-white'} />
              <Heading as={'p'} text={'Active Student'} className={'font-pop leading-[150%]  text-[25p0] text-white'} />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Counter Part End  */}
      {/* Online Education Part start  */}
      <div className="pt-[120px]">
        <Container>
          <div className="text-center">
            <Heading as={"h4"} text={'Benefits of online Education  '} className={'font-kar font-bold text-[60px] leading-[125%] text-onlineColor'} />
            <Heading as={"p"} text={'It is a long established fact that a reader will be distracted by the readable content of a page when looking '} className={'font-pop font-medium text-[22px] leading-[150%] text-onlineColor2 max-w-[681px] inline-block'} />
          </div>
          <div className="pt-[76px]">
            <Flex className={'gap-5  '}>
              <div className="p-[26px] shadow-xl  rounded-2xl">
                <Image imgSrc={online_Logo} />
                <Heading as={'h4'} text={'One on One Monitor'} className={'font-kar font-bold text-[30px] leading-[125%] text-onlineColor pb-[20px]'} />
                <Heading as={'p'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting'} className={'font-pop text-[22px] leading-[150%] text-onlineColor2  w-[278px]'} />
              </div>
              <div className="p-[26px] shadow-xl   rounded-2xl">
                <Image imgSrc={online_Logo_2} />
                <Heading as={'h4'} text={'24/7 Mentor '} className={'font-kar font-bold text-[30px] leading-[125%] text-onlineColor pb-[20px]'} />
                <Heading as={'p'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting'} className={'font-pop text-[22px] leading-[150%] text-onlineColor2  w-[278px]'} />
              </div>
              <div className="p-[26px] shadow-xl   rounded-2xl">
                <Image imgSrc={online_Logo_3} />
                <Heading as={'h4'} text={'Whiteboard'} className={'font-kar font-bold text-[30px] leading-[125%] text-onlineColor pb-[20px]'} />
                <Heading as={'p'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting'} className={'font-pop text-[22px] leading-[150%] text-onlineColor2  w-[278px]'} />
              </div>
              <div className="p-[26px] shadow-xl   rounded-2xl">
                <Image imgSrc={online_Logo_4} />
                <Heading as={'h4'} text={'One on One Monitor'} className={'font-kar font-bold text-[30px] leading-[125%] text-onlineColor pb-[20px]'} />
                <Heading as={'p'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting'} className={'font-pop text-[22px] leading-[150%] text-onlineColor2  w-[278px]'} />
              </div>
            </Flex>

          </div>
        </Container>
      </div>
      {/* Online Education Part End  */}
      {/* juin us part start  */}
      <div className="pt-[120px]">
        <Container>
          <div className="">
            <Image imgSrc={Join} />
          </div>
        </Container>
      </div>
      {/* juin us part end  */}
      {/* Our Popular Course part start  */}
      <div className="pt-[120px]">
        <Container>
          <div className=" text-center">
            <Heading as={'h4'} text={'Our Popular Course'} className={'font-robo font-bold text-populerColor text-[60px] leading-[125%]'} />
            <Heading as={'p'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th '} className={'font-pop font-medium text-[22px] leading-[150%] text-populerColor2 max-w-[700px] inline-block'} />
          </div>
          <Flex className={'flex-wrap gap-6 pt-[77px]'}>
          <div className="max-w-[420px] shadow-2xl rounded-xl ">
            <Flex>
              <div className="">
                <Image imgAlt={populer_1} imgSrc={populer_1} />
                <div className="pt-[35px] pl-[45px] pb-[27px] ">
                  <Heading as={'h4'} text={'Web Design  Basic to advance'} className={'font-robo font-bold text-[25px] text-populerColor leading-[125%]'} />
                  <Flex className={'pt-[39px] gap-4 pb-[40px]'}>
                    <FaStar className= {'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <span className={'font-pop font-medium text-[15px] leading-[150%] text-menuColor '}>5.0 (2 rating)</span>
                  </Flex>
                  <Button bText={'Add to Cart'} className={'px-[109px] py-[11px] bg-borderColor rounded-lg font-pop font-semibold text-whi text-[22px] leading-[150%]'}/>
                </div>
              </div>
            </Flex>
          </div>
          <div className="max-w-[420px] shadow-2xl rounded-xl ">
            <Flex>
              <div className="">
                <Image imgAlt={populer_1} imgSrc={populer_1} />
                <div className="pt-[35px] pl-[45px] pb-[27px] ">
                  <Heading as={'h4'} text={'Web Design  Basic to advance'} className={'font-robo font-bold text-[25px] text-populerColor leading-[125%]'} />
                  <Flex className={'pt-[39px] gap-4 pb-[40px]'}>
                    <FaStar className= {'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <span className={'font-pop font-medium text-[15px] leading-[150%] text-menuColor '}>5.0 (2 rating)</span>
                  </Flex>
                  <Button bText={'Add to Cart'} className={'px-[109px] py-[11px] bg-borderColor rounded-lg font-pop font-semibold text-whi text-[22px] leading-[150%]'}/>
                </div>
              </div>
            </Flex>
          </div>
          <div className="max-w-[420px] shadow-2xl rounded-xl ">
            <Flex>
              <div className="">
                <Image imgAlt={populer_1} imgSrc={populer_1} />
                <div className="pt-[35px] pl-[45px] pb-[27px] ">
                  <Heading as={'h4'} text={'Web Design  Basic to advance'} className={'font-robo font-bold text-[25px] text-populerColor leading-[125%]'} />
                  <Flex className={'pt-[39px] gap-4 pb-[40px]'}>
                    <FaStar className= {'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <span className={'font-pop font-medium text-[15px] leading-[150%] text-menuColor '}>5.0 (2 rating)</span>
                  </Flex>
                  <Button bText={'Add to Cart'} className={'px-[109px] py-[11px] bg-borderColor rounded-lg font-pop font-semibold text-whi text-[22px] leading-[150%]'}/>
                </div>
              </div>
            </Flex>
          </div>
          <div className="max-w-[420px] shadow-2xl rounded-xl ">
            <Flex>
              <div className="">
                <Image imgAlt={populer_1} imgSrc={populer_1} />
                <div className="pt-[35px] pl-[45px] pb-[27px] ">
                  <Heading as={'h4'} text={'Web Design  Basic to advance'} className={'font-robo font-bold text-[25px] text-populerColor leading-[125%]'} />
                  <Flex className={'pt-[39px] gap-4 pb-[40px]'}>
                    <FaStar className= {'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <span className={'font-pop font-medium text-[15px] leading-[150%] text-menuColor '}>5.0 (2 rating)</span>
                  </Flex>
                  <Button bText={'Add to Cart'} className={'px-[109px] py-[11px] bg-borderColor rounded-lg font-pop font-semibold text-whi text-[22px] leading-[150%]'}/>
                </div>
              </div>
            </Flex>
          </div>
          <div className="max-w-[420px] shadow-2xl rounded-xl ">
            <Flex>
              <div className="">
                <Image imgAlt={populer_1} imgSrc={populer_1} />
                <div className="pt-[35px] pl-[45px] pb-[27px] ">
                  <Heading as={'h4'} text={'Web Design  Basic to advance'} className={'font-robo font-bold text-[25px] text-populerColor leading-[125%]'} />
                  <Flex className={'pt-[39px] gap-4 pb-[40px]'}>
                    <FaStar className= {'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <span className={'font-pop font-medium text-[15px] leading-[150%] text-menuColor '}>5.0 (2 rating)</span>
                  </Flex>
                  <Button bText={'Add to Cart'} className={'px-[109px] py-[11px] bg-borderColor rounded-lg font-pop font-semibold text-whi text-[22px] leading-[150%]'}/>
                </div>
              </div>
            </Flex>
          </div>
          <div className="max-w-[420px] shadow-2xl rounded-xl ">
            <Flex>
              <div className="">
                <Image imgAlt={populer_1} imgSrc={populer_1} />
                <div className="pt-[35px] pl-[45px] pb-[27px] ">
                  <Heading as={'h4'} text={'Web Design  Basic to advance'} className={'font-robo font-bold text-[25px] text-populerColor leading-[125%]'} />
                  <Flex className={'pt-[39px] gap-4 pb-[40px]'}>
                    <FaStar className= {'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <FaStar className={'text-starColor'}/>
                    <span className={'font-pop font-medium text-[15px] leading-[150%] text-menuColor '}>5.0 (2 rating)</span>
                  </Flex>
                  <Button bText={'Add to Cart'} className={'px-[109px] py-[11px] bg-borderColor rounded-lg font-pop font-semibold text-whi text-[22px] leading-[150%]'}/>
                </div>
              </div>
            </Flex>
          </div>
          </Flex>
          <div className="text-center pt-[50px] ">
            <Button bText={'See More'} className={'px-[45px] py-[16px] bg-buttonColor font-pop font-semibold text-[20px] leading-[150%] rounded-3xl'}/>
          </div>
        </Container>
      </div>
      {/* Our Popular Course part end  */}
      {/* student part start  */}
      <div className="">
        <Container>
          <div className="pt-[120px]">
            <Image imgSrc={student}/>
          </div>
        </Container>
      </div>
      {/* student part end  */}
      {/* Dashbord Part Start  */}
      <div className="py-5 bg-counterColor">
        <Container>
          <Flex className={'pt-[140px] border-b border-white pb-[170px]'}>
            <div className="">
              <Image imgSrc={das}/>
              <Heading as={'p'} text={'Follow on social service'} className={'font-pop font-medium text-[25px] text-white leading-[125%] max-w-[305px] inline-block pb-[16px] pt-[33px]'}/>
              <div className="">
              <Flex className={'gap-3 text-[30px] '}>
              <FaFacebook />
              <FaSquareInstagram />
              </Flex>

              </div>
            </div>
            <div className="ml-[125px]">
              <Flex className={'flex-col space-y-5'}>
                <Menu mText={'Links'} className={'font-robo font-bold text-[30px] leading-[125%] text-white '}/>
                <Menu mText={'Home'} className={'font-pop text-[20px] leading-[150%] text-white'}/>
                <Menu mText={'Help center'} className={'font-pop text-[20px] leading-[150%] text-white'}/>
                <Menu mText={'Service'} className={'font-pop text-[20px] leading-[150%] text-white'}/>
              </Flex>
            </div>
            <div className="ml-[225px]">
              <Flex className={'flex-col space-y-5'}>
                <Menu mText={'Resource '} className={'font-robo font-bold text-[30px] leading-[125%] text-white '}/>
                <Menu mText={'About Us'} className={'font-pop text-[20px] leading-[150%] text-white'}/>
                <Menu mText={'Carrier'} className={'font-pop text-[20px] leading-[150%] text-white'}/>
                <Menu mText={'Legal Notice'} className={'font-pop text-[20px] leading-[150%] text-white'}/>
              </Flex>
            </div>
            <div className="ml-[225px]">
              <Flex className={'flex-col space-y-5'}>
                <Menu mText={'Contacts'} className={'font-robo font-bold text-[30px] leading-[125%] text-white '}/>
                <Menu mText={'192. New york'} className={'font-pop text-[20px] leading-[150%] text-white'}/>
                <Menu mText={'Support'} className={'font-pop text-[20px] leading-[150%] text-white'}/>
                <Menu mText={'+1125156363'} className={'font-pop text-[20px] leading-[150%] text-white'}/>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Dashbord Part End  */}
    </>
  )
}

export default App
