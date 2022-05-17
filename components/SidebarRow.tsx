import React, { SVGProps } from 'react'
import toast from 'react-hot-toast'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
  onClick?: () => {}
}

function SidebarRow({ Icon, title, onClick }: Props) {
  const notify = () => toast('Logging out! Please wait...', {})

  return (
    <div
      onClick={() => {onClick?.(),notify()}}
      className=" group group flex max-w-fit items-center 
    space-x-2 rounded-full px-4  py-3 transition-all duration-200 hover:bg-gray-200 cursor-pointer"
    >
      <Icon className="h-6 w-6" />
      <p className="hidden text-base font-light group-hover:text-twitter md:inline-flex lg:text-xl">
        {title}
      </p>
    </div>
  )
}

export default SidebarRow
