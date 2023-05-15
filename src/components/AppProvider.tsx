// import { createContext, useState } from 'react'
// import {
//     AreaChartOutlined,
//     MedicineBoxOutlined,
//     UserOutlined,
// } from '@ant-design/icons';
// import { GiMedicines } from 'react-icons/gi'
// import MedicineCategory from '../pages/Medicine/category';
// import DashboardIndex from '../pages/Dashboard';
// import MedicineInfomation from '../pages/Medicine/infomation';
// import MedicalArticles from '../pages/Medical/articles';
// import UserIndex from '../pages/User';
// export const context = createContext<any>({})

// //side menu list data
// export const sideMenuList = [
//     {
//         key: '/admin/dashboard',
//         icon: <AreaChartOutlined />,
//         element: <DashboardIndex />,
//         label: 'Dashboard',
//     },
//     {
//         key: '/admin/medicine',
//         icon: <GiMedicines />,
//         label: 'Medicine',
//         roles: ['admin', 'editor'],
//         children: [{
//             label: 'Categories',
//             key: '/admin/medicine/categories',
//             element: <MedicineCategory />,
//             roles: ['admin'],
//         }, {
//             label: 'Infomation',
//             key: '/admin/medicine/infomation',
//             element: <MedicineInfomation />,
//         }
//         ]
//     },
//     {
//         key: '/admin/medical',
//         icon: <MedicineBoxOutlined />,
//         label: 'Medical',
//         roles: ['admin', 'editor'],
//         children: [
//             {
//                 label: 'Articles',
//                 key: '/admin/medical/articles',
//                 element: <MedicalArticles />,
//                 roles: ['admin'],
//             }, {
//                 label: 'Infomation',
//                 key: '/admin/medical/infomation',
//                 element: <MedicineInfomation />,
//                 roles: ['admin', 'editor'],
//             }
//         ]
//     },
//     {
//         key: '/admin/user',
//         icon: <UserOutlined />,
//         label: 'User',
//         element: <UserIndex />,
//         roles: ['admin', 'support'],
//     }
// ]

// /**
//  * check role get different access : sideMenuList
//  * @param roles 
//  * @returns 
//  */
// function findRoles(roles: string) {
//     const arr: any = []
//     findInfo(sideMenuList)
//     function findInfo(data: any, parent: any = null) {
//         data.forEach((element: any) => {
//             const { children, ...info } = element
//             if (children) {
//                 info.children = []
//                 findInfo(children, info.children)
//                 info.children.length == 0 ? delete info.children : null
//             }
//             if(info.roles){
//                 if(info.roles?.includes(roles)) parent?parent.push[info]:arr.push[info]
//             }else{
//                 parent?parent.push[info]:arr.push[info]
//             }
//         });
//     }
//     return arr
// }
// /**
//  * 
//  * @param menu 
//  * @returns 
//  */
// function flatRowtes(menu:any){
//     const arr:any=[]

//     function findInfo(data:any){
//         data.forEach((element:any) => {
//             const {children,...info} =element
//             arr.push(info)
//             if(children){
//                 findInfo(children)
//             }
//         });
//     }
//     findInfo(menu)
//     return arr
// }


// function AppProvider({ children }: any) {
//     const [menu, setMenu] = useState([])
//     const [routes, setRoutes] = useState([])
//     //different role has different access
//     const resetMenu = (role: string) => {
//         //here reset menu and routes data
//         const tempMenu = findRoles(role)
//         setMenu(tempMenu)
//         setRoutes(routes) 
//     }
//     return (
//         <context.Provider value={{ menu, routes, resetMenu }}>{children}</context.Provider>
//     )
// }

// export default AppProvider