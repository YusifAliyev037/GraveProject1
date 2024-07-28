import Image from 'next/image'
import React from 'react'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'


function Header() {

  const {push, asPath} = useRouter()
  return (
    <div>
      <div className='flex justify-between py-4 px-8 bg-white10 mb-4'>
        <div className=' flex gap-10'>
          <div className=' flex gap-2 items-center'>
            <Image width={18} height={18} src='/location.svg' alt={'location'}/>
            <p className=' text-sm font-medium'>24 Olive Street, Prairie, NY 53590</p>
          </div>
          <div className=' flex gap-2 items-center'>
            <Image width={18} height={18} src='/mail.svg' alt={'mail'}/>
            <p className=' text-sm font-medium'>unknown@gmail.com</p>
          </div>
        </div>
        <div className='flex gap-20'>
        <div className=' flex gap-2 items-center'>
            <Image width={18} height={18} src='/time.svg' alt={'mail'}/>
            <p className=' text-sm font-medium'>Пн – Пт: 8:00 – 17:00</p>
          </div>
          <div className='flex gap-2'>
            <Image width={18} height={18} src='/insta.svg' alt={'insta'}/>
            <Image width={18} height={18} src='/fb.svg' alt={'FB'}/>
            <Image width={18} height={18} src='/twiter.svg' alt={'twit'}/>
          </div>
        </div>
      </div>
      <div className=' flex justify-between px-7'>
      <div className=' flex gap-3 items-center'>
      <Image width={18} height={18} src='/logo.svg' alt={'insta'}/>
        <p className=' font-semibold text-lg'>LOGO</p>
      </div>
      <ul className=' flex gap-8'>
        <li className=' font-normal text-sm cursor-pointer'>ГЛАВНАЯ</li>
        <li className=' font-normal text-sm cursor-pointer'>О НАС</li>
        <li onClick={()=> push("/services")} className=' font-normal text-sm cursor-pointer'>УСЛУГИ</li>
        <li className=' font-normal text-sm cursor-pointer'>СВЯЗАТЬСЯ С НАМИ</li>
      </ul>
      <div className='flex gap-4'>
      <Button color='inherit'  variant="contained">Bойти</Button>
      <Button color='success' variant="contained">Подписаться</Button>
      </div>

      </div>

    </div>
  )
}

export default Header