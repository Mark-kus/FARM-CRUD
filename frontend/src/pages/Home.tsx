import TaskList from '../components/TaskList'

function Home() {
  return (
    <>
      <header className='flex justify-between items-center'>
        <h1 className='p-2 text-3xl font-bold'>Homepage</h1>
        <a
          href='/tasks/new'
          className='p-2 text-3xl hover:bg-zinc-200'>
          New
        </a>
      </header>
      <TaskList />
    </>
  )
}

export default Home
