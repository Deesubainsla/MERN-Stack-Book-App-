import React from 'react'

function Footer() {
    return <>
        <div>
            <hr className='bg-red-600 w-[95%]  h-1 rounded mx-auto mb-4' />
            <footer className="footer gap-4 mb-3 footer-center bg-base-200 text-base-content rounded  px-8 md:px-16 ">
                {/* <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover hover:text-red-600">About us</a>
                    <a className="link link-hover hover:text-red-600">Contact</a>
                    <a className="link link-hover hover:text-red-600">Jobs</a>
                    <a className="link link-hover hover:text-red-600">Press kit</a>
                </nav> */}

                <nav className=''>
                    <div className="grid grid-flow-col gap-12">
                        <a href='https://github.com/Deesubainsla'
                         target="_blank" //to open url in another tab
                         rel="noopener noreferrer" //for security issue to prevent unauthorize access from window object:
                        className='hover:scale-125 duration-300 hover:text-red-600'>
                           
                            <div className="text-3xl">
                                <ion-icon name="logo-github"></ion-icon>
                            </div>
                        </a>

                        <a href='https://www.instagram.com/deesu_0001/?next=%2F&hl=en' 
                         target="_blank" //to open url in another tab
                         rel="noopener noreferrer" //for security issue to prevent unauthorize access from window object:
                        className='hover:scale-125 duration-300 hover:text-red-600'>
                           
                            <div className="text-3xl">
                            <ion-icon name="logo-instagram"></ion-icon>
                            </div>
                        </a>
                        <a href='https://www.linkedin.com/in/dinesh-kumar-68078324a/' 
                         target="_blank" //to open url in another tab
                         rel="noopener noreferrer" //for security issue to prevent unauthorize access from window object:
                        className='hover:scale-125 duration-300 hover:text-red-600'>
                            
                            <div className="text-3xl">
                            <ion-icon name="logo-linkedin"></ion-icon>
                            </div>
                        </a>
                    </div>
                </nav>
                <aside className='mt-0' >
                    <p>Copyright © {new Date().getFullYear()} - Deesu Bainsla Creations</p>
                </aside>
            </footer>
        </div>
    </>
}

export default Footer