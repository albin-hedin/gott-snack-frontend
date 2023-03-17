import Footer from './Footer'


const MainLayout = ({ children }: any) => {
  return (
    <main className='flex-1'>
      {children}
    </main>
  )
}

export default MainLayout
