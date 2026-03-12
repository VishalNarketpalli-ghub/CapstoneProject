import {NavLink} from 'react-router'


function Header() {
  return (
    <div className="flex bg-[#181228] justify-between items-center gap-3">
        <img src="https://s3u.tmimgcdn.com/1600x0/u2388748/6dcaaa34ae3e118af6defbbd184391a9.jpg"
                alt="Logo"
                className="w-18 rounded-[50%]"        
        />
        <div>
            <ul className='text-white flex justify-around gap-8 mr-5'>
                <li>
                    <NavLink to="" className={({isActive})=>isActive?'text-amber-400 rounded':''}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/register" className={({isActive})=>isActive?'text-amber-400 rounded':''}>Register</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={({isActive})=>isActive?'text-amber-400 rounded':''}>Login</NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header