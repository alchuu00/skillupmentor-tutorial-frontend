import Topbar from 'components/ui/Topbar'
import React, { FC, ReactNode } from 'react'
import Sidebar from './Sidebar'

interface Props {
  children: ReactNode | ReactNode[]
}

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="d-flex">
        <Sidebar></Sidebar>
        <Topbar></Topbar>
      </div>
      <div className="p-4"></div>
    </>
  )
}

export default DashboardLayout
